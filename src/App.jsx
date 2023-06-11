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

  // Education Information
  const [school, setSchool] = useState('');
  const [study, setStudy] = useState('');
  const [educationFrom, setEducationFrom] = useState('');
  const [educationTo, setEducationTo] = useState('');

  // Experience Information
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [task, setTask] = useState('');
  const [experienceFrom, setExperienceFrom] = useState('');
  const [experienceTo, setExperienceTo] = useState('');

  return (
    <div className="flex flex-col justify-center items-center overflow-x-hidden">
      <Navbar />
      <InputSection />
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
