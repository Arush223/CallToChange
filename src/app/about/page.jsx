import React from 'react';
import NavLinks from '../nav-links';

export default function Page() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
      <NavLinks />
      <div className="text-2xl font-bold text-center mt-10">
         CallToChange
      </div>
      <div className="text-lg text-center mt-5">
        We are a group of students from UCSD who created this website during LA Hacks.
      </div>
      <div className="text-lg text-center mt-5">
        We are passionate about the environment and wanted to raise awareness about the environmental cost of LLMs.
      </div>
      <div className="text-lg text-center mt-5">
        We hope you enjoy our website!
      </div>
      <div className="text-lg text-center mt-5">
        - Team LiquidDeath
      </div>

      <div className="absolute bottom-0 left-0 p-2 text-white text-xs">
          Copyright &copy; 2024 Team LiquidDeath. Created during LA Hacks.
        </div>
    </div>
  );
}

