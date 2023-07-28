import React from "react";
import Image from "next/image";
import Link from "next/link";
import DestArray from "../../../DestinationArray/array";
import { useRouter } from "next/router";
import { userAgent } from "next/server";

const About = () => {
  const destination = DestArray[1];

  const router = useRouter();

  console.log(router.asPath);

  return (
    <main>
      <div className="flex justify-center gap-6 items-center mx-auto py-6 md:justify-start md:ml-10">
        <h2 className="text-gray-500 text-lg font-bold ">01</h2>
        <h1 className="uppercase text-white text-xl">pick your destination</h1>
      </div>

      <div className="flex flex-col mx-auto lg:flex-row items-center my-8 gap-6 lg:gap-20 xl:gap-60 lg:my-28 max-w-[859px]">
        <Image
          className="md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px]"
          src={destination.image.Mars}
          width={170}
          height={170}
          quality={100}
        />
        <div className="flex flex-col gap-6 items-center">
          <ul className="flex flex-row items-center justify-between text-white text-md uppercase gap-10">
            <li>
              <Link href="/destination/moon">Moon</Link>
            </li>
            <li>
              <Link
                href="/destination/mars"
                className={
                  router.asPath == "/destination/mars"
                    ? "border-b-[3px] border-b-white py-2"
                    : ""
                }
              >
                Mars
              </Link>
            </li>
            <li>
              <Link href="/destination/europa">Europa</Link>
            </li>
            <li>
              <Link href="/destination/titan">Titan</Link>
            </li>
          </ul>
          <h1 className="uppercase text-white text-6xl lg:mt-4 text-center lg:text-left">
            {destination.name}
          </h1>
          <p className="text-slate-300 mx-20 text-center border-b-[1px] border-b-slate-800 pb-12 md:mx-40 lg:mx-0 lg:text-left">
            {destination.description}
          </p>
          <div className="flex flex-col gap-4 items-center md:flex-row md:gap-40 lg:gap-10">
            <div className="text-center lg:mx-0">
              <p className="text-gray-300 text-sm pb-4 md:pb-2">
                AVG. DISTANCE
              </p>
              <h2 className="text-white text-2xl">{destination.distance} KM</h2>
            </div>
            <div className="text-center">
              <p className="text-gray-300 text-sm pb-4 md:pb-2">
                EST. TRAVEL TIME
              </p>
              <h2 className="text-white text-2xl">{destination.travel_time}</h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
