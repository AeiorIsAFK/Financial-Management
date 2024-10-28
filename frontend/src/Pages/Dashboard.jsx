import React, { useState } from 'react';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className={`bg-blue-500 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}>
        <h2 className="text-2xl font-bold">My Dashboard</h2>
        <nav>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">Home</a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">Profile</a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">Settings</a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">Logout</a>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-md w-full">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <button
              onClick={toggleMenu}
              className="text-blue-500 hover:text-blue-700 focus:outline-none md:hidden"
            >
              {/* Hamburger icon */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </header>

        <main className="flex-1 bg-gray-100 p-6">
          <h2 className="text-2xl font-semibold">Welcome to your Dashboard!</h2>
          <p className="mt-4 text-gray-700">Here you can manage your profile, settings, and more.</p>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;