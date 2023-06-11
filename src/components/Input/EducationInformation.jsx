import React from 'react';

export const EducationInformation = () => {
  return (
    <div className="w-11/12 mt-4 py-4 bg-gray-100 rounded-md flex flex-col justify-center items-center gap-2">
      <h1 className="font-poppins text-lg">Education Information</h1>
      <input
        type="text"
        placeholder="School Name"
        className="w-11/12 outline-none border border-gray-300 p-2 font-poppins rounded"
      />
      <input
        type="text"
        placeholder="Title Of Study"
        className="w-11/12 outline-none border border-gray-300 p-2 font-poppins rounded"
      />
      <input
        type="text"
        placeholder="From"
        className="w-11/12 outline-none border border-gray-300 p-2 font-poppins rounded"
      />
      <input
        type="text"
        placeholder="To"
        className="w-11/12 outline-none border border-gray-300 p-2 font-poppins rounded"
      />
    </div>
  );
};
