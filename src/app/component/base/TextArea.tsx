"use client";
import React, { ChangeEvent, InputHTMLAttributes } from "react";

interface Iprops {
  id: string;

  value?: string;
  disable?: boolean;
  placeholder?: string;
  clasName?: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
function TextArea(props: Iprops) {
  return (
    <div className="w-full">
      <textarea
        className={`text-white bg-black-300 border-black-300  p-5 focus:outline-none focus:border-2 w-full focus:border-primary hover:border-2 hover:border-primary rounded-[32px]  uppercase ${props.clasName}`}
        rows={4}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      >
        {/* {props.value} */}
      </textarea>
      {props.error && (
        <div className="w-full">
          <div className="text-red-500">{props.error}</div>
        </div>
      )}
    </div>
  );
}

export default TextArea;
