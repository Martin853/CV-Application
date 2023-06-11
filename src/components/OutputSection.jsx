import React from 'react';
import { GeneralInformationOutput } from './Output/GeneralInformationOutput';
import { EducationInformation } from './Output/EducationInformationOutput';
import { ExperienceInformation } from './Output/ExperienceInformation';

export const OutputSection = () => {
  return (
    <div className="mt-4 mb-4 w-11/12 h-fit bg-emerald-800 rounded flex flex-col justify-start items-center py-4">
      <h1 className="font-poppins text-white text-3xl">CV</h1>
      <GeneralInformationOutput />
      <EducationInformation />
      <ExperienceInformation />
    </div>
  );
};
