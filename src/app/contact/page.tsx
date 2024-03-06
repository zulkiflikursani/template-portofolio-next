import React from "react";
import FromContact from "./FromContact";

const page = () => {
  return (
    <div className="bg-black-500">
      <div className="md:w-9/12 mx-auto min-h-screen w-screen ">
        <div className="relative z-3">
          <div className=" md:absolute  flex opacity-100 left-0 z-2 w-full md:my-10 md:ml-0 my-4 ml-10  md:text-[57px] text-[32px] ">
            <div className="flex space-x-1 opacity-100   w-full md:justify-center justify-start my-16  ">
              <div className="uppercase text-white font-black ">get in</div>
              <div className="uppercase text-primary font-black">touch</div>
            </div>
          </div>
        </div>
        <div className="md:flex hidden flex-col z-1">
          <div className="flex w-full h-full justify-center my-14  text-[120px]">
            <div className="text-white opacity-20   uppercase font-black ">
              contact
            </div>
          </div>
        </div>
        <div className="md:flex md:flex-row flex-col text-white w-full h-full md:space-x-6 ">
          <div className="flex-col md:w-4/12 p-5 w-full">
            <h1>DONT BE SHY</h1>
            <p>
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
          </div>
          <div className="flex md:w-8/12 w-full p-5  ">
            <div className="w-full">
              <FromContact
                question={["nama", "email", "nohp", "subject", "message"]}
                answer={{
                  nama: "your nama",
                  email: "your email",
                  nohp: "yout phone number",
                  subject: "your subject",
                  message: "your message",
                }}
                errorMessage={{
                  nama: {
                    empty: "please fill our name",
                  },
                  email: {
                    empty: "please fill our email",
                    notValid: "please fill valid email",
                  },
                  nohp: {
                    empty: "please fill our number",
                    notValid: "please fill valid phone number",
                  },
                  subject: {
                    empty: "please fill our subject",
                  },
                  message: {
                    empty: "please fill our message",
                  },
                }}
                messageSorry={{
                  info: "info Sorry",
                  close: "Close",
                }}
                submitText="Send"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
