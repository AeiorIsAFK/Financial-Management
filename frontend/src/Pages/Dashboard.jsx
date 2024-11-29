import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import AccountsManagement from '../Components/accountsManagement';
import BudgetManagement from '../Components/budgetManagement';
import InsuranceClaims from '../Components/insuranceClaims';
import Overview from '../Components/Overview';
import PaymentManagement from '../Components/paymentManagement'
import { MdDashboard } from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";
import { LuBaggageClaim } from "react-icons/lu";
import { MdOutlinePayment } from "react-icons/md";
import { MdSupervisorAccount } from "react-icons/md";
import axios from 'axios'



function AdminPage() {

    const [isToggled, setIsToggled] = useState(true);
    const [isVerifying, setIsVerifying] = useState(true);
    const [profile, setProfile] = useState('')



    const handleSideNav = () => {
        setIsToggled(!isToggled);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = "/";
    };

    useEffect(() => {
        const token = localStorage.getItem('token')

        const verify = async () => {
            try{
                const response = await axios.get(`http://localhost:4000/auth-api/protected`,{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
    
                if(response){
                    setProfile(response.data)
                    setIsVerifying(false)
                }
            }
            catch(error){
                console.log(error.response)
                localStorage.removeItem('token')
                alert('Error Verification')
                window.location.href = "/";
            }
        }

        verify()
    }, [])


    if(isVerifying){
        return (
            <div className="flex items-center justify-center h-screen">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
            </div>
          );
    }


    return (
        <>
            <div className="h-screen flex">
                {/* Sidebar */}
                <div className={`sidebar transition-all duration-300 ${isToggled ? 'w-6/12 lg:w-2/12 md:w-4/12 sm:w-4/12' : 'w-0'} overflow-auto`}>
                    <div className="flex flex-col justify-center my-4">
                        <ul className="menu menu-vertical px-1">
                            <li><Link to=""><MdDashboard />DASHBOARD</Link></li>
                            <li><Link to="budgetManagement"><FaMoneyBills />BUDGET MANAGEMENT</Link></li>
                            <li><Link to="insuranceClaims"><LuBaggageClaim />INSURANCE CLAIMS</Link></li>
                            <li><Link to="paymentManagement"><MdOutlinePayment />PAYMENT MANAGEMENT</Link></li>
                            <li><Link to="accountsManagement"><MdSupervisorAccount />ACCOUNTS MANAGEMENT</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Main content */}
                <div className={`flex-grow transition-all duration-300 bg-gray-200 ${isToggled ? 'w-6/12 lg:w-2/12 md:w-8/12 sm:w-8/12' : 'w-full'} overflow-auto`}>
                    <div className="mx-2 my-1">
                        {/* NAVBAR */}
                        <div className="navbar bg-base-100 rounded-xl">
                            <div className="navbar-start">
                                <button className="btn btn-ghost btn-circle" onClick={handleSideNav}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                                </button>
                            </div>
                            <div className="navbar-center">
                                <a className="btn btn-ghost text-xl">FINANCIAL MANAGEMENT SYSTEM</a>
                            </div>
                            <div className="navbar-end">
                                <div className={`dropdown dropdown-end `}>
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img className="w-full h-full object-cover" alt="Tailwind CSS Navbar component" src="#" />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <h1 className="ml-3 mb-1">{profile.username}<span className="badge text-teal-500 ml-2">online</span></h1>
                                        <li><Link to="Settings">Settings</Link></li>
                                        <li onClick={handleLogout}><a>Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* DATA */}
                        <Routes>
                          <Route path="accountsManagement" element={<AccountsManagement/>} />
                          <Route path="" element={<Overview/>} />
                          <Route path="budgetManagement" element={<BudgetManagement/>} />
                          <Route path="insuranceClaims" element={<InsuranceClaims/>} />
                          <Route path="paymentManagement" element={<PaymentManagement/>} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminPage;
