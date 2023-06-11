import React from 'react';
import { GeneralInformation } from './Input/GeneralInformation';
import { EducationInformation } from './Input/EducationInformation';
import { ExperienceInformation } from './Input/ExperienceInformation';

export const InputSection = () => {
  return (
    <div className="mt-4 mb-4 w-11/12 h-fit bg-emerald-800 rounded flex flex-col justify-start items-center py-4">
      <h1 className="font-poppins text-white text-3xl">Input Section</h1>
      <GeneralInformation />
      <EducationInformation />
      <ExperienceInformation />
    </div>
  );
};
