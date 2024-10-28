import React from "react";
import woMens1 from "../../../public/assests/womens/women1.png";
import woMens2 from "../../../public/assests/womens/womens2.png";
import woMens3 from "../../../public/assests/womens/womens3.png";
import woMens4 from "../../../public/assests/womens/womens4.png";
import woMens5 from "../../../public/assests/womens/womens 5.png";
import woMens6 from "../../../public/assests/womens/womens 6.png";
import woMens7 from "../../../public/assests/womens/womens 7.png";
import woMens8 from "../../../public/assests/womens/womens 8.png";
import Image from "next/image";

const WoMenproduct = () => {
  return (
    <div>
      {/* Starting Point */}
      <section className="text-gray-400 body-font bg-gradient-to-r from-wbodystartcolor to-wbodyendcolor">
        <div className="container px-5 py-24 mx-auto animate-fade-in">
          <div className="w-full mb-20 text-center">
            <h1 className="sm:text-3xl text-3xl font-medium title-font mb-2  text-white animate-fade-in">
              Women Perfume
            </h1>
            <div className="h-1 w-20 bg-white rounded mx-auto animate-fade-in" />
          </div>

          <div className="flex flex-wrap -m-4">
            {/* Product Box 1 */}
            <div className="xl:w-1/4 md:w-1/2 p-4 flex">
              <div className="bg-transparent hover:bg-white cursor-pointer hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] bg-opacity-40 p-6 rounded-lg transition-transform transform hover:scale-105 hover:bg-opacity-50 duration-300 ease-in-out flex flex-col">
                <Image
                  className="h-48 w-full rounded object-cover mb-6 transition-transform duration-300 ease-in-out transform hover:scale-110 animate-fade-in"
                  src={woMens1}
                  alt="Men's Perfume"
                  layout="responsive"
                  width={400} // Maintain the aspect ratio
                  height={400} // Maintain the aspect ratio
                />
                <h3 className="tracking-widest animate-fade-in text-black text-lg font-medium title-font mb-1">
                  AAPAS Aroma
                </h3>
                <h2 className="text-lg text-black animate-fade-in font-medium title-font mb-2">
                  PKR 4,200.00
                </h2>
                <button className="inline-flex animate-fade-in text-black bg-transparent border-0 py-3 px-8 focus:outline-none hover:bg-black hover:text-hovertextbuttoncolor rounded text-lg transition-all duration-300">
                  Add To Cart
                </button>
              </div>
            </div>

            {/* Product Box 2 */}

            <div className="xl:w-1/4 md:w-1/2 p-4 flex">
              <div className="bg-transparent hover:bg-white cursor-pointer hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] bg-opacity-40 p-6 rounded-lg transition-transform transform hover:scale-105 hover:bg-opacity-50 duration-300 ease-in-out flex flex-col">
                <Image
                  className="h-48 w-full rounded object-cover mb-6 transition-transform duration-300 ease-in-out transform hover:scale-110 animate-fade-in"
                  src={woMens2}
                  alt="Men's Perfume"
                  layout="responsive"
                  width={400} // Maintain the aspect ratio
                  height={400} // Maintain the aspect ratio
                />
                <h3 className="tracking-widest animate-fade-in text-black text-lg font-medium title-font mb-1">
                  Classsical | Adnan Siddiqui
                </h3>
                <h2 className="text-lg text-black animate-fade-in font-medium title-font mb-2">
                  PKR 6,500.00
                </h2>
                <button className="inline-flex animate-fade-in text-black bg-transparent border-0 py-3 px-8 focus:outline-none hover:bg-black hover:text-hovertextbuttoncolor rounded text-lg transition-all duration-300">
                  Add To Cart
                </button>
              </div>
            </div>

            {/* Product Box 3 (Add more items similarly) */}
            <div className="xl:w-1/4 md:w-1/2 p-4 flex">
              <div className="bg-transparent hover:bg-white cursor-pointer hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] bg-opacity-40 p-6 rounded-lg transition-transform transform hover:scale-105 hover:bg-opacity-50 duration-300 ease-in-out flex flex-col">
                <Image
                  className="h-48 w-full rounded object-cover mb-6 transition-transform duration-300 ease-in-out transform hover:scale-110 animate-fade-in"
                  src={woMens3}
                  alt="Men's Perfume"
                  layout="responsive"
                  width={400} // Maintain the aspect ratio
                  height={400} // Maintain the aspect ratio
                />
                <h3 className="tracking-widest animate-fade-in text-black text-lg font-medium title-font mb-1">
                  BELLA Pour Femme
                </h3>
                <h2 className="text-lg text-black animate-fade-in font-medium title-font mb-2">
                  PKR 6,500.00
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
  transition-transform transform hover:scale-105 hover:bg-white   hover:bg-opacity-50  duration-300 ease-in-out flex flex-col"
              >
                <Image
                  className="h-48 w-full rounded object-cover mb-6 transition-transform duration-300 ease-in-out transform hover:scale-110 animate-fade-in"
                  src={woMens4}
                  alt="Men's Perfume"
                  layout="responsive"
                  width={400} // Maintain the aspect ratio
                  height={400} // Maintain the aspect ratio
                />
                <h3 className="tracking-widest animate-fade-in text-black text-lg font-medium title-font mb-1">
                   Cittirine
                </h3>
                <h2 className="text-lg text-black animate-fade-in font-medium title-font mb-2">
                  PKR 1,200.00
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
  transition-transform transform hover:scale-105 hover:bg-white   hover:bg-opacity-50  duration-300 ease-in-out flex flex-col"
              >
                <Image
                  className="h-48 w-full rounded object-cover mb-6 transition-transform duration-300 ease-in-out transform hover:scale-110 animate-fade-in"
                  src={woMens5}
                  alt="Men's Perfume"
                  layout="responsive"
                  width={400} // Maintain the aspect ratio
                  height={400} // Maintain the aspect ratio
                />
                <h3 className="tracking-widest animate-fade-in text-black text-lg font-medium title-font mb-1">
                  Eternal
                </h3>
                <h2 className="text-lg text-black animate-fade-in font-medium title-font mb-2">
                  PKR 4,200.00
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
  transition-transform transform hover:scale-105 hover:bg-white   hover:bg-opacity-50  duration-300 ease-in-out flex flex-col"
              >
                <Image
                  className="h-48 w-full rounded object-cover mb-6 transition-transform duration-300 ease-in-out transform hover:scale-110 animate-fade-in"
                  src={woMens6}
                  alt="Men's Perfume"
                  layout="responsive"
                  width={400} // Maintain the aspect ratio
                  height={400} // Maintain the aspect ratio
                />
                <h3 className="tracking-widest animate-fade-in text-black text-lg font-medium title-font mb-1">
                  Uroosa
                </h3>
                <h2 className="text-lg text-black animate-fade-in font-medium title-font mb-2">
                  PKR 2,700.00
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
  transition-transform transform hover:scale-105 hover:bg-white   hover:bg-opacity-50  duration-300 ease-in-out flex flex-col"
              >
                <Image
                  className="h-48 w-full rounded object-cover mb-6 transition-transform duration-300 ease-in-out transform hover:scale-110 animate-fade-in"
                  src={woMens7}
                  alt="Men's Perfume"
                  layout="responsive"
                  width={400} // Maintain the aspect ratio
                  height={400} // Maintain the aspect ratio
                />
                <h3 className="tracking-widest animate-fade-in text-black text-lg font-medium title-font mb-1">
                  Uroosa Noir
                </h3>
                <h2 className="text-lg text-black animate-fade-in font-medium title-font mb-2">
                  PKR 2,700.00
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
  transition-transform transform hover:scale-105 hover:bg-white   hover:bg-opacity-50  duration-300 ease-in-out flex flex-col"
              >
                <Image
                  className="h-48 w-full rounded object-cover mb-6 transition-transform duration-300 ease-in-out transform hover:scale-110 animate-fade-in"
                  src={woMens8}
                  alt="Men's Perfume"
                  layout="responsive"
                  width={400} // Maintain the aspect ratio
                  height={400} // Maintain the aspect ratio
                />
                <h3 className="tracking-widest animate-fade-in text-black text-lg font-medium title-font mb-1">
                  MoonLight
                </h3>
                <h2 className="text-lg text-black animate-fade-in font-medium title-font mb-2">
                  PKR 5,000.00
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

export default WoMenproduct;
