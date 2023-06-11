import React from 'react';
import { Navbar } from './components/Navbar';
import { InputSection } from './components/InputSection';

export const App = () => {
  return (
    <div className="flex flex-col justify-center items-center overflow-x-hidden">
      <Navbar />
      <InputSection />
    </div>
  );
};
