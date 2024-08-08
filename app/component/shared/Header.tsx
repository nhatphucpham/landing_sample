'use client'

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

type HeaderProps = {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isInitPlace, setIsInitPlace] = useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrolled(prevScrollPos > currentScrollPos);
      setIsInitPlace(currentScrollPos < 60);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header className={`fixed z-50 ${!isInitPlace ? 'bg-gray-800/90 shadow-md' : ''} w-full p-6 ${isScrolled && !isInitPlace ? '-top-24' : 'top-0'} transition-all`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo pl-4">
          <Image src="/logo.svg" alt="Logo" width={200} height={200} className="w-14 h-14" />
        </div>
        {children}
      </div>
    </header>
  );
};

export default Header;
