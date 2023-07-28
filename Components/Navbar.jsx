import React from "react";
import Logo from "../public/assets/shared/logo.svg";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();

  const [nav, setNav] = useState(true);

  function handleNav() {
    setNav(!nav);
  }

  return (
    <div className="w-full h-full">
      <div className="flex justify-between mx-6 py-6 items-center">
        <Image src={Logo} width={40} height={40} alt="logo" />
        {!nav ? (
          <AiOutlineMenu
            size={40}
            className=" text-gray-100 block md:hidden z-10 hover:cursor-pointer"
            onClick={handleNav}
          />
        ) : (
          <AiOutlineClose
            size={40}
            className=" text-gray-100 block md:hidden z-10 hover:cursor-pointer"
            onClick={handleNav}
          />
        )}

        {nav ? (
          <div className="absolute bg-[#ffffff10] backdrop-blur-xl h-full w-2/3 top-0 right-0 md:hidden">
            <ul className="ml-16 my-36 flex flex-col gap-10">
              <Link href="/" onClick={handleNav}>
                <li className="text-white text-lg">
                  00 <h1 className="inline-block text-slate-300 ml-2">HOME</h1>
                </li>
              </Link>
              <Link href="/destination/moon" onClick={handleNav}>
                <li className="text-white text-lg">
                  01
                  <h1 className="inline-block text-slate-300 ml-2">
                    DESTINATION
                  </h1>
                </li>
              </Link>
              <Link href="/crew/commander" onClick={handleNav}>
                <li className="text-white text-lg">
                  02 <h1 className="inline-block text-slate-300 ml-2">CREW</h1>
                </li>
              </Link>
            </ul>
          </div>
        ) : (
          <></>
        )}

        <ul className="text-white uppercase font-light gap-6 hidden md:flex bg-[#ffffff05] lg:bg-[#ffffff04] lg:backdrop-blur-sm lg:px-36 xl:gap-20 -m-6 p-8">
          <li>
            <Link
              href="/"
              className={
                router.asPath == "/"
                  ? "border-b-4 border-b-white py-8"
                  : "" +
                    "hover:cursor-pointer hover:border-b-4 hover:border-b-gray-500 py-8"
              }
            >
              <h1 className="hidden lg:inline mx-2 font-bold text-md tracking-widest">
                00
              </h1>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/destination/moon"
              className={
                router.asPath == "/destination/moon" ||
                router.asPath == "/destination/mars" ||
                router.asPath == "/destination/europa" ||
                router.asPath == "/destination/titan"
                  ? "border-b-4 border-b-white py-8"
                  : "" +
                    "hover:cursor-pointer hover:border-b-4 hover:border-b-gray-500 py-8"
              }
            >
              <h1 className="hidden lg:inline mx-2 font-bold text-md tracking-widest">
                01
              </h1>
              Destination
            </Link>
          </li>
          <li>
            <Link
              href="/crew/commander"
              className={
                router.asPath == "/crew/commander" ||
                router.asPath == "/crew/missionspecialist" ||
                router.asPath == "/crew/pilot" ||
                router.asPath == "/crew/flightengineer"
                  ? "border-b-4 border-b-white py-8"
                  : "" +
                    "hover:cursor-pointer hover:border-b-4 hover:border-b-gray-500 py-8"
              }
            >
              <h1 className="hidden lg:inline mx-2 font-bold text-md tracking-widest">
                02
              </h1>
              Crew
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
