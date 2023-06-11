import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { InputSection } from './components/InputSection';
import { OutputSection } from './components/OutputSection';

export const App = () => {
  // General Information
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Handle Change General Information
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  // Education Information
  const [school, setSchool] = useState('');
  const [study, setStudy] = useState('');
  const [educationFrom, setEducationFrom] = useState('');
  const [educationTo, setEducationTo] = useState('');

  // Handle Change Education Information
  const handleSchoolChange = (event) => {
    setSchool(event.target.value);
  };

  const handleStudyChange = (event) => {
    setStudy(event.target.value);
  };

  const handleEducationFromChange = (event) => {
    setEducationFrom(event.target.value);
  };

  const handleEducationToChange = (event) => {
    setEducationTo(event.target.value);
  };

  // Experience Information
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [task, setTask] = useState('');
  const [experienceFrom, setExperienceFrom] = useState('');
  const [experienceTo, setExperienceTo] = useState('');

  // Handle Change Experience Information
  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleExperienceFromChange = (event) => {
    setExperienceFrom(event.target.value);
  };

  const handleExperienceToChange = (event) => {
    setExperienceTo(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center overflow-x-hidden">
      <Navbar />
      <InputSection
        onFirstNameChange={handleFirstNameChange}
        onLastNameChange={handleLastNameChange}
        onEmailChange={handleEmailChange}
        onPhoneChange={handlePhoneChange}
        onSchoolChange={handleSchoolChange}
        onStudyChange={handleStudyChange}
        onEducationFromChange={handleEducationFromChange}
        onEducationToChange={handleEducationToChange}
        onCompanyChange={handleCompanyChange}
        onPositionChange={handlePositionChange}
        onTaskChange={handleTaskChange}
        onExperienceFromChange={handleExperienceFromChange}
        onExperienceToChange={handleExperienceToChange}
      />
      <OutputSection
        firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone}
        school={school}
        study={study}
        educationFrom={educationFrom}
        educationTo={educationTo}
        company={company}
        position={position}
        task={task}
        experienceFrom={experienceFrom}
        experienceTo={experienceTo}
      />
    </div>
  );
};
