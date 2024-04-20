'use client'
import React, { useEffect, useState } from 'react';
import NavLinks from './nav-links';
import Link from 'next/link';


function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0); // Change delay to 0ms

    let percentageTimer = setInterval(() => {
      if (percentage < 20) {
        setPercentage((prevPercentage) => prevPercentage + 1);
      } else {
        clearInterval(percentageTimer); // Stop the interval once the percentage reaches 20
        setShowText(true); // Show the text once the percentage reaches 20
      }
    }, 100); // Increase slowly

    return () => {
      clearTimeout(timer);
      clearInterval(percentageTimer);
    };
  }, [percentage]);

  return (
    <div className="relative h-screen bg-black">
      <NavLinks />
      <div className={`absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isVisible ? 'opacity-100 transition-opacity duration-1000 delay-500' : 'opacity-0'} text-center`}>
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Carbon emissions are up by {percentage}%
        </h1>
        {showText && (
          <div className="mt-4">
            <p className="text-lg font-semibold underline cursor-pointer opacity-100 transition-opacity duration-1000 delay-1500 text-white hover:text-blue-800">
              <Link legacyBehavior href="/about">
                <a className="flex items-center space-x-2">
                  <span>Learn More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white hover:text-blue-800 transition-colors duration-300" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
