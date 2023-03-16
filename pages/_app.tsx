import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const [active, setActive] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleClick = () => {
    setActive(!active);
  };

  const sideClick = () => {
    setActive(false);
  };

  const searchClick = () => {
    setShowSearch(!showSearch);
  };

  const clearSearch = () => {
    setSearchText("");
  };

  return (
    // ${ active ? 'overflow-hidden' : 'block' }
    <div className={`flex flex-col h-screen`}>
      <div className="fixed top-0 z-50 w-full">
        <Navbar
          active={active}
          handleClick={handleClick}
          sideClick={sideClick}
          showSearch={showSearch}
          searchClick={searchClick}
          searchText={searchText}
          clearSearch={clearSearch}
        />
      </div>
      <div className="max-w-[1372px] mt-[42px] w-full text-center md:mt-[48px] grow mx-auto justify-center">
        <Component {...pageProps} />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
