'use client';
import React from 'react';
import Image from 'next/image';
import H2 from '../../../public/assests/Himages/H2.png';

const Hero = () => {
  return (
    <div>
      {/* Starting Point */}
      <section className="text-gray-400 bg-gradient-to-r from-starthbg to-endhbg body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center">
          {/* Image Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 flex justify-center pt-10">
            <Image
              className="object-cover object-center rounded animate-fade-in" // Animation added here
              alt="hero"
              src={H2}
              width={500}
              height={500}
            />
          </div>

          {/* Text Section */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col items-center pt-10 animate-fade-in"> {/* Adjusted padding-top for alignment */}
            <h1 className="title-font sm:text-5xl text-4xl mb-4 text-hcolor font-bold leading-tight text-center"> {/* Centering the heading */}
              Fantasy By
              <br className="hidden lg:inline-block" />
             Hira Mani
            </h1>
            <p className="mb-8 leading-relaxed text-pcolor text-lg text-center md:text-left">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
              plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
              tote bag selvage hot chicken authentic turmeric truffaut hexagon try-hard
              chambray.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="inline-flex text-buttontextcolor bg-buttoncolor border-0 py-3 px-8 focus:outline-none hover:bg-hoverbuttoncolor hover:text-hovertextbuttoncolor rounded text-lg transition-all duration-300 transform hover:scale-105">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ending Point */}
    </div>
  );
};

export default Hero;
