'use client';

import React, { useEffect, useState, useRef } from 'react';
import NavLinks from './nav-links';
import Link from 'next/link';
import Image from 'next/image';

function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [showText, setShowText] = useState(false);
  const percentageRef = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);

    const percentageTimer = setInterval(() => {
      if (percentageRef.current < 55) {
        percentageRef.current += 1;
        setPercentage(percentageRef.current);
      }
      else {
        clearInterval(percentageTimer);
        setShowText(true);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(percentageTimer);
    };
  }, []); 

  return (
    <div className="relative h-screen bg-black overflow-hidden">
      <NavLinks />
      <div className={`absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/6 ${isVisible ? 'opacity-100 transition-opacity duration-1000 delay-500' : 'opacity-0'} animationContainer`}>
        <h1 className={`text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 title overflow-visible`}>
          Over {percentage}% of companies use LLMs.  
        </h1>
        {showText && (
          <div className="mt-5">
            <p className={`text-lg font-semibold text-white subtitle`}>
              <Link href="/about">
                <span className="flex items-center space-x-1">
                  <span className="opacity-100 transition-opacity duration-1000 delay-1500 hover:text-blue-800">
                    Learn about the environmental cost
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white hover:text-blue-800 transition-colors duration-300" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </p>
          </div>
        )}

        <div className="mt-16 flex flex-row items-center justify-center space-x-8 ">
          <div className="flex flex-col items-center space-y-4">
            <Image src="/llm.png" alt="LLM Image" width={256} height={256} />
            <p className="text-white mt-2">LLM Description</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <Image src="/database.png" alt="Database Image" width={256} height={256}/>
            <p className="text-white mt-2">Database Description</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <Image src="/carbon.png" alt="Carbon Image" width={256} height={256} />
            <p className="text-white mt-2">Carbon Description</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
