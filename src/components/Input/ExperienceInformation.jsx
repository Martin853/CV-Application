import React from 'react';

export const ExperienceInformation = (props) => {
  return (
    <div className="w-11/12 mt-4 mb-4 py-4 bg-gray-100 rounded-md flex flex-col justify-center items-center gap-2">
      <h1 className="font-poppins text-lg">Experience Information</h1>
      <input
        type="text"
        placeholder="Company Name"
        className="w-11/12 outline-none border border-gray-300 p-2 font-poppins rounded"
        onChange={props.onCompanyChange}
      />
      <input
        type="text"
        placeholder="Position Title"
        className="w-11/12 outline-none border border-gray-300 p-2 font-poppins rounded"
        onChange={props.onPositionChange}
      />
      <input
        type="text"
        placeholder="Main Task"
        className="w-11/12 outline-none border border-gray-300 p-2 font-poppins rounded"
        onChange={props.onTaskChange}
      />
      <input
        type="text"
        placeholder="From"
        className="w-11/12 outline-none border border-gray-300 p-2 font-poppins rounded"
        onChange={props.onExperienceFromChange}
      />
      <input
        type="text"
        placeholder="To"
        className="w-11/12 outline-none border border-gray-300 p-2 font-poppins rounded"
        onChange={props.onExperienceToChange}
      />
    </div>
  );
};
