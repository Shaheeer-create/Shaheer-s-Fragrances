import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../../public/assests/Himages/Logo.png';
import { RiMenu3Line } from "react-icons/ri";
import { PiShoppingCartThin } from "react-icons/pi";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-400  bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">

          {/* Cart and Login Button (left side on small screens) */}
          <div className="flex items-center gap-4 md:hidden">
            <PiShoppingCartThin className="text-2xl cursor-pointer hover:text-hovercolor" />
            <button
              className="inline-flex items-center bg-customGreen text-customDarkGreen border-2 border-hovercolor py-1 px-3 focus:outline-none hover:bg-white hover:text-hovercolor rounded text-base transition duration-300 ease-in-out transform hover:scale-105"
            >
              Login
            </button>
          </div>

          {/* Logo and Name */}
          <Link className="flex title-font font-medium items-center text-customDarkGreen" href="/">
            <Image src={Logo} height={50} width={50} alt="Company Logo" className="rounded-full" />
            <span className="ml-3 text-xl font-Monument">Shaheer Naeem</span>
          </Link>

          {/* Mobile Menu Trigger (right side on small screens) */}
          <Sheet>
            <SheetTrigger className="text-2xl text-white ml-3 cursor-pointer md:hidden">
              <RiMenu3Line />
            </SheetTrigger>

            {/* Mobile Menu Content */}
            <SheetContent className="bg-gray-900">
              <nav className="flex flex-col items-center justify-center text-xl gap-5 mt-8">
                <Link href="/" className="relative group mb-4">
                  <span className="text-hovercolor group-hover:text-hovercolor transition-all duration-300">Home</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-hovercolor transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="/mens" className="relative group mb-4">
                  <span className="text-hovercolor group-hover:text-hovercolor transition-all duration-300">Mens Fragrances</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-hovercolor transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="#feature" className="relative group mb-4">
                  <span className="text-hovercolor group-hover:text-hovercolor transition-all duration-300">Women Fragrances</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-hovercolor transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="#Contact" className="relative group mb-4">
                  <span className="text-hovercolor group-hover:text-hovercolor transition-all duration-300">Contact</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-hovercolor transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Desktop Menu */}
          <nav className="hidden md:flex md:ml-auto flex-wrap items-center justify-center text-xl gap-9">
            <Link href="/" className="relative group mr-5">
              <span className="text-customDarkGreen group-hover:text-hovercolor transition-all duration-300">Home</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-hovercolor transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/mens" className="relative group mr-5">
              <span className="text-customDarkGreen group-hover:text-hovercolor transition-all duration-300">Mens Fragrances</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-hovercolor transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/womens" className="relative group mr-5">
              <span className="text-customDarkGreen group-hover:text-hovercolor transition-all duration-300">Women Fragrances</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-hovercolor transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#Contact" className="relative group mr-5">
              <span className="text-customDarkGreen group-hover:text-hovercolor transition-all duration-300">Contact</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-hovercolor transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Cart and Login Button (right side on desktop screens) */}
          <div className="hidden md:flex items-center gap-4">
            <PiShoppingCartThin className="text-2xl cursor-pointer hover:text-hovercolor" />
            <button
              className="inline-flex items-center bg-customGreen text-customDarkGreen border-2 border-hovercolor py-1 px-3 focus:outline-none hover:bg-white hover:text-hovercolor rounded text-base transition duration-300 ease-in-out transform hover:scale-105"
            >
              Login
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
