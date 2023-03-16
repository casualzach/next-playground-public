import Image from 'next/image';
import React from 'react';

const Socialproof = () => {
  return (
    <div className="my-6">
      <h3 className="font-regular mb-6 text-gray-600 text-sm md:text-md text-center w-full">
        Trusted by leading companies
      </h3>
      <div className="grid grid-cols-4 md:grid-cols-8 px-5 gap-5 justify-items-stretch">
        <div className="relative ">
          <Image
            src="/assets/socialprooflogos/google.webp"
            alt="google-logo"
            className="w-full max-w-[80px] h-auto mx-auto px-1"
            width="0"
            height="0"
            sizes="20vw"
          />
        </div>
        <div className="relative">
          <Image
            src="/assets/socialprooflogos/lvmh.webp"
            alt="lvmh-logo"
            className="w-full max-w-[80px] h-auto mx-auto px-1"
            width="0"
            height="0"
            sizes="20vw"
          />
        </div>
        <div className="relative">
          <Image
            src="/assets/socialprooflogos/conde.webp"
            alt="condenast-logo"
            className="w-full max-w-[80px] h-auto mx-auto px-1"
            width="0"
            height="0"
            sizes="20vw"
          />
        </div>
        <div className="relative">
          <Image
            src="/assets/socialprooflogos/ogilvy.webp"
            alt="ogilvy-logo"
            className="w-full max-w-[80px] h-auto mx-auto px-1"
            width="0"
            height="0"
            sizes="20vw"
          />
        </div>
        <div className="relative">
          <Image
            src="/assets/socialprooflogos/mercedes.webp"
            alt="mercedes-benz-logo"
            className="w-full max-w-[80px] h-auto mx-auto px-1"
            width="0"
            height="0"
            sizes="20vw"
          />
        </div>
        <div className="relative">
          <Image
            src="/assets/socialprooflogos/adidas.webp"
            alt="adidas-logo"
            className="w-full max-w-[80px] h-auto mx-auto px-1"
            width="0"
            height="0"
            sizes="20vw"
          />
        </div>
        <div className="relative">
          <Image
            src="/assets/socialprooflogos/saatchi.webp"
            alt="saatchiandsaatchi-logo"
            className="w-full max-w-[80px] h-auto mx-auto px-1"
            width="0"
            height="0"
            sizes="20vw"
          />
        </div>
        <div className="relative">
          <Image
            src="/assets/socialprooflogos/bmw.webp"
            alt="bmw-logo"
            className="w-full max-w-[80px] h-auto mx-auto px-1"
            width="0"
            height="0"
            sizes="20vw"
          />
        </div>
      </div>
    </div>
  );
};

export default Socialproof;
