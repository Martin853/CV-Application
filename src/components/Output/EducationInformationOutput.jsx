import React from 'react';

export const EducationInformation = (props) => {
  return (
    <div className="w-11/12 h-fit mt-4 py-4 bg-gray-200 rounded-md flex flex-col justify-center items-start gap-2">
      <h1 className="font-poppins text-2xl font-bold ml-2">
        Education Information
      </h1>
      <h1 className="font-poppins text-xl ml-2">School Name: {props.school}</h1>
      <h1 className="font-poppins text-xl ml-2">
        Title Of Study: {props.study}
      </h1>
      <h1 className="font-poppins text-xl ml-2">From: {props.educationFrom}</h1>
      <h1 className="font-poppins text-xl ml-2">To: {props.educationTo}</h1>
    </div>
  );
};
