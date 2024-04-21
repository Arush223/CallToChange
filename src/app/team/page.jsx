import React from 'react';
import NavLinks from '../nav-links';
import Image from 'next/image';


export default function Page() {
  return (
    <>
      <div className ='bg-white'>
        <NavLinks />
      </div>
      <h1 className='text-blue-500 text-5xl font-serif text-center mt-6 mb-6' style={{ transform: 'translateY(10%) translateX(-2%)'}}> We are </h1>
      <div className="flex flex-col items-center">
        <div className="flex w-full justify-around">
        <div className="flex-1 text-center" style={{ marginLeft: '-1px' }}>
          <Image src="/aarush.png" alt="aarush" width={400} height={400} />
        </div>
        <div className="flex-1  text-center" style={{ marginLeft: '-1px' }}>
          <Image src='/Aditya.png' alt='Aditya' width={400} height={400} />
        </div>
        <div className="flex-1  text-center" style={{marginLeft: '-1px'}}>
        <Image src='/Ganesh.png' alt='Ganesh' width={400} height={400} />
        </div>
        </div>
      </div>
      <div>
        <h1 className='text-purple-500 font-serif'> We are Team Liquid Death, 
        consisting of (left to right) Aarush Jagtap, Aditya Kakarla, and Ganesh 
        Kumarappan. Originating from the farms of Bakersfield to the tech world of Austin,
        this team of hackers is ready to take on the competition at LA Hacks! </h1>
      </div>
    </>
  );
}