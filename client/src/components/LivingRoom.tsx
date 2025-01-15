"use client";
import React from "react";
import Sofa from "@/components/furniture/Sofa";
import Flower from "@/components/furniture/Flower";
import Table from "@/components/furniture/Table";
import Lamp from "@/devices/Lamp";
import { useLightContext } from "@/context/LightContext";

export default function LivingRoom() {
  const { brightness } = useLightContext();

  return (
    <div className="w-full h-full  relative">
      <div className="w-full h-full  flex">
        <div className="h-full w-5 bg-white"></div>
        <div className="w-full h-full flex">
          <div className="h-full">
            <Flower />
            <div className="bottom-4 absolute">
              <Lamp brightness={brightness} />
            </div>
          </div>
          <div className="h-full flex items-center">
            <Sofa />
          </div>
          <div className="ml-4 h-full">
            <Flower />
            <div className="bottom-4 absolute">
              <Lamp brightness={brightness} />
            </div>
          </div>
          <div className="h-full w-64 flex items-center justify-center absolute right-5">
            <Table />
          </div>
        </div>
        <div className="h-full w-5 bg-white absolute right-0"></div>
      </div>
      <div className="w-full h-5 absolute bottom-0 bg-white"></div>
    </div>
  );
}
