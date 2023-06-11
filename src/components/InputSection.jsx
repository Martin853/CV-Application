import React from 'react';
import { GeneralInformation } from './Input/GeneralInformation';
import { EducationInformation } from './Input/EducationInformation';
import { ExperienceInformation } from './Input/ExperienceInformation';

export const InputSection = (props) => {
  return (
    <div className="mt-4 mb-4 w-11/12 h-fit bg-emerald-800 rounded flex flex-col justify-start items-center py-4">
      <h1 className="font-poppins text-white text-3xl">Input Section</h1>
      <GeneralInformation
        onFirstNameChange={props.onFirstNameChange}
        onLastNameChange={props.onLastNameChange}
        onEmailChange={props.onEmailChange}
        onPhoneChange={props.onPhoneChange}
      />
      <EducationInformation
        onSchoolChange={props.onSchoolChange}
        onStudyChange={props.onStudyChange}
        onEducationFromChange={props.onEducationFromChange}
        onEducationToChange={props.onEducationToChange}
      />
      <ExperienceInformation
        onCompanyChange={props.onCompanyChange}
        onPositionChange={props.onPositionChange}
        onTaskChange={props.onTaskChange}
        onExperienceFromChange={props.onExperienceFromChange}
        onExperienceToChange={props.onExperienceToChange}
      />
    </div>
  );
};
