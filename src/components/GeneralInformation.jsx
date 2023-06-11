import React from 'react';

export const GeneralInformation = () => {
  return (
    <div className="w-11/12 mt-4 py-4 bg-gray-100 rounded-md flex flex-col justify-center items-center gap-2">
      <h1 className="font-poppins text-lg">General Information</h1>
      <input
        type="text"
        placeholder="First Name"
        className="w-11/12 outline-none border border-gray-300 p-2 font-poppins rounded"
      />
      <input
        type="text"
        placeholder="Last Name"
        className="w-11/12 outline-none border border-gray-300 p-2 font-poppins rounded"
      />
      <input
        type="text"
        placeholder="Email"
        className="w-11/12 outline-none border border-gray-300 p-2 font-poppins rounded"
      />
      <input
        type="text"
        placeholder="Phone Number"
        className="w-11/12 outline-none border border-gray-300 p-2 font-poppins rounded none"
      />
    </div>
  );
};
