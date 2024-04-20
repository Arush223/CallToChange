'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { SignedIn, SignedOut, useUser, UserButton, SignInButton} from '@clerk/nextjs';

const links = [
  { name: 'About', href: '/about' },
  { name: 'Team', href: '/team' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [emailHandle, setEmailHandle] = useState('');

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" passHref>
            <span className="text-black font-bold size cursor-pointer">Carbon Offset</span>
          </Link>
          <nav className="flex items-center space-x-4 font-medium"> {/* Adjusted flex styling here */}
            {links.map((link) => (
              <Link key={link.name} href={link.href} passHref>
                <span
                  className={clsx(
                    'flex items-center text-black hover:text-blue-500 transition-colors duration-300 cursor-pointer',
                    {
                      'text-blue-500': pathname === link.href,
                    },
                  )}
                >
                  <span className="ml-2 hidden md:block">{link.name}</span>
                </span>
              </Link>
            ))}
            <div className="flex items-center space-x-4"> {/* Wrapper for SignedOut and SignedIn */}
              <SignedOut>
                <Link href="/auth/sign-in" passHref>
                  <span className="flex items-center text-black hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                    <span className="ml-2 hidden md:block">Sign In</span>
                  </span>
                </Link>
                <Link href="/auth/sign-up" passHref>
                  <span className="flex items-center text-black hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                    <span className="ml-2 hidden md:block">Sign Up</span>
                  </span>
                </Link>
              </SignedOut>
              <SignedIn>
                <Link href="/dashboard" passHref>
                  <span className="flex items-center text-black hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                    <span className="ml-2 hidden md:block">Dashboard</span>
                  </span>
                </Link>
                <span className="flex items-center text-black font-medium">
                  <UserButton className="ml-2" /> 
                </span>
              </SignedIn>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
