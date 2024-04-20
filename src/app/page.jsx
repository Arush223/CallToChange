'use client';
import React, { useEffect, useState } from 'react';
import NavLinks from './about/nav-links';
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
    <div className="relative h-screen">
      <NavLinks />
      <div className={`absolute top-1/4 left-0 transform -translate-y-1/2 ${isVisible ? 'opacity-100 translate-x-0 transition-opacity duration-1000 delay-500' : 'opacity-0 translate-x-[-1rem]'} text-left`}>
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-white">
          Carbon emissions are up by {percentage}%
        </h1>
        {showText && (
          <div className="mt-4 flex items-center justify-end space-x-4">
            <p className="text-lg font-semibold underline cursor-pointer bg-transparent text-white hover:text-blue-600 transition-colors duration-300">
              <Link legacyBehavior href="/about">
                <a className="flex items-center space-x-2">
                  <span>Learn More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white hover:text-blue-600 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
