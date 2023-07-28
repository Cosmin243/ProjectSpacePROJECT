import React from "react";
import Image from "next/image";
import Link from "next/link";
import CrewArray from "../../../CrewArray/array";
import { useRouter } from "next/router";

const index = () => {
  const crew = CrewArray[0];

  const router = useRouter();

  return (
    <main>
      <div className="flex justify-center gap-6 items-center mx-auto py-6 md:justify-start md:ml-10">
        <h2 className="text-gray-500 text-lg font-bold ">02</h2>
        <h1 className="uppercase text-white text-xl">meet your crew</h1>
      </div>

      <div className="flex md:flex-col-reverse flex-col mx-20 2xl:mx-auto lg:flex-row-reverse items-center gap-6 lg:gap-20 xl:gap-60 lg:my-0 max-w-[1400px] lg:mt-[107px]">
        <Image
          className="md:w-[368px] md:h-[472px] lg:w-[568px] lg:h-[612px] md:mt-[46px] lg:mt-[36px] 2xl:mt-[52px]"
          src={crew.image.Commander}
          width={177}
          height={222}
          quality={100}
        />
        <div className="bg-gray-600 w-full h-[1px] -m-6 md:hidden"></div>
        <div className="flex flex-col gap-6 md:gap-2 lg:gap-10 items-center lg:items-start">
          <ul className="list-disc flex gap-8 items-center ml-10 mt-6 md:hidden">
            <Link href="/crew/commander">
              <li className="text-white text-3xl"></li>
            </Link>
            <Link href="/crew/missionspecialist">
              <li className="text-gray-500 text-3xl"></li>
            </Link>
            <Link href="/crew/pilot">
              <li className="text-gray-500 text-3xl"></li>
            </Link>
            <Link href="/crew/flightengineer">
              <li className="text-gray-500  text-3xl"></li>
            </Link>
          </ul>
          <h2 className="uppercase text-neutral-400 text-md lg:text-xl">
            {crew.role}
          </h2>
          <h1 className="uppercase text-neutral-200 text-2xl -mt-5 md:-mt-0 lg:-mt-8 lg:text-4xl ">
            {crew.name}
          </h1>
          <p className="text-slate-300 mx-0 text-center lg:text-left lg:mx-0 lg:mr-14 md:mx-20 md:max-w-[549px]">
            {crew.description}
          </p>
          <ul className="hidden list-disc md:flex gap-8 items-center ml-10 lg:ml-6 mt-6 md:mt-6 lg:mt-20">
            <Link href="/crew/commander">
              <li className="text-white text-3xl"></li>
            </Link>
            <Link href="/crew/missionspecialist">
              <li className="text-gray-500 text-3xl"></li>
            </Link>
            <Link href="/crew/pilot">
              <li className="text-gray-500 text-3xl"></li>
            </Link>
            <Link href="/crew/flightengineer">
              <li className="text-gray-500  text-3xl"></li>
            </Link>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default index;
