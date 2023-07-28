import Navbar from "./Navbar";
import Image from "next/image";

import BGMobileHome from "../public/assets/home/background-home-mobile.jpg";
import BGTabletHome from "../public/assets/home/background-home-tablet.jpg";
import BGDesktopHome from "../public/assets/home/background-home-desktop.jpg";

import BGDesktopDestination from "../public/assets/destination/background-destination-desktop.jpg";
import BGTabletDestination from "../public/assets/destination/background-destination-tablet.jpg";
import BGMobileDestination from "../public/assets/destination/background-destination-mobile.jpg";

import BGDesktopCrew from "../public/assets/crew/background-crew-desktop.jpg";
import BGMobileCrew from "../public/assets/crew/background-crew-mobile.jpg";
import BGTabletCrew from "../public/assets/crew/background-crew-tablet.jpg";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import React from "react";

const Layout = ({ children }) => {
  const router = useRouter();

  const [bg, setBg] = useState(0);

  useEffect(() => {
    setBg(window.innerWidth);
  });

  useEffect(() => {
    const handleBg = () => {
      setBg(window.innerWidth);
    };

    window.addEventListener("resize", handleBg);

    return () => {
      window.removeEventListener("resize", handleBg);
    };
  });

  return (
    <>
      <Navbar />
      <Image
        src={
          // bg >= 1024 ? BGDesktopHome : bg < 768 ? BGMobileHome : BGTabletHome
          bg >= 1024
            ? router.asPath == "/"
              ? BGDesktopHome
              : router.asPath == "/destination/moon" ||
                router.asPath == "/destination/mars" ||
                router.asPath == "/destination/europa" ||
                router.asPath == "/destination/titan"
              ? BGDesktopDestination
              : BGDesktopCrew
            : bg < 768
            ? router.asPath == "/"
              ? BGMobileHome
              : router.asPath == "/destination/moon" ||
                router.asPath == "/destination/mars" ||
                router.asPath == "/destination/europa" ||
                router.asPath == "/destination/titan"
              ? BGMobileDestination
              : BGMobileCrew
            : router.asPath == "/"
            ? BGTabletHome
            : router.asPath == "/destination/moon" ||
              router.asPath == "/destination/mars" ||
              router.asPath == "/destination/europa" ||
              router.asPath == "/destination/titan"
            ? BGTabletDestination
            : BGTabletCrew
        }
        fill
        style={{ objectFit: "cover" }}
        className="-z-10"
        alt="bg-img"
        quality={100}
      />
      {children}
    </>
  );
};

export default Layout;
