"use client";
import SetBrightnessCommand from "@/commands/SetBrightnessCommand";
import { useLightContext } from "@/context/LightContext";
import LightController from "@/controllers/Light.Controller";
import Lamp from "@/devices/Lamp";
import { useEffect, useState } from "react";

const Page = () => {
  const { brightness } = useLightContext();

  return (
    <>
      <div className="fixed top-0 bottom-0 w-full h-full bg-green-300 ">
        <div className=" w-full h-1/3 bg-blue-300 "></div>
        <div className=" w-full h-3/5 mt-[-10%]">
          <div className="w-3/4 mx-auto h-full border border-solid border-black grid grid-cols-2 grid-rows-2">
            <div className="w-full h-full bg-white">
              <div className="flex items-center justify-center w-full">
                <Lamp brightness={brightness} />
              </div>
            </div>
            <div className="w-full h-full"></div>
            <div className="w-full h-full"></div>
            <div className="w-full h-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
