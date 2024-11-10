import React from "react";
import Mens1 from "../../../public/assests/mens/men1.png";
import Mens2 from "../../../public/assests/mens/mens2.png";
import Mens3 from "../../../public/assests/mens/mens3.png";
import Mens4 from "../../../public/assests/mens/mens4.png";
import Mens5 from "../../../public/assests/mens/mens 5.png";
import Mens6 from "../../../public/assests/mens/mens 6.png";
import Mens7 from "../../../public/assests/mens/mens 7.png";
import Mens8 from "../../../public/assests/mens/mens 8.png";
import Image from "next/image";
import {Anton} from 'next/font/google';

const anton = Anton({
  subsets: ['latin'],
  weight: "400"
});


const Menproduct = () => {
  return (
    <div>
      {/* Starting Point */}
      <section className="text-gray-400 body-font bg-gradient-to-r from-mbodystartcolor to-mbodyendcolor">
        <div className="container px-5 py-24 mx-auto animate-fade-in">
          <div className="w-full mb-20 text-center">
            <h1 className={`sm:text-3xl text-3xl font-medium title-font mb-2  text-white animate-fade-in ${anton.className}`}>
              Mens Perfume
            </h1>
            <div className="h-1 w-20 bg-mbodyendcolor rounded mx-auto animate-fade-in" />
          </div>

          <div className="flex flex-wrap -m-4">
            {/* Product Box 1 */}
            <div className="xl:w-1/4 md:w-1/2 p-4 flex">
              <div className="bg-transparent hover:bg-gray-800 cursor-pointer hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] bg-opacity-40 p-6 rounded-lg transition-transform transform hover:scale-105 hover:bg-opacity-50 duration-300 ease-in-out flex flex-col">
                <Image
                  className="h-48 w-full rounded object-cover mb-6 transition-transform duration-300 ease-in-out transform hover:scale-110 animate-fade-in"
                  src={Mens1}
                  alt="Men's Perfume"
                  layout="responsive"
                  width={400} // Maintain the aspect ratio
                  height={400} // Maintain the aspect ratio
                />
                <h3 className="tracking-widest animate-fade-in text-black text-lg font-medium title-font mb-1">
                  Ruler
                </h3>
                <h2 className="text-lg text-black animate-fade-in font-medium title-font mb-2">
                  PKR 10,500.00
                </h2>
                <button className="inline-flex animate-fade-in text-black bg-transparent border-0 py-3 px-8 focus:outline-none hover:bg-black hover:text-hovertextbuttoncolor rounded text-lg transition-all duration-300">
                  Add To Cart
                </button>
              </div>
            </div>

            {/* Product Box 2 */}

            <div className="xl:w-1/4 md:w-1/2 p-4 flex">
              <div className="bg-transparent hover:bg-gray-800 cursor-pointer hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] bg-opacity-40 p-6 rounded-lg transition-transform transform hover:scale-105 hover:bg-opacity-50 duration-300 ease-in-out flex flex-col">
                <Image
                  className="h-48 w-full rounded object-cover mb-6 transition-transform duration-300 ease-in-out transform hover:scale-110 animate-fade-in"
                  src={Mens2}
                  alt="Men's Perfume"
                  layout="responsive"
                  width={400} // Maintain the aspect ratio
                  height={400} // Maintain the aspect ratio
                />
                <h3 className="tracking-widest animate-fade-in text-black text-lg font-medium title-font mb-1">
                  Zaara
                </h3>
                <h2 className="text-lg text-black animate-fade-in font-medium title-font mb-2">
                  PKR 4,100.00
                </h2>
                <button className="inline-flex animate-fade-in text-black bg-transparent border-0 py-3 px-8 focus:outline-none hover:bg-black hover:text-hovertextbuttoncolor rounded text-lg transition-all duration-300">
                  Add To Cart
                </button>
              </div>
            </div>

            {/* Product Box 3 (Add more items similarly) */}
            <div className="xl:w-1/4 md:w-1/2 p-4 flex">
              <div className="bg-transparent hover:bg-gray-800 cursor-pointer hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] bg-opacity-40 p-6 rounded-lg transition-transform transform hover:scale-105 hover:bg-opacity-50 duration-300 ease-in-out flex flex-col">
                <Image
                  className="h-48 w-full rounded object-cover mb-6 transition-transform duration-300 ease-in-out transform hover:scale-110 animate-fade-in"
                  src={Mens3}
                  alt="Men's Perfume"
                  layout="responsive"
                  width={400} // Maintain the aspect ratio
                  height={400} // Maintain the aspect ratio
                />
                <h3 className="tracking-widest animate-fade-in text-black text-lg font-medium title-font mb-1">
                  Ruler
                </h3>
                <h2 className="text-lg text-black animate-fade-in font-medium title-font mb-2">
                  PKR 10,500.00
                </h2>
                <button className="inline-flex animate-fade-in text-black bg-transparent border-0 py-3 px-8 focus:outline-none hover:bg-black hover:text-hovertextbuttoncolor rounded text-lg transition-all duration-300">
                  Add To Cart
                </button>
              </div>
            </div>

            {/* product 4 */}

            <div className="xl:w-1/4 md:w-1/2 p-4 flex">
              <div
                className="bg-transparent bg-opacity-40 p-6 rounded-lg  cursor-pointer hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]
  transition-transform transform hover:scale-105 hover:bg-gray-800   hover:bg-opacity-50  duration-300 ease-in-out flex flex-col"
              >
                <Image
                  className="h-48 w-full rounded object-cover mb-6 transition-transform duration-300 ease-in-out transform hover:scale-110 animate-fade-in"
                  src={Mens4}
                  alt="Men's Perfume"
                  layout="responsive"
                  width={400} // Maintain the aspect ratio
                  height={400} // Maintain the aspect ratio
                />
                <h3 className="tracking-widest animate-fade-in text-black text-lg font-medium title-font mb-1">
                   Jaanan Gold
                </h3>
                <h2 className="text-lg text-black animate-fade-in font-medium title-font mb-2">
                  PKR 2,400.00
                </h2>
                <button className="inline-flex animate-fade-in text-black bg-transparent border-0 py-3 px-8 focus:outline-none hover:bg-black hover:text-hovertextbuttoncolor rounded text-lg transition-all duration-300">
                  Add To Cart
                </button>
              </div>
            </div>

{/* product 5 check */}

<div className="xl:w-1/4 md:w-1/2 p-4 flex">
              <div
                className="bg-transparent bg-opacity-40 p-6 rounded-lg  cursor-pointer hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]
  transition-transform transform hover:scale-105 hover:bg-gray-800   hover:bg-opacity-50  duration-300 ease-in-out flex flex-col"
              >
                <Image
                  className="h-48 w-full rounded object-cover mb-6 transition-transform duration-300 ease-in-out transform hover:scale-110 animate-fade-in"
                  src={Mens5}
                  alt="Men's Perfume"
                  layout="responsive"
                  width={400} // Maintain the aspect ratio
                  height={400} // Maintain the aspect ratio
                />
                <h3 className="tracking-widest animate-fade-in text-black text-lg font-medium title-font mb-1">
                  FrontLine
                </h3>
                <h2 className="text-lg text-black animate-fade-in font-medium title-font mb-2">
                  PKR 11,500.00
                </h2>
                <button className="inline-flex animate-fade-in text-black bg-transparent border-0 py-3 px-8 focus:outline-none hover:bg-black hover:text-hovertextbuttoncolor rounded text-lg transition-all duration-300">
                  Add To Cart
                </button>
              </div>
            </div>

            {/* product 6 */}


            <div className="xl:w-1/4 md:w-1/2 p-4 flex">
              <div
                className="bg-transparent bg-opacity-40 p-6 rounded-lg  cursor-pointer hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]
  transition-transform transform hover:scale-105 hover:bg-gray-800   hover:bg-opacity-50  duration-300 ease-in-out flex flex-col"
              >
                <Image
                  className="h-48 w-full rounded object-cover mb-6 transition-transform duration-300 ease-in-out transform hover:scale-110 animate-fade-in"
                  src={Mens6}
                  alt="Men's Perfume"
                  layout="responsive"
                  width={400} // Maintain the aspect ratio
                  height={400} // Maintain the aspect ratio
                />
                <h3 className="tracking-widest animate-fade-in text-black text-lg font-medium title-font mb-1">
                  Xpose
                </h3>
                <h2 className="text-lg text-black animate-fade-in font-medium title-font mb-2">
                  PKR 6,000.00
                </h2>
                <button className="inline-flex animate-fade-in text-black bg-transparent border-0 py-3 px-8 focus:outline-none hover:bg-black hover:text-hovertextbuttoncolor rounded text-lg transition-all duration-300">
                  Add To Cart
                </button>
              </div>
            </div>

{/* product 7 */}

<div className="xl:w-1/4 md:w-1/2 p-4 flex">
              <div
                className="bg-transparent bg-opacity-40 p-6 rounded-lg  cursor-pointer hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]
  transition-transform transform hover:scale-105 hover:bg-gray-800   hover:bg-opacity-50  duration-300 ease-in-out flex flex-col"
              >
                <Image
                  className="h-48 w-full rounded object-cover mb-6 transition-transform duration-300 ease-in-out transform hover:scale-110 animate-fade-in"
                  src={Mens7}
                  alt="Men's Perfume"
                  layout="responsive"
                  width={400} // Maintain the aspect ratio
                  height={400} // Maintain the aspect ratio
                />
                <h3 className="tracking-widest animate-fade-in text-black text-lg font-medium title-font mb-1">
                  Wasim Akram 414
                </h3>
                <h2 className="text-lg text-black animate-fade-in font-medium title-font mb-2">
                  PKR 5,000.00
                </h2>
                <button className="inline-flex animate-fade-in text-black bg-transparent border-0 py-3 px-8 focus:outline-none hover:bg-black hover:text-hovertextbuttoncolor rounded text-lg transition-all duration-300">
                  Add To Cart
                </button>
              </div>
            </div>

{/* product 8 */}



<div className="xl:w-1/4 md:w-1/2 p-4 flex">
              <div
                className="bg-transparent bg-opacity-40 p-6 rounded-lg  cursor-pointer hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]
  transition-transform transform hover:scale-105 hover:bg-gray-800   hover:bg-opacity-50  duration-300 ease-in-out flex flex-col"
              >
                <Image
                  className="h-48 w-full rounded object-cover mb-6 transition-transform duration-300 ease-in-out transform hover:scale-110 animate-fade-in"
                  src={Mens8}
                  alt="Men's Perfume"
                  layout="responsive"
                  width={400} // Maintain the aspect ratio
                  height={400} // Maintain the aspect ratio
                />
                <h3 className="tracking-widest animate-fade-in text-black text-lg font-medium title-font mb-1">
                  Jaanan Sports
                </h3>
                <h2 className="text-lg text-black animate-fade-in font-medium title-font mb-2">
                  PKR 2,400.00
                </h2>
                <button className="inline-flex animate-fade-in text-black bg-transparent border-0 py-3 px-8 focus:outline-none hover:bg-black hover:text-hovertextbuttoncolor rounded text-lg transition-all duration-300">
                  Add To Cart
                </button>
              </div>
            </div>


          </div>
        </div>
      </section>
      {/* Ending Point */}
    </div>
  );
};

export default Menproduct;
