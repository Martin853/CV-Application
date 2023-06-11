import React from 'react';
import { Navbar } from './components/Navbar';
import { InputSection } from './components/InputSection';
import { OutputSection } from './components/OutputSection';

export const App = () => {
  return (
    <div className="flex flex-col justify-center items-center overflow-x-hidden">
      <Navbar />
      <InputSection />
      <OutputSection />
    </div>
  );
};
