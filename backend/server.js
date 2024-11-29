require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { Server } = require('socket.io')
const  http  = require('http')

const authRoutes = require('./routes/authRoutes');


//Middlewares
const app = express();

const server = http.createServer(app)
const io = new Server(server, {
  cors:{
    origin:'http://localhost:5173',
    methods: ['GET', 'POST'],
  }
})

app.use(cors());
app.use(express.json());
app.use((req,res,next) => {
    console.log(`PATH: ${req.path} METHOD: ${req.method}`)
    next()
})

// Routes
app.use('/auth-api', authRoutes);



// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {

  server.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);

    io.on('connection', (socket) => {
      console.log(`Client Connected: ${socket.id}`)


      socket.on('disconnect', () => {
        console.log(`Client disconnected ${socket.id}` )
      })
    })
  });

  })

  .catch(err => console.log(err));

