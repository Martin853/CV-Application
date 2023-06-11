import React from 'react';

export const ExperienceInformation = (props) => {
  return (
    <div className="w-11/12 h-fit mt-4 py-4 bg-gray-200 rounded-md flex flex-col justify-center items-start gap-2">
      <h1 className="font-poppins text-2xl font-bold ml-2">
        Experience Information
      </h1>
      <h1 className="font-poppins text-xl ml-2">
        Company Name: {props.company}
      </h1>
      <h1 className="font-poppins text-xl ml-2">
        Position Title: {props.position}
      </h1>
      <h1 className="font-poppins text-xl ml-2">Main Task: {props.task}</h1>
      <h1 className="font-poppins text-xl ml-2">
        From: {props.experienceFrom}
      </h1>
      <h1 className="font-poppins text-xl ml-2">To: {props.experienceTo}</h1>
    </div>
  );
};
