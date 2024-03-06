import React from "react";

const Hero = () => {
  return (
    <div className="bg-black-500 min-h-screen">
      <div className="md:flex md:flex-row flex:col">
        <div className="h-screen w-6/12 md:block -ml-60 hidden bg-primary skew-x-12"></div>
        <div
          className="md:static 
          md:h-screen flex justify-center items-center text-center "
        >
          <div className="md:absolute block md:mt-0 mt-20 md:bottom-10 md:border-none border-[4px] border-black-300  md:top-10 md:left-10 bg-[url(https://tunis-nextjs.netlify.app/assets/img/hero/dark.jpg)] md:w-4/12 bg-cover bg-center md:rounded-[5%] rounded-full md:aspect-auto aspect-square w-5/12 mb-5  drop-shadow-[2px_0px_2px_black] "></div>
        </div>
        <div className="flex md:w-12/12 justify-center md:text-start text-center md:justify-end">
          <div className="flex flex-col md:w-9/12 md:px-32 px-10 justify-center">
            <h1 className="text-primary uppercase text-4xl font-bold">
              I&apos;m steve milner.
            </h1>
            <h1 className="uppercase text-4xl text-white font-bold">
              web designer
            </h1>
            <p className="text-white mt-6 leading-9">
              I&apos;m a Tunisian based web designer & front‑end developer
              focused on crafting clean & user‑friendly experiences, I am
              passionate about building excellent software that improves the
              lives of those around me.
            </p>
            <div className="flex mt-7 md:justify-start items-center justify-center group">
              <div className=" flex text-white border items-center font-bold border-primary  text-xl rounded-full uppercase  mb-16 md:mb-2 mr-0  group-hover:bg-primary pointer-events-none">
                <span className=" mx-4 group-hover:bg-primary ">
                  MORE ABOUT ME
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12  bg-primary rounded-full group-hover:bg-primary pointer-events-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
