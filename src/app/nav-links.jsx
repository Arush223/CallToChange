'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'About', href: '/about' },
  { name: 'Team', href: '/team' },
  { name: 'Sign In', href: '/auth/sign-in' }, // Add Sign In link
  { name: 'Sign Up', href: '/auth/sign-up' } // Add Sign Up link
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link legacyBehavior href="/" passHref>
            <a className="text-black font-bold size">Carbon Offset</a>
          </Link>
          <nav className="flex space-x-4 font-medium">
            {links.map((link) => (
              <Link legacyBehavior key={link.name} href={link.href} passHref>
                <a
                  className={clsx(
                    'flex items-center text-black hover:text-blue-500 transition-colors duration-300',
                    {
                      'text-blue-500': pathname === link.href,
                    },
                  )}
                >
                  <span className="ml-2 hidden md:block">{link.name}</span>
                </a>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
