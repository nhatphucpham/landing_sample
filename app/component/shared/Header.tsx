'use client'

import React, { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

type HeaderProps = {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isInitPlace, setIsInitPlace] = useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    setIsScrolled(prevScrollPos > currentScrollPos);
    setIsInitPlace(currentScrollPos < 60);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    handleScroll();
  }, [handleScroll]);

  return (
    <header className={`fixed z-50 ${!isInitPlace ? 'bg-gray-800/90 shadow-md' : ''} w-full p-6 ${isScrolled && !isInitPlace ? '-top-24' : 'top-0'} transition-all`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href='/#' className="logo pl-0 sm:pl-4 shrink-0  ">
          <Image src="/logo.svg" alt="Logo" width={200} height={200} className="w-14 h-14" />
        </a>
        {children}
      </div>
    </header>
  );
};

export default Header;
