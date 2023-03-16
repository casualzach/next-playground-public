import Image from 'next/image';
import React from 'react';

interface Props {
  img_path: string;
  img_alt: string;
  title: string;
  message: string;
  right?: boolean;
}

const Valueprop: React.FC<Props> = ({
  img_path,
  img_alt,
  title,
  message,
  right = false
}) => {
  return (
    <div className="max-w-[900px] px-6 grid grid-cols-1 sm:grid-cols-3 mx-auto my-6 items-center">
      <div
        className={`${
          right ? 'sm:order-last' : ''
        } relative overflow-hidden drop-shadow-xl w-1/2 sm:w-2/3 aspect-square mx-auto max-w-[180px] rounded-full`}
      >
        <Image
          src={img_path}
          alt={img_alt}
          className="object-contain"
          fill
          sizes="33vw"
        />
      </div>
      <div className="col-span-2 flex flex-wrap items-center">
        <div className="w-full sm:text-left p-5 px-8">
          <h4 className="text-sm pb-2">{title}</h4>
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Valueprop;
