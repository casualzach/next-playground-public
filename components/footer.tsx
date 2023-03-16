import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container max-w-[1372px] mx-auto py-4">
        <div className="flex flex-wrap items-top justify-center text-xs md:justify-between">
          {/* Links Column */}
          <div className="w-full md:w-1/4 px-4 justify-items-center text-center md:text-left">
            <h4 className="text-black font-medium mb-3">Links</h4>

            <div className="inline-flex flew-wrap mb-3">
              <a href="" className="hover:underline text-gray-600 p-1">
                <IoMdMail className="h-5 w-5 text-gray-900" />
              </a>
              <a href="" className="hover:underline text-gray-600 p-1">
                <IoLogoInstagram className="h-5 w-5 text-gray-900" />
              </a>
              <a href="" className="hover:underline text-gray-600 p-1">
                <IoLogoLinkedin className="h-5 w-5 text-gray-900" />
              </a>
            </div>
          </div>
          <div className="inline-flex flex-wrap justify-items-center text-center md:text-left">
            <div className="w-full md:w-1/3 px-4 mb-3">
              <h4 className="text-black font-medium mb-3">Some text</h4>
            </div>

            <div className="w-full md:w-1/3 px-4 mb-3">
              <h4 className="text-black font-medium mb-3">Some text</h4>
            </div>

            <div className="w-full md:w-1/3 px-4 mb-3">
              <h4 className="text-black font-medium mb-3">Some text</h4>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
