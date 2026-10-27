
"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png";
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <div className="container mx-auto navbar bg-base-100 shadow-sm">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            aria-label="Open navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLinks href="/">Workouts</NavLinks>
            </li>
            <li>
              <NavLinks href="/myPlan">My Plan</NavLinks>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={Logo}
            alt="FitLog Logo"
            width={35}
            height={35}
            priority
          />
          <span className="text-xl font-bold">FITLOG</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLinks href="/">Workouts</NavLinks>
          </li>
          <li>
            <NavLinks href="/myPlan">My Plan</NavLinks>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <Link href="/myPlan" className="btn">
          My Plan
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
