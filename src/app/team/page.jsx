import React from 'react';
import NavLinks from '../nav-links';

export default function Page() {
  return (
    <div style={{ backgroundColor: 'white', color: 'black' }}>
      <NavLinks />
      <div className="absolute bottom-0 left-0 p-2 text-white text-xs">
          Copyright &copy; 2024 Team LiquidDeath. Created during LA Hacks.
        </div>
    </div>
  );
}
