'use client'
import React, { useEffect, useState } from 'react';
import NavLinks from './nav-links';
import Link from 'next/link';
import Image from 'next/image';

function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);

    let percentageTimer = setInterval(() => {
      if (percentage < 50) {
        setPercentage((prevPercentage) => prevPercentage + 1);
      } else {
        clearInterval(percentageTimer);
        setShowText(true);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(percentageTimer);
    };
  }, [percentage]);

  return (
    <div className="relative h-screen bg-black">
      <NavLinks />
      <div className={`absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isVisible ? 'opacity-100 transition-opacity duration-1000 delay-500' : 'opacity-0'} animationContainer`}>
        <h1 className={`text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 title`}>
          Help us combat Carbon Emissions. {percentage}% 
        </h1>
        {showText && (
          <div className="mt-4">
            <p className={`text-lg font-semibold text-white subtitle`}>
              <Link legacyBehavior href="/about">
                <a className="flex items-center space-x-2">
                  <span className="opacity-100 transition-opacity duration-1000 delay-1500 hover:text-blue-800">
                    Learn about our mission
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white hover:text-blue-800 transition-colors duration-300" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </Link>
            </p>
          </div>
        )}

        {/* Images Section */}
        <div className="mt-8 flex justify-center space-x-4">
          <div className="image-container opacity-0 transition-opacity duration-1000 delay-2000">
            <Image src="/llm.png" alt="LLM Image" width={128} height={128} />
            <p className="text-white">LLM Description</p>
          </div>
          <div className="image-container opacity-0 transition-opacity duration-1000 delay-2500">
            <Image src="/database.png" alt="Database Image" width={128} height={128} />
            <p className="text-white">Database Description</p>
          </div>
          <div className="image-container opacity-0 transition-opacity duration-1000 delay-3000">
            <Image src="/carbon.png" alt="Carbon Image" width={128} height={128} />
            <p className="text-white">Carbon Description</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
