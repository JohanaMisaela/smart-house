"use client";
import { useDoorContext } from "@/context/DoorContext";
import { useLightContext } from "@/context/LightContext";
import Door from "@/devices/Door";
import Lamp from "@/devices/Lamp";

const Page = () => {
  const { brightness } = useLightContext();
  const { isOpen } = useDoorContext();

  return (
    <>
      <div className="fixed top-0 bottom-0 w-full bg-slate-600 h-full flex items-center justify-center ">
        <div className="w-[800px] h-[650px] bg-yellow-700">
          <div className="w-full h-[35%] bg-red-300"></div>
          <div className="w-full h-[15%] bg-red-300"></div>
          <div className="w-full h-[50%] flex">
            <div className="w-[60%] h-full"></div>
            <div className="w-[40%] h-full  ">
              <div className="w-full h-[5%] flex">
                <div className="w-[20%] h-full bg-white"></div>
                <div className="w-[30%] h-full ">
                  <Door isOpen={isOpen} />
                </div>
                <div className="w-[50%] h-full bg-white"></div>
              </div>
              <div className="w-full h-[90%] parquet flex">
                <div className="w-[5%] h-full bg-white"></div>
                <div className="w-[90%] h-full flex items-center justify-end">
                  <div className="w-2/3 h-[65%] rounded-tl-xl rounded-bl-xl ">
                    <div className="w-full h-[80%] rounded-tl-xl rounded-bl-xl lit "></div>
                    <div className="w-full h-[20%] flex items-center justify-end">
                      <div className="h-[140%] mt-[5%] w-20 flex items-center justify-end">
                        <div className="h-full w-[80%] bg-green-300 rounded-md flex items-center justify-center mr-[5%]">
                          <Lamp brightness={brightness} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[5%] h-full bg-white"></div>
              </div>
              <div className="w-full h-[5%] flex">
                <div className="w-[50%] h-full bg-white"></div>
                <div className="w-[30%] h-full "></div>
                <div className="w-[20%] h-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
