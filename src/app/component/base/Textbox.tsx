"use client";
import React, { ChangeEvent } from "react";
interface Itextbox {
  id: string;
  value?: string;
  placeholder?: string;
  className?: string;
  error?: string;
  disable?: boolean;
  //   onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Textbox = (props: Itextbox) => {
  return (
    <div className={`w-full ${props.className} `}>
      <input
        className="border border-black-100 rounded-full border-2 hover:border-primary  focus:outline-none focus:border-primary hover:ring-primary px-5 bg-black-300 border-black-300 text-white py-3 uppercase w-full "
        type="text"
        id={props.id}
        disabled={props.disable}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
      {props.error && (
        <div className="w-full">
          <div className="text-red-500">{props.error}</div>
        </div>
      )}
    </div>
  );
};

export default Textbox;
