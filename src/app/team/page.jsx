'use client'
import React from 'react';
import NavLinks from '../nav-links';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="relative h-screen bg-black text-white text-left overflow-hidden px-32">
      <NavLinks />
      <div className="text-center mt-12 mb-8">
        <h1 className="text-5xl text-center font-extrabold overflow-visible p-2"> We Are</h1>
      </div>
      <div className="items-center">
        <div className="flex w-full justify-around">
          <div className="flex-1 text-center">
            <Image src="/aarush.png" alt="aarush" width={400} height={400} />
          </div>
          <div className="flex-1 text-center">
            <Image src="/Aditya.png" alt="Aditya" width={400} height={400} />
          </div>
          <div className="flex-1 text-center">
            <Image src="/Ganesh.png" alt="Ganesh" width={400} height={400} />
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <h1 className="text-white-500  text-xl">
          Team Liquid Death, consisting of (left to right) Aarush Jagtap,
          Aditya Kakarla, and Ganesh Kumarappan. Originating from the farms of
          Bakersfield to the tech world of Austin, this team of hackers is ready
          to take on the competition at LA Hacks!
        </h1>
      </div>
    </div>
  );
}
