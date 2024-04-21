import React from 'react';
import NavLinks from '../nav-links';

export default function Page() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
      <NavLinks />
      <div className="text-2xl font-bold text-center mt-10">
         CallToChange
      </div>
      <div className="absolute bottom-0 left-0 p-2 text-white text-xs">
          Copyright &copy; 2024 Team LiquidDeath. Created during LA Hacks.
        </div>
    </div>
  );
}

