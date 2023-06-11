import React from 'react';

export const GeneralInformationOutput = (props) => {
  return (
    <div className="w-11/12 h-fit mt-4 py-4 bg-gray-200 rounded-md flex flex-col justify-center items-start gap-2">
      <h1 className="font-poppins text-2xl font-bold ml-2">
        General Information
      </h1>
      <h1 className="font-poppins text-xl ml-2">
        First Name: {props.firstName}
      </h1>
      <h1 className="font-poppins text-xl ml-2">Last Name: {props.lastName}</h1>
      <h1 className="font-poppins text-xl ml-2">Email: {props.email}</h1>
      <h1 className="font-poppins text-xl ml-2">Phone Number: {props.phone}</h1>
    </div>
  );
};
