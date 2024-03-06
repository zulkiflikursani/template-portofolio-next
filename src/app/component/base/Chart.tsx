"use client";
import React, { useEffect, useState } from "react";

interface typeNilai {
  nilai: number;
  label: string;
}
const Chart = (props: typeNilai) => {
  const [persentase, setpersentase] = useState(0);
  const [clipPathValue, setClipPathValue] = useState("");

  const generatePayChart = (nilai: number) => {
    console.log(nilai);
    setpersentase(nilai);
    var kanan = nilai > 25 ? 100 : 0;
    var kananbawah = nilai > 50 ? 100 : 0;
    var kananbawahkekiri = nilai > 75 ? 0 : 0;
    if (nilai > 75) {
      var kiribawahkeatas = 100 - ((nilai - 75) / 25) * 100;
      console.log(
        "50% 50%,0% 0%," +
          kanan +
          "% 0%,100% " +
          kananbawah +
          "%, " +
          kananbawahkekiri +
          "% 100%, 0% " +
          kiribawahkeatas +
          "%"
      );
      return (
        "50% 50%,0% 0%," +
        kanan +
        "% 0%,100% " +
        kananbawah +
        "%, " +
        kananbawahkekiri +
        "% 100%, 0%" +
        kiribawahkeatas +
        "%"
      );
    } else if (nilai > 50) {
      var kananbawahkekiri = 100 - ((nilai - 50) / 25) * 100;
      return (
        "50% 50%,0% 0%," +
        kanan +
        "% 0%,100% " +
        kananbawah +
        "%, " +
        kananbawahkekiri +
        "% 100%"
      );
    } else if (nilai > 25) {
      var kananbawah = ((nilai - 25) / 25) * 100;

      return "50% 50%,0 0," + kanan + "% 0,100% " + kananbawah + "%";
    } else if (nilai > 0) {
      var kanan = (nilai / 25) * 100;
      if (kanan > 100) {
        kanan = 100;
      }
      return "50% 50%,0% 0%," + kanan + "% 0%";
    } else {
      return "";
    }
  };
  //   setpersentase(props.nilai);
  useEffect(() => {
    const style = generatePayChart(props.nilai);
    setClipPathValue(style);
  }, [props.nilai]);

  return (
    <div className="">
      <div className="relative  h-40  w-40">
        <div className="absolute inset-0 transfrom rotate-45 ">
          <div className="rounded-full w-full h-full border-[40px]    border-black-400   "></div>
          <div
            className="absolute inset-0 rounded-full h-full w-full bg-primary"
            style={{ clipPath: `polygon(${clipPathValue})` }}
          ></div>
          <div className="absolute inset-0 rounded-full  bg-black-500 h-[85%] w-[85%] m-auto">
            <div className="flex justify-center items-center w-full h-full">
              <div className="text-2xl font-bold text-white transfrom -rotate-45">
                {persentase ? persentase : 0} %
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5">
        <h1 className="text-white text-lg uppercase">{props.label}</h1>
      </div>
    </div>
  );
};

export default Chart;
