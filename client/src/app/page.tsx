"use client";
import BedRoom from "@/components/BedRoom";
import LivingRoom from "@/components/LivingRoom";
import Home from "@/devices/home";
const Page = () => {
  return (
    <>
      {/* <Home/> */}
      <>
        <div className="fixed top-0 bottom-0 w-full grass h-full flex items-center justify-center ">
          <div className="w-[800px] h-[650px] floor">
            <div className="w-full h-[50%]">
              <BedRoom />
            </div>
            <div className="w-full h-[50%] flex">
              <LivingRoom />
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Page;
