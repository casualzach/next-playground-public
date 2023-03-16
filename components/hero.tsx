import Image from "next/image";
import Link from "next/link";
import React from "react";

import landingHero from "/public/assets/herobg.webp";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center relative">
      <div className="relative flex items-top justify-center">
        <Image
          src={landingHero}
          alt="Hero Background"
          className="object-cover"
          priority
          sizes="(max-width: 1372px) 100vw,
              1372px"
        />

        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-wrap px-10 flex-col justify-center items-center text-white text-center">
          <h2 className="text-xl sm:text-3xl font-semibold md:text-4xl md:font-bold mb-4 drop-shadow-lg">
            Some Text
          </h2>
          <p className="hidden md:block text-lg mb-8 drop-shadow-lg">
            Some message
          </p>
          <div className="hidden md:inline-flex flex-wrap justify-center">
            <Link
              href=""
              className="bg-black text-white py-2 m-1 px-6 rounded-full border border-black hover:bg-gray-800"
            >
              some cta
            </Link>
            <Link
              href=""
              className="bg-white text-black py-2 m-1 px-12 rounded-full border border-black hover:bg-gray-300"
            >
              some cta
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile responsive view moves message and CTA Buttons below image */}
      <p className="md:hidden text-sm drop-shadow-lg text-center mx-10 my-3">
        some message
      </p>
      <div className="md:hidden text-sm inline-flex flex-wrap justify-center text-center mx-10">
        <Link
          href=""
          className="bg-black text-white py-2 m-1 px-6 rounded-full border border-black hover:bg-gray-800"
        >
          some cta
        </Link>
        <Link
          href=""
          className="bg-white text-black py-2 m-1 px-12 rounded-full border border-black hover:bg-gray-300"
        >
          some cta
        </Link>
      </div>
    </div>
  );
};

export default Hero;
