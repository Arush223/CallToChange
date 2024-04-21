/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useEffect, useState, useRef } from 'react';
import NavLinks from './nav-links';
import Link from 'next/link';
import Image from 'next/image';
import Loader from '../components/loader';

function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [showText, setShowText] = useState(false);
  const [loading , setLoading] = useState(false);
  const percentageRef = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);

    const percentageTimer = setInterval(() => {
      if (percentageRef.current < 58) {
        percentageRef.current += 1;
        setPercentage(percentageRef.current);
      }
      else {
        clearInterval(percentageTimer);
        setShowText(true);
      }
    }, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(percentageTimer);
    };
  }, []); 


  if(loading) {
    return (
      <div className="bg-black text-white">
        <NavLinks />
        <Loader />
      </div>
    );
  }

  return (
    <div className="relative h-screen bg-black overflow-hidden">
      <NavLinks />
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isVisible ? 'opacity-100 transition-opacity duration-1000 delay-500' : 'opacity-0'} animationContainer`}>
        <h1 className={`text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 title overflow-visible text-center`}>
          Over {percentage}% of companies use LLMs.  
        </h1>
        {showText && (
          <div className="mt-5 ">
            <p className={`text-lg font-semibold text text-white subtitle text-center`}>
              <Link href="/about">
                <span className="flex items-center  space-x-1">
                  <span className="opacity-100 transition-opacity duration-1000 delay-1500 hover:text-blue-800 ">
                    Let's talk about the environmental cost.
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white hover:text-blue-800 transition-colors duration-300 " fill="none" viewBox="0 0 20 20" stroke="currentColor">
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
            <p className="text-white mt-2">LLMs (Large Language Models) use a significant amount of energy to train.</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <Image src="/database.png" alt="Database Image" width={256} height={256}/>
            <p className="text-white mt-2">These LLMs are trained on large databases that draw data from millions of sources.</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <Image src="/carbon.png" alt="Carbon Image" width={256} height={256} />
            <p className="text-white mt-2">Training LLMs use a lot of energy, which results in increased carbon emissions.</p>
          </div>
        </div> 
      </div>
        <div className="absolute top-0 left-0 p-2 text-white text-xs">
          &copy; 2024 Team LiquidDeath. Created during LA Hacks.
        </div>
    </div>
    
  );
}

export default Page;
