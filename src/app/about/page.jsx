/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NavLinks from '../nav-links';

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const [showText, setShowText] = useState(false);
  const [activeSection, setActiveSection] = useState(null);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);

    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 2000); // Increased delay to 2000ms (2 seconds)

    return () => {
      clearTimeout(timer);
      clearTimeout(textTimer);
    };
  }, []);

  const sections = [
    {
      title: 'Our Python Package',
      content: 'Our Python package call-to-change helps you log text and image generation calls. For more info, check out the repo: ',
      link: 'https://github.com/adityakakarla/call-to-change'
    },
    {
      title: 'Emissions Calculators',
      content: 'We calculate emissions based on the number of text generation calls and image generation calls. Using government and academic formulas, we calculate the cost to offset the emissions.',
    },
    {
      title: 'Fancy Dashboards',
      content: 'Our dashboards show you information at every step of the process, including text generation calls, image generation calls, emissions generated, and the cost to offset emissions.',
    },
  ];

  return (
    <div className="relative h-screen bg-black text-white text-left overflow-hidden">
      <NavLinks />
      <div className={`absolute p-5 top-0 left-1/2 transform -translate-x-1/2 ${isVisible ? 'opacity-100 transition-opacity duration-1000 delay-500' : 'opacity-0'} animationContainer grid place-items-center`}>
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 title overflow-visible p-2 mt-20 mb-10">
          <span className="inline-block align-middle">CallToChange</span>
        </h1>
        <p className={`text-center p-2 text-lg font-semibold text-white animate-slide-up mb-8 ${showText ? 'opacity-100 transition-opacity duration-2000 delay-1500' : 'opacity-0'}`}>
            A Python-based Carbon Emission Calculator for a company's LLM calls.
        </p>
        <div className={`w-full max-w-2xl animate-slide-up ${showText ? 'opacity-100 transition-opacity duration-2000 delay-1500' : 'opacity-0'}`}>
              <ul className="space-y-4 w-700">
                {sections.map((section, index) => (
                  <li key={index} className="border-b border-gray-700">
                    <button
                      className="w-full text-left text-lg font-semibold text-white bg-transparent p-4 focus:outline-none focus-visible:ring focus-visible:ring-opacity-50"
                      onClick={() => setActiveSection(activeSection === index ? null : index)}
                    >
                      {section.title}
                    </button>
                    {activeSection === index && (
                      <div className="p-4 text-white">
                        {section.content}
                        {section.link && <a href={section.link} className='text-white hover:text-blue-300 transition-colors duration-300 cursor-pointer'>{section.link}</a>}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
      </div>
    </div>
  );
}
