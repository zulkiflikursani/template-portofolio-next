import React from "react";

const page = () => {
  return (
    <div className="grid bg-black-500 px-2">
      <div className="min-h-screen md:container md:mx-auto ">
        <div className="relative z-3">
          <div className=" md:absolute  flex opacity-100 left-0 z-2 w-full md:my-16 md:ml-0 my-4 ml-10  md:text-[57px] text-[32px] ">
            <div className="flex space-x-1 opacity-100   w-full md:justify-center justify-start my-16  ">
              <div className="uppercase text-white font-black ">MY</div>
              <div className="uppercase text-primary font-black">
                PORTOFOLIO
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex hidden flex-col z-1">
          <div className="flex w-full h-full justify-center my-20   text-[120px]">
            <div className="text-white opacity-20   uppercase font-black ">
              WORKS
            </div>
          </div>
        </div>
        <div className="flex justify-start space-x-6 text-sm  mb-10 cursor-pointer ">
          <div className="text-primary font-semibold ">ALL</div>
          <div className="text-white font-bold">LOGO</div>
          <div className="text-white font-bold">VIDEO</div>
          <div className="text-white font-bold">VIDEO</div>
          <div className="text-white font-bold">GRAPHIC DESIGN</div>
          <div className="text-white font-bold">MOCKUP</div>
        </div>
        <div className="min-h-screen w-full grid grid-cols-1 text-white"></div>
      </div>
    </div>
  );
};

export default page;
