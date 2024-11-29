import React from 'react'
import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { FaPeopleGroup } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { MdAddToPhotos } from "react-icons/md";

function accountsManagement() {
  const [searchText, setSearchText] = useState('')

  const formatCurrency = (value) => {
    if (value === undefined || value === null) {
      return `₱0.00`; 
    }
    return `₱${value.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
  };

  const columns = [
    { name: 'Account ID', selector: row => row.accountId },
    { name: 'Account Name', selector: row => row.accountName },
    { name: 'Account Type', selector: row => row.accountType },
    { name: 'Role', selector: row => row.role },
    { name: 'Date Created', selector: row => row.dateCreated },
  ];
  
  const data = [
    {
      accountId: 'ACC001',
      accountName: 'John Doe',
      accountType: 'Savings',
      role: 'User',
      dateCreated: '2024-01-10',
    },
    {
      accountId: 'ACC002',
      accountName: 'Jane Smith',
      accountType: 'Current',
      role: 'Administrator',
      dateCreated: '2024-02-15',
    },
    {
      accountId: 'ACC003',
      accountName: 'Acme Corp',
      accountType: 'Business',
      role: 'Manager',
      dateCreated: '2024-03-20',
    },
    {
      accountId: 'ACC004',
      accountName: 'Mary Johnson',
      accountType: 'Savings',
      role: 'User',
      dateCreated: '2024-04-25',
    },
    {
      accountId: 'ACC005',
      accountName: 'Global Ventures',
      accountType: 'Business',
      role: 'Manager',
      dateCreated: '2024-05-30',
    },
  ];
  
  

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const filteredData = data.filter(row =>
    Object.values(row).some(value =>
      value.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );


  return (
    <div>
        <div className='h-screen w-full'>
          <div className='max-w-screen-2xl mx-auto flex flex-col  mt-10'>
            <h1 className='font-bold text-md'>Account Management</h1>

            <div className='flex gap-x-4'>

              <div className="bg-white shadow-xl w-[280px] p-5 rounded-lg mt-3 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="flex items-center justify-between">
                  <p className="text-gray-600 font-semibold text-md">Add New Account</p>
                </div>
                <div className="flex gap-3 my-3">
                  <p className="text-4xl text-black font-bold flex"><MdAddToPhotos className='text-4xl text-emerald-500 mr-3' /> Add</p>
                </div>
              </div>

            </div>

            <div className="overflow-x-auto w-full mt-10">
              <h1 className='mb-4'>Accounts List</h1>
              <DataTable
                title="Accounts List"
                columns={columns}
                data={filteredData}
                pagination
                defaultSortField="name"
                highlightOnHover
                pointerOnHover
                subHeader
                subHeaderComponent={
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchText}
                    onChange={handleSearch}
                    className="mb-2 p-2 border border-gray-400 rounded-lg"
                  />
                }
              />
            </div>

          </div>
        </div>
    </div>
  )
}

export default accountsManagement
