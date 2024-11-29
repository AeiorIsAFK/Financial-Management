import React from 'react'
import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { MdAddToPhotos } from "react-icons/md";
import { PiMoneyFill } from "react-icons/pi";

function insuranceClaims() {

  const [searchText, setSearchText] = useState('')

  const formatCurrency = (value) => {
    if (value === undefined || value === null) {
      return `₱0.00`; 
    }
    return `₱${value.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
  };

  const columns = [
    { name: 'Claim ID', selector: row => row.claimId },
    { name: 'Claim Date', selector: row => row.claimDate },
    { name: 'Claim Amount', selector: row => formatCurrency(row.claimAmount) },
    { name: 'Claim Type', selector: row => row.claimType },
  ];
  
  const data = [
    {
      claimId: 'CLM001',
      claimDate: '2024-11-01',
      claimAmount: 7500,
      claimType: 'Health',
    },
    {
      claimId: 'CLM002',
      claimDate: '2024-11-03',
      claimAmount: 12000,
      claimType: 'Auto',
    },
    {
      claimId: 'CLM003',
      claimDate: '2024-11-05',
      claimAmount: 45000,
      claimType: 'Home',
    },
    {
      claimId: 'CLM004',
      claimDate: '2024-11-07',
      claimAmount: 2000,
      claimType: 'Travel',
    },
    {
      claimId: 'CLM005',
      claimDate: '2024-11-09',
      claimAmount: 30000,
      claimType: 'Life',
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
            <h1 className='font-bold text-md'>Insurance Claims</h1>

            <div className='flex gap-x-4'>
              <div className="bg-white shadow-xl w-[280px] p-5 rounded-lg mt-3 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="flex items-center justify-between">
                  <p className="text-gray-600 font-semibold text-md">Insurance Claims Budget</p>
                  <PiMoneyFill className='text-2xl text-blue-500' />
                </div>
                <div className="flex gap-3 my-3">
                  <p className="text-4xl text-black font-bold">₱ 50,000</p>
                </div>
              </div>

              <div className="bg-white shadow-xl w-[280px] p-5 rounded-lg mt-3 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="flex items-center justify-between">
                  <p className="text-gray-600 font-semibold text-md">Add Insurance Claim</p>
                </div>
                <div className="flex gap-3 my-3">
                  <p className="text-4xl text-black font-bold flex"><MdAddToPhotos className='text-4xl text-emerald-500 mr-3' /> Add</p>
                </div>
              </div>

            </div>

            <div className="overflow-x-auto w-full mt-10">
              <h1 className='mb-4'>Insurance Claims Records</h1>
              <DataTable
                title="Insurance Claims Records"
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

export default insuranceClaims
