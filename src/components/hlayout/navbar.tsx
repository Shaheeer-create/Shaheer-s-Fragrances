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

import {Playfair} from 'next/font/google';
import {Acme} from 'next/font/google';
import {Cinzel} from 'next/font/google';



const Play = Playfair({ subsets: ['latin'] });
const cinzel = Cinzel({ subsets: ['latin'] });
const acme = Acme({
  weight: '400',

  subsets: ['latin'] });




// import Loading from '@/app/(others)/loading';
// import { TbTruckLoading } from 'react-icons/tb';




const Navbar = () => {
  return (
    <div>
      <header className="text-gray-400  bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">

          {/* Cart and Login Button (left side on small screens) */}
          <div className="flex items-center gap-4 md:hidden">
            <PiShoppingCartThin className="text-2xl cursor-pointer hover:text-hovercolor" />
            <button
              className={`inline-flex items-center bg-customGreen text-customDarkGreen border-2 border-hovercolor py-1 px-3 focus:outline-none hover:bg-white hover:text-hovercolor rounded text-base transition duration-300 ease-in-out transform hover:scale-105 ${Play.className}`}
            >
              Login
            </button>
          </div>

          {/* Logo and Name */}
          <Link className="flex title-font font-medium items-center text-customDarkGreen" href="/">
            <Image src={Logo} height={50} width={50} alt="Company Logo" className="rounded-full" />
            <span className={`ml-3 text-2xl${cinzel.className}`}>Shaheer Naeem</span>
          </Link>

          {/* Mobile Menu Trigger (right side on small screens) */}
          <Sheet>
  <SheetTrigger className="md:hidden">
    <RiMenu3Line />
  </SheetTrigger>
  <SheetContent>
    <nav className={`md:ml-auto md:mr-auto flex flex-col ${Play.className} `}>

      <Link href="/" className={`mb-2 text-customSimple hover:text-hovercolor md:hidden`}>Home</Link>
      <Link href="/mens" className="mb-2 text-customSimple hover:text-hovercolor md:hidden">Mens Fragrances</Link>
      <Link href="/womens" className="mb-2 text-customSimple hover:text-hovercolor md:hidden">Women Fragrances</Link>
      {/* <Link href={"#Contact"} className="mb-2 text-customSimple hover:text-hovercolor md:hidden">Contact</Link> */}
      <Link href="/mens" className="mb-2 text-customSimple hover:text-hovercolor md:hidden">View Product</Link>
      <Link href="/contact" className="mb-2 text-customSimple hover:text-hovercolor md:hidden">Contact Us</Link>
      
    </nav>
  </SheetContent>
</Sheet>



          {/* Desktop Menu */}
          <nav className={`hidden md:flex md:ml-auto flex-wrap items-center justify-center text-xl gap-9 ${Play.className}`}>
            <Link href="/" className="relative group mr-5">
              <span className="text-white group-hover:text-hovercolor transition-all duration-300">Home</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-hovercolor transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/mens" className="relative group mr-5">
              <span className="text-white group-hover:text-hovercolor transition-all duration-300">Mens Fragrances</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-hovercolor transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/womens" className="relative group mr-5">
              <span className="text-white group-hover:text-hovercolor transition-all duration-300">Women Fragrances</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-hovercolor transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/mens" className="relative group mr-5">
              <span className="text-white group-hover:text-hovercolor transition-all duration-300">View Product</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-hovercolor transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="relative group mr-5">
              <span className="text-white group-hover:text-hovercolor transition-all duration-300">Contact Us</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-hovercolor transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Cart and Login Button (right side on desktop screens) */}
          <div className="hidden md:flex items-center gap-4">
            <PiShoppingCartThin className="text-2xl cursor-pointer hover:text-hovercolor" />
            <button
              className={`inline-flex items-center bg-customGreen text-customDarkGreen border-2 border-hovercolor py-1 px-3 focus:outline-none hover:bg-white hover:text-hovercolor rounded text-base transition duration-300  ease-in-out transform hover:scale-105 ${acme.className} `}
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
