"use client";
import React from "react";

interface propsType {
  time: string;
  jabatan: string;
  tempat: string;
  desc: string;
}

const CardExperience = (props: propsType) => {
  return (
    <div className="w-full ">
      <div className="flex w-full  px-2 py-2 ">
        <div className=" min-h-full py-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10  h-10 p-2 mb-0 mx-auto text-white  bg-primary rounded-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
            />
          </svg>
          <div className="mx-auto w-[0.5px] mb-1 min-h-[70%] bg-gray-500   "></div>
        </div>
        <div className="flex-col w-full mx-5">
          <p className="text-[10px] bg-black-300 uppercase text-white rounded-full w-fit mt-2 py-1  px-3 mb-5">
            {props.time}
          </p>
          <div className="text-white">
            <div className="flex items-center uppercase mb-2">
              <div className="text-sm font-bold">{props.jabatan}</div>
              <span className="ml-2 text-sm text-black-100">-</span>
              <span className="ml-2 text-sm text-black-100 ">
                {props.tempat}
              </span>
            </div>
            <p className="text-sm  ">{props.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardExperience;
