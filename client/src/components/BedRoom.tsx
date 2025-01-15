"use client";
import { useDoorContext } from "@/context/DoorContext";
import { useLightContext } from "@/context/LightContext";
import Bed from "@/components/furniture/Bed";
import NightStand from "@/components/furniture/NightStand";
import Flower from "@/components/furniture/Flower";
import Workspace from "@/components/furniture/Workspace";
import Closet from "@/components/furniture/Closet";
import Door from "@/devices/Door";
import Lamp from "@/devices/Lamp";

export default function BedRoom() {
  const { brightness } = useLightContext();
  const { isOpen } = useDoorContext();
  return (
    <div className="w-full h-full relative">
      <div className="w-full h-5 absolute top-0 bg-white"></div>
      <div className="  w-full h-full flex">
        <div className="h-full w-5 bg-white"></div>
        <div className="top-5 bottom-5 left-5 right-5 absolute flex ">
          <NightStand />
          <Bed />
          <div className="h-full">
            <Lamp brightness={brightness} />
            <div className="ml-16 w-40 bottom-0 absolute">
              <Workspace />
            </div>
          </div>
          <div className=" h-full right-0 absolute flex">
            <Flower />
            <Closet />
          </div>
        </div>
        <div className="h-full w-5 bg-white absolute right-0"></div>
      </div>
      <div className="w-full h-5 absolute bottom-0 flex">
        <div className="w-4/5 h-5 bg-white"></div>
        <div className={`w-1/5 h-5 flex ${!isOpen && "items-center"}`}>
          <Door isOpen={isOpen} />
        </div>
        <div className="w-1/5 h-5 bg-white"></div>
      </div>
    </div>
  );
}
