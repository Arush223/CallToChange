'use client';
import React, { useEffect, useState } from 'react';
import NavLinks from './about/nav-links';
import Link from 'next/link';

function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0); // Change delay to 0ms

    let percentageTimer = setInterval(() => {
      if (percentage < 20) {
        setPercentage((prevPercentage) => prevPercentage + 1);
      } else {
        clearInterval(percentageTimer); // Stop the interval once the percentage reaches 20
        setShowButton(true); // Show the button once the percentage reaches 20
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
        {showButton && (
          <div className="mt-8">
            <Link legacyBehavior href="/about">
              <a className="text-lg font-semibold bg-white text-black px-6 py-3 rounded hover:bg-blue-600 transition-colors duration-300">
                Learn More
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
