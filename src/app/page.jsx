'use client';
import React, { useEffect, useState } from 'react';
import NavLinks from './about/nav-links';

function Page() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay the animation by 500ms
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Clear the timer on component unmount to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen bg-black">
      <NavLinks />
      {/* Your page content goes here */}
      <div className={`absolute top-1/4 left-0 transform -translate-y-1/2 ${isVisible ? 'opacity-100 translate-x-0 transition-opacity duration-1000 delay-500' : 'opacity-0 translate-x-[-1rem]'} text-left`}>
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-teal-400 to-purple-500 shadow-lg">Revolutionize Your Calculations</h1>
      </div>
    </div>
  );
}

export default Page;
