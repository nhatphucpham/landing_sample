'use client';

import React, { Children, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";

import './menu-button.css';

export default function MenuButton({ className, children }: { className?: string, children: any }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  }

  const modalChildren = Children.map(children, (child) => {
    return React.cloneElement(child, {
      onClick: () => {
        setIsOpen(false);
      }
    });
  });

  return (
    <>
      <div className="hidden sm:block">
        <nav className="px-2 flex text-center">
          {children}
        </nav>
      </div>
      <button
        className={`${className || ''} bg-transparent sm:hidden menu-button`}
        onClick={handleClick}
      >
        <RxHamburgerMenu className="rest" />
        <GiHamburgerMenu className="active" />
      </button>
      <div className={`fixed z-20 sm:hidden top-0 right-0 shadow-md bg-gray-800/90 backdrop-blur-sm text-white w-2/3 h-full transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-all`}>
        <nav className="flex flex-col text-center menu-list">
          {modalChildren}
        </nav>
      </div>
      {isOpen ? <div className="fixed z-10 top-0 left-0 w-full h-full bg-black/50" onClick={handleClick} /> : ''}
    </>
  );
}