import React from 'react';

export const GeneralInformationOutput = () => {
  return (
    <div className="w-11/12 h-fit mt-4 py-4 bg-gray-200 rounded-md flex flex-col justify-center items-start gap-2">
      <h1 className="font-poppins text-2xl font-bold ml-2">
        General Information
      </h1>
      <h1 className="font-poppins text-xl ml-2">First Name:</h1>
      <h1 className="font-poppins text-xl ml-2">Last Name:</h1>
      <h1 className="font-poppins text-xl ml-2">Email:</h1>
      <h1 className="font-poppins text-xl ml-2">Phone Number:</h1>
    </div>
  );
};
