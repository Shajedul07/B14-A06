"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({href, children}) => {
    const pathName = usePathname(); 
    const isActive = href === '/'  ? pathName === '/' : pathName.startsWith(href);
    return (
      <Link href={href} className = {`${isActive ? 'text-green-300':''}`}>
        {children}
      </Link>
    );
};

export default NavLinks;