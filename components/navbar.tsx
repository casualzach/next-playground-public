import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

import bannerLogo from "../public/assets/logo.webp";

interface Props {
  active: boolean;
  handleClick: () => void;
  sideClick: () => void;
  showSearch: boolean;
  searchClick: () => void;
  searchText: string;
  clearSearch: () => void;
}

const Navbar: React.FC<Props> = ({
  active,
  handleClick,
  sideClick,
  showSearch,
  searchClick,
  searchText,
  clearSearch,
}) => {
  const genericHamburgerLine = `h-0.5 w-4 my-[1.5px] rounded-full bg-black transition ease transform duration-300`;
  const activeClass = active ? "block" : "hidden";

  return (
    //   Main Navigation Bar
    <div className="sticky z-50 w-full top-0 items-center mb-0 p-0 md:px-1 flex flex-wrap bg-white">
      {/* TOP BAR */}
      <nav className="inline-flex flex-auto sticky top-0 z-50 items-center bg-white p-2">
        <div className="inline-flex sticky top-0 z-50 items-center mr-auto px-0 md:px-1">
          {/* Hamburger Menu */}
          <button
            className="md:hidden flex flex-col h-6 w-6 px-1 justify-center items-center group hover:scale-95"
            onClick={handleClick}
          >
            <div
              className={`${genericHamburgerLine} ${
                active
                  ? "rotate-45 translate-y-[4.9px] opacity-100 group-hover:bg-gray-600"
                  : "opacity-100 group-hover:bg-gray-600"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                active ? "opacity-0" : "opacity-100 group-hover:bg-gray-600"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                active
                  ? "-rotate-45 -translate-y-[4.9px] opacity-100 group-hover:bg-gray-600"
                  : "opacity-100 group-hover:bg-gray-600"
              }`}
            />
          </button>
          {/* Le Book Logo - serves as go to root page */}
          <div className="w-[80px] mr-auto md:w-[120px] pl-1 md:pl-0 hover:scale-95">
            <Link href={"/"} className="py-1.5" onClick={sideClick}>
              <Image src={bannerLogo} alt="Le Book Logo" />
            </Link>
          </div>
          {/* NAV ITEMS Desktop view */}
          <div
            className="hidden
           w-full md:inline-flex md:flex-grow md:w-auto"
          >
            <div className="md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start  flex flex-col md:h-auto">
              <Link
                href="/page1"
                className="md:inline-flex md:w-auto w-full px-2 py-2 rounded font-inter text-xs text-gray-500 font-regular items-center justify-cente hover:text-black "
              >
                page 1
              </Link>
              <Link
                href="/page2"
                className="md:inline-flex md:w-auto w-full px-2 py-2 rounded font-inter text-xs text-gray-500 font-regular items-center justify-cente hover:text-black "
              >
                page 2
              </Link>
              <Link
                href="/page3"
                className="md:inline-flex md:w-auto w-full px-2 py-2 rounded font-inter text-xs text-gray-500 font-regular items-center justify-cente hover:text-black "
              >
                page 3
              </Link>
              <Link
                href="/page4"
                className="md:inline-flex md:w-auto w-full px-2 py-2 rounded font-inter text-xs text-gray-500 font-regular items-center justify-cente hover:text-black "
              >
                page 4
              </Link>
            </div>
          </div>
        </div>
        {/* SEARCH BUTTON MOBILE */}
        <div className="md:hidden">
          <button
            type="submit"
            className="p-1 focus:outline-none focus:shadow-outline"
            onClick={searchClick}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* LOG IN BUTTONS DESKTOP */}
      <div className="hidden md:inline-flex items-center px-2 pt-1">
        <button className="px-4 py-2 mx-1 text-xs hover:bg-gray-800 font-inter font-medium bg-black text-white border border-black rounded-full ">
          Log In
        </button>
        <button className="px-4 py-2 mx-1 text-xs hover:bg-gray-200 font-inter font-medium bg-white text-black border border-black rounded-full">
          Sign Up
        </button>
      </div>

      {/* Search Bar Mobile */}
      <div
        className={`md:hidden overflow-none top-0 flex justify-center z-10 w-full bg-white shadow-md transform ${
          showSearch ? "" : "-translate-y-full hidden"
        } transition-transform ease-in-out duration-100 py-2 px-4`}
      >
        <div className="inline-flex items-center w-full">
          <div className="relative w-full">
            <input
              type="text"
              className="flex w-full p-1 px-3 text-gray-900 bg-gray-50 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Search"
              value={searchText}
              onChange={clearSearch}
              // onChange={(e) => setSearchText(e.target.value)}
            />
            {searchText && (
              <button
                className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
                onClick={clearSearch}
              >
                <IoMdClose className="h-5 w-5 text-gray-400" />
              </button>
            )}
          </div>
          <div className="relative">
            <select className="block appearance-none w-auto p-1.5 px-2 pr-8 rounded-r-full border border-gray-300 bg-white text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option>option1</option>
              <option>option2</option>
              <option>option3</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* SIDE MENU */}
      <div
        className={`fixed md:hidden inset-y-0 z-30 left-0 w-full max-w-[80vw] bg-white shadow-lg transform ${
          active ? "translate-x-0" : "-translate-x-full"
        } transition-transform ease-in-out duration-300 py-10`}
      >
        <div className="flex flex-col h-full">
          <div className="flex flex-col mb-auto">
            <Link
              href="/"
              onClick={sideClick}
              className="px-4 py-2 hover:bg-gray-100"
            >
              HOME
            </Link>
            <Link
              href="/page1"
              onClick={sideClick}
              className="px-4 py-2 hover:bg-gray-100"
            >
              Page 1
            </Link>
            <Link
              href="/page2"
              onClick={sideClick}
              className="px-4 py-2 hover:bg-gray-100"
            >
              Page 2
            </Link>
            <Link
              href="/page3"
              onClick={sideClick}
              className="px-4 py-2 hover:bg-gray-100"
            >
              Page 3
            </Link>
            <Link
              href="/page4"
              onClick={sideClick}
              className="px-4 py-2 hover:bg-gray-100"
            >
              Page 4
            </Link>
          </div>
          <div>
            <div className="flex flex-col px-10">
              <button className="px-4 py-2 my-2 mx-5 text-xs hover:bg-gray-800 font-inter font-medium bg-black text-white border border-black rounded-full ">
                Log In
              </button>
              <button className="px-4 py-2 my-2 mx-5 text-xs hover:bg-gray-200 font-inter font-medium bg-white text-black border border-black rounded-full">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* overlay for background shading */}
      <button
        className={`fixed md:hidden inset-0 z-20 bg-black bg-opacity-50 ${
          active ? "visible" : "invisible"
        } transition-opacity ease-in-out duration-500`}
        onClick={handleClick}
      />
    </div>
  );
};

export default Navbar;
