import React from "react";
import Chart from "../component/base/Chart";
import CardExperience from "../component/base/CardExperience";

const page = () => {
  return (
    <div className="grid gird-cols-1 bg-black-500 ">
      <div className="  min-h-screen md:container md:mx-auto ">
        <div className="relative z-3">
          <div className=" md:absolute  flex opacity-100 left-0 z-2 w-full md:my-16 md:ml-0 my-4 ml-10  md:text-[57px] text-[32px] ">
            <div className="flex space-x-1 opacity-100   w-full md:justify-center justify-start my-16  ">
              <div className="uppercase text-white font-black ">ABOUT</div>
              <div className="uppercase text-primary font-black">ME</div>
            </div>
          </div>
        </div>
        <div className="md:flex hidden flex-col z-1">
          <div className="flex w-full h-full justify-center my-20   text-[120px]">
            <div className="text-white opacity-20   uppercase font-black ">
              RESUME
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:w-10/12 md:mx-auto mx-10">
          {/* personal info  */}
          <div className="grid grid-cols-1 text-white">
            <div className="text-2xl font-bold mt-1 ">PERSONAL INFOS</div>
            <div
              className="md:hidden 
          md:h-screen flex justify-center items-center text-center "
            >
              <div className="md:absolute block md:mt-0 mt-10 md:bottom-10 md:border-none border-[4px] border-black-300  md:top-10 md:left-10 bg-[url(https://tunis-nextjs.netlify.app/assets/img/hero/dark.jpg)] md:w-4/12 bg-cover bg-center md:rounded-[5%] rounded-full md:aspect-auto aspect-square w-6/12 mb-5  drop-shadow-[2px_0px_2px_black] "></div>
            </div>
            <div className="grid grid-cols-2 gap-1">
              <div className=" mt-5 text-base">
                <ul className="space-y-5">
                  <li className="flex md:flex-row flex-col">
                    <span>First Name :</span>
                    <span className="font-bold">Steve</span>
                  </li>
                  <li className="flex md:flex-row flex-col">
                    Age : <span className="font-bold">27 Year</span>
                  </li>
                  <li className="flex md:flex-row flex-col">
                    Freelance :
                    <span className="font-bold text-green-500">Available</span>
                  </li>
                  <li className="flex md:flex-row flex-col">
                    Phone : <span className="font-bold">+21621184010</span>
                  </li>
                  <li className="flex md:flex-row flex-col">
                    Skype : <span className="font-bold">steve.milner</span>
                  </li>
                </ul>
              </div>
              <div className="mt-5 text-base">
                <ul className="space-y-5">
                  <li className="flex md:flex-row flex-col">
                    Last Name: <span className="font-bold">Milner</span>
                  </li>
                  <li className="flex md:flex-row flex-col">
                    Nasioonality: <span className="font-bold">Tunisia</span>
                  </li>
                  <li className="flex md:flex-row flex-col">
                    Address:
                    <span className="font-bold">Tunis</span>
                  </li>
                  <li className="flex md:flex-row flex-col">
                    Email: <span className="font-bold">you@mail.com</span>
                  </li>
                  <li className="flex md:flex-row flex-col">
                    Language: <span className="font-bold">Franch, English</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="flex border border-primary rounded-full w-fit mt-10 items-center justify-start">
                <div className="mx-4">DOWNLOAD CV</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 bg-primary rounded-full p-3 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-9  mt-6 mb-6 tracking-tighter  ">
            <div className="border  rounded-lg border-gray-800 px-10 py-3">
              <div className="flex">
                <div className="text-[57px] text-primary font-black ">12</div>
                <div className="text-[40px] pt-0.5  text-primary ">+</div>
              </div>
              <div className="flex-col ">
                <div className="flex items-center ">
                  <div className="border-b bg-white h-0.1 mr-4 w-7 "></div>
                  <div className="text-base text-white  uppercase">YEAR 0F</div>
                </div>
                <div className="flex items-center ">
                  <div className="bg-transparent h-0 mr-4 w-7"></div>
                  <div className="text-base text-white  uppercase">
                    EXPERIENCE
                  </div>
                </div>
              </div>
            </div>
            <div className="border  rounded-lg border-gray-800 px-10 py-3">
              <div className="flex">
                <div className="text-[57px] text-primary font-black ">97</div>
                <div className="text-[40px] pt-0.5  text-primary ">+</div>
              </div>
              <div className="flex-col ">
                <div className="flex items-center ">
                  <div className="border-b bg-white h-0.1 mr-4 w-7 "></div>
                  <div className="text-base text-white  uppercase">
                    completed
                  </div>
                </div>
                <div className="flex items-center ">
                  <div className="bg-transparent h-0 mr-4 w-7"></div>
                  <div className="text-base text-white  uppercase">
                    projects
                  </div>
                </div>
              </div>
            </div>
            <div className="border  rounded-lg border-gray-800 px-10 py-3">
              <div className="flex">
                <div className="text-[57px] text-primary font-black ">81</div>
                <div className="text-[40px] pt-0.5  text-primary ">+</div>
              </div>
              <div className="flex-col ">
                <div className="flex items-center ">
                  <div className="border-b bg-white h-0.1 mr-4 w-7 "></div>
                  <div className="text-base text-white  uppercase">happy</div>
                </div>
                <div className="flex items-center ">
                  <div className="bg-transparent h-0 mr-4 w-7"></div>
                  <div className="text-base text-white  uppercase">
                    customers
                  </div>
                </div>
              </div>
            </div>
            <div className="border  rounded-lg border-gray-800 px-10 py-3">
              <div className="flex">
                <div className="text-[57px] text-primary font-black ">53</div>
                <div className="text-[40px] pt-0.5  text-primary ">+</div>
              </div>
              <div className="flex-col ">
                <div className="flex items-center ">
                  <div className="border-b bg-white h-0.1 mr-4 w-7 "></div>
                  <div className="text-base text-white  uppercase">award</div>
                </div>
                <div className="flex items-center ">
                  <div className="bg-transparent h-0 mr-4 w-7"></div>
                  <div className="text-base text-white  uppercase">won</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* my skill */}
        <div className="flex w-full h-fit md:justify-center md:ml-0 ml-10 my-16  text-[30px] ">
          <div className="uppercase text-white font-black ">my skill</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-6 mb-6  tracking-tighter">
          <div className="flex px-2 py-2 items-center justify-center">
            <Chart nilai={25} label="HTML" />
          </div>
          <div className="flex px-2 py-2 items-center justify-center">
            <Chart nilai={89} label="JAVASCRIPT" />
          </div>
          <div className="flex px-2 py-2 items-center justify-center">
            <Chart nilai={70} label="CSS" />
          </div>
          <div className="flex px-2 py-2 items-center justify-center">
            <Chart nilai={66} label="php" />
          </div>
          <div className="flex px-2 py-2 items-center justify-center">
            <Chart nilai={95} label="wordpress" />
          </div>
          <div className="flex px-2 py-2 items-center justify-center">
            <Chart nilai={50} label="jquery" />
          </div>
          <div className="flex px-2 py-2 items-center justify-center">
            <Chart nilai={65} label="angular" />
          </div>
          <div className="flex px-2 py-2 items-center justify-center">
            <Chart nilai={45} label="react" />
          </div>
        </div>
        <div className=" w-full h-fit my-16   text-[30px] ">
          <div className="flex w-full md:justify-center justify-start md:ml-0 ml-10">
            <div className="uppercase  mb-6 text-white font-black ">
              EXPERIENCE & EDUCATION
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:w-10/12  mb-28  md:mx-auto mx-5">
            <CardExperience
              time="2018 - present"
              jabatan="Web Developer"
              tempat="envato"
              desc="Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit"
            />

            <CardExperience
              time="2013 - 2018"
              jabatan="UI/UX Designer"
              tempat="Themeforest"
              desc="Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt"
            />

            <CardExperience
              time="2018 - present"
              jabatan="Web Developer"
              tempat="envato"
              desc="Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit"
            />

            <CardExperience
              time="2005 - 2013"
              jabatan="Consultant"
              tempat="videohive"
              desc="Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt"
            />
            <CardExperience
              time="2018 - present"
              jabatan="Web Developer"
              tempat="envato"
              desc="Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit"
            />

            <CardExperience
              time="2005 - 2013"
              jabatan="Consultant"
              tempat="videohive"
              desc="Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
