"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { use } from "react";

const Navbar = () => {
  const usepathname = usePathname();

  return (
    <div className="realtive">
      <div className="z-20 fixed top-3 mr-1 right-6 hover:bg-primary  active:bg-primary text-white bg-black-300 rounded-full p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
      </div>
      <div className="fixed md:fixed  z-50   bg-black-300 md:w-auto md:left-auto md:right-0 md:bg-transparent md:top-0 md:bottom-0 bottom-0 left-0 right-0 ">
        <div
          className={`md:flex-col flex  md:items-end  md:justify-center h-full items-center text-white justify-around md:space-y-7 min-h-16 `}
        >
          <Link
            href="/"
            className={`md:flex md:justify-end md:hover:bg-primary md:hover:w-auto  rounded-full md:m-0 md:p-0 md:items-center md:mx-7  pointer-events-none group`}
          >
            <div className="md:block opacity-0 hidden  md:group-hover:opacity-100 hover:block mx-3">
              HOME
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-12  h-12 rounded-full hover:bg-primary text-white  p-3  mr-0 pointer-events-auto ${usepathname == "/" ? "bg-primary" : "bg-black-400 "}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </Link>
          <Link
            href="/about"
            className="md:flex md:justify-end md:hover:bg-primary md:hover:w-auto  rounded-full md:m-0 md:p-0 md:items-center md:mx-7  pointer-events-none group"
          >
            <div className="md:block opacity-0 hidden  md:group-hover:opacity-100 hover:block mx-3">
              ABOUT
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-12  h-12 rounded-full hover:bg-primary  text-white   p-3  mr-0 pointer-events-auto ${usepathname == "/about" ? "bg-primary" : "bg-black-400"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </Link>
          <Link
            href="/portofolio"
            className="md:flex md:justify-end md:hover:bg-primary md:hover:w-auto md:m-0 md:p-0 md:items-center md:mx-7  rounded-full  pointer-events-none group"
          >
            <div className="md:block opacity-0 hidden  md:group-hover:opacity-100 hover:block mx-3">
              PORTOFOLIO
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-12  h-12 rounded-full hover:bg-primary  text-white  p-3  mr-0 pointer-events-auto ${usepathname == "/portofolio" ? "bg-primary" : "bg-black-400"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
              />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="md:flex md:justify-end md:hover:bg-primary md:hover:w-auto  rounded-full md:m-0 md:p-0 md:items-center md:mx-7 pointer-events-none group"
          >
            <div className="md:block opacity-0 hidden  md:group-hover:opacity-100 hover:block mx-3">
              CONTACT
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-12  h-12 rounded-full hover:bg-primary text-white  p-3  mr-0 pointer-events-auto ${usepathname == "/contact" ? "bg-primary" : "bg-black-400"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
              />
            </svg>
          </Link>
          <Link
            href="/blog"
            className="md:flex md:justify-end md:hover:bg-primary md:hover:w-auto  rounded-full md:m-0 md:p-0 md:items-center md:mx-7 pointer-events-none group"
          >
            <div className="md:block opacity-0 hidden  md:group-hover:opacity-100 hover:block mx-3">
              BLOG
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-12  h-12 rounded-full hover:bg-primary  text-white  p-3  mr-0 pointer-events-auto ${usepathname == "/blog" ? "bg-primary" : "bg-black-400"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
