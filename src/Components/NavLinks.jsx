"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({href, children}) => {
    const pathName = usePathname(); 
    const isActive = href === '/'  ? pathName === '/' : pathName.startsWith(href);
    return (
      <Link href={href} className = {`${isActive ? 'text-[#CCFF00] border-green/30 rounded-full bg-[#1a2312] ':''}font-bold `}>
        {children}
      </Link>
    );
};

export default NavLinks;