"use client";
import React from "react";
import Textbox from "../component/base/Textbox";
import TextArea from "../component/base/TextArea";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { number, object, string, boolean } from "yup";

interface IFormData {
  nama: string;
  email: string;
  nohp: string;
  subject: string;
  message: string;
}

interface IAnswer {
  nama: string;
  email: string;
  nohp: string;
  subject: string;
  message: string;
}

interface IerrorField {
  empty: string;
  notValid?: string;
}

interface IerrorMessage {
  nama: IerrorField;
  email: IerrorField;
  nohp: IerrorField;
  subject: IerrorField;
  message: IerrorField;
}

interface ImessageSorry {
  info: string;
  close?: string;
}

interface IProps {
  question?: Array<string>;
  answer: IAnswer;
  errorMessage: IerrorMessage;
  submitText: string;
  messageSorry: ImessageSorry;
}
function FromContact(props: IProps) {
  const pattern = /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/;
  const scheme = object({
    nama: string().required(props.errorMessage.nama.empty),
    email: string()
      .required(props.errorMessage.email.empty)
      .email(props.errorMessage.email.notValid),
    nohp: string()
      .required(props.errorMessage.nohp.empty)
      .matches(pattern, props.errorMessage.nohp.notValid),
    subject: string().required(props.errorMessage.subject.empty),
    message: string().required(props.errorMessage.message.empty),
  });
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<IFormData>({
    mode: "onChange",
    resolver: yupResolver(scheme),
  });

  const onSubmit = async (data: IFormData) => {
    console.log(data);
    // isSubmitted(false);
  };

  return (
    <div className="w-full ">
      <div className="flex-col space-y-9">
        <div className="md:flex md:flex-row md:space-y-0 flex-col space-y-9 w-full md:space-x-10 justify-center items-start">
          <Controller
            name="nama"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Textbox
                value={value || ""}
                onChange={onChange}
                placeholder={props.answer.nama}
                disable={isSubmitting}
                error={errors.nama?.message}
                id={props.answer.nama}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Textbox
                value={value || ""}
                onChange={onChange}
                placeholder={props.answer.email}
                disable={isSubmitting}
                error={errors.email?.message}
                id={props.answer.email}
              />
            )}
          />
        </div>
        <div className="flex w-full space-x-10 justify-center items-center">
          <Controller
            name="nohp"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Textbox
                value={value || ""}
                onChange={onChange}
                placeholder={props.answer.nohp}
                disable={isSubmitting}
                error={errors.nohp?.message}
                id={props.answer.nohp}
              />
            )}
          />
          <Controller
            name="subject"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Textbox
                value={value || ""}
                onChange={onChange}
                placeholder={props.answer.subject}
                disable={isSubmitting}
                error={errors.subject?.message}
                id={props.answer.subject}
              />
            )}
          />
        </div>
        <Controller
          name="message"
          control={control}
          render={({ field: { value, onChange } }) => (
            <TextArea
              value={value || ""}
              onChange={onChange}
              placeholder={props.answer.message}
              disable={isSubmitting}
              error={errors.message?.message}
              id={props.answer.message}
            />
          )}
        />

        <div
          className="flex mt-7 md:justify-start items-center justify-center group"
          onClick={handleSubmit(onSubmit)}
        >
          <div className=" flex text-white border items-center font-bold border-primary  text-xl rounded-full uppercase  mb-16 md:mb-2 mr-0  group-hover:bg-primary pointer-events-none">
            <span className=" mx-4 group-hover:bg-primary ">
              {props.submitText}
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
  );
}

export default FromContact;
