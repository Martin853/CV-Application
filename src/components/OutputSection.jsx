import React from 'react';
import { GeneralInformationOutput } from './Output/GeneralInformationOutput';
import { EducationInformation } from './Output/EducationInformationOutput';
import { ExperienceInformation } from './Output/ExperienceInformation';

export const OutputSection = (props) => {
  return (
    <div className="mt-4 mb-4 w-11/12 h-fit bg-emerald-800 rounded flex flex-col justify-start items-center py-4">
      <h1 className="font-poppins text-white text-3xl">CV</h1>
      <GeneralInformationOutput
        firstName={props.firstName}
        lastName={props.lastName}
        email={props.email}
        phone={props.phone}
      />
      <EducationInformation
        school={props.school}
        study={props.study}
        educationFrom={props.educationFrom}
        educationTo={props.educationTo}
      />
      <ExperienceInformation
        company={props.company}
        position={props.position}
        task={props.task}
        experienceFrom={props.experienceFrom}
        experienceTo={props.experienceTo}
      />
    </div>
  );
};
