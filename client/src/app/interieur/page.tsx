import BedRoom from "@/components/BedRoom";
import LivingRoom from "@/components/LivingRoom";
const Page = () => {
  return (
    <>
      <div className="fixed top-0 bottom-0 w-full bg-slate-600 h-full flex items-center justify-center ">
        <div className="w-[800px] h-[650px] bg-yellow-700">
          <div className="w-full h-[35%] bg-red-300"></div>
          <div className="w-full h-[15%] bg-red-300"></div>
          <div className="w-full h-[50%] flex">
            <div className="w-[60%] h-full">
              <LivingRoom />
            </div>
            <div className="w-[40%] h-full  ">
              <BedRoom />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
