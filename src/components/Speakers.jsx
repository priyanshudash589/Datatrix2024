import React from "react";
import Marquee from "react-fast-marquee";
import { ProfileCard } from "../constants/ProfileCard";

const Speakers = () => {
  return (
    <>
      <div className="w-full min-h-[32rem] bg-black text-center flex flex-col gap-2 p-3 md:p-7 md:pt-11 lg:pt-[10rem]">
        <span className="text-white text-2xl sm:text-3xl md:text-4xl font-orbitron">
          Data Innovations Conference Experts
        </span>
        <span className="text-center font-orbitron text-white text-sm sm:text-base">
          Data Innovations Conference Experts
        </span>
        <div className="mt-4 sm:mt-5 md:mt-6">
          <Marquee className="bg-black">
            <ProfileCard name="Natalia" />
            <ProfileCard name="Vishal" />
            <ProfileCard name="Priyasnyi" />
            <ProfileCard name="vbkbkn" />
            <ProfileCard />
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Speakers;
