import React from 'react'
import { useState, useEffect } from 'react';
import { FaPeopleGroup } from "react-icons/fa6";
import { MdAddToPhotos } from "react-icons/md";
import { useSocket } from "../context/socketContext"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PiHandDepositFill } from "react-icons/pi";
import { PiHandWithdrawFill } from "react-icons/pi";
import { BsCashStack } from "react-icons/bs";

function Overview() {

  const socket = useSocket()

  const formatCurrency = (value) => {
    if (value === undefined || value === null) {
      return `₱0.00`; 
    }
    return `₱${value.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
  };

  // Sample data
  const data = [
    { name: 'Jan', sales: 4000, profit: 2400 },
    { name: 'Feb', sales: 3000, profit: 1398 },
    { name: 'Mar', sales: 2000, profit: 9800 },
    { name: 'Apr', sales: 2780, profit: 3908 },
    { name: 'May', sales: 1890, profit: 4800 },
    { name: 'Jun', sales: 2390, profit: 3800 },
    { name: 'Jul', sales: 3490, profit: 4300 },
  ];
  

  // HANDLES SUBMIT
  const handleSubmit = () => {
    console.log({
      date,
      amount,
      budgetType
    })
  }

  return (
    <div>
        <div className='h-screen w-full'>
          <div className='max-w-screen-2xl mx-auto flex flex-col  mt-10'>
            <h1 className='font-bold text-md'>Dashboard</h1>

            <h1 className='mt-10'>Cash Overview</h1>

            <div className='flex gap-x-4'>
              <div className="bg-white shadow-xl w-[280px] p-5 rounded-lg mt-3 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="flex items-center justify-between">
                  <p className="text-gray-600 font-semibold text-md">Total Cash</p>
                  <BsCashStack className='text-2xl text-blue-500' />
                </div>
                <div className="flex gap-3 my-3">
                  <p className="text-4xl text-black font-bold">₱ 5,000,000</p>
                </div>
              </div>

              <div className="bg-white shadow-xl w-[280px] p-5 rounded-lg mt-3 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer" onClick={()=>document.getElementById('my_modal_2').showModal()}>
                <div className="flex items-center justify-between">
                  <p className="text-gray-600 font-semibold text-md">Cash Withdraw</p>
                </div>
                <div className="flex gap-3 my-3">
                  <p className="text-4xl text-black font-bold flex"><PiHandWithdrawFill className='text-4xl text-emerald-500 mr-3' /> Withdraw</p>
                </div>
              </div>

              <div className="bg-white shadow-xl w-[280px] p-5 rounded-lg mt-3 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer" onClick={()=>document.getElementById('my_modal_2').showModal()}>
                <div className="flex items-center justify-between">
                  <p className="text-gray-600 font-semibold text-md">Cash Deposit</p>
                </div>
                <div className="flex gap-3 my-3">
                  <p className="text-4xl text-black font-bold flex"><PiHandDepositFill className='text-4xl text-red-500 mr-3' /> Deposit</p>
                </div>
              </div>
            </div>

            <h1 className='mt-10 mb-3'>Analytics</h1>
            <div className="bg-white p-10 rounded-xl shadow-xl">
              <div style={{ width: '100%', height: '400px', margin: '0 auto' }}>
                <h1 style={{ textAlign: 'center' }} className='mb-3'>Monthly Analytics</h1>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={3}/>
                    <Line type="monotone" dataKey="profit" stroke="#82ca9d" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Overview
