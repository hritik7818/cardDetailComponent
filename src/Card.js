import React, { useState } from "react";
import bgImage from "./utils/bg-main-desktop.png";
import cardFront from "./utils/bg-card-front.png";
import cardBack from "./utils/bg-card-back.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import isString from "./../node_modules/lodash-es/isString";

const Card = () => {
  const [cardNumber, setCardNumber] = useState("0".repeat(16));
  const [cardHolder, setCardHolder] = useState("Hritik Rajput");
  const [expiryMonth, setExpiryMonth] = useState("00");
  const [expiryYear, setExpiryYear] = useState("00");
  const [cvc, setCvc] = useState("000");
  const [cardInputs, setcardInputs] = useState("vissible");
  const validationSchema = Yup.object({
    cardHolder: Yup.string()
      .min(5)
      .max(15)
      .required("Please enter the card holder name"),
    cardNumber: Yup.number()
      .min(Number("1" + "0".repeat(15)))
      .max(Number("9".repeat(16)))
      .required("Please enter the card number"),
    expiryMonth: Yup.number()
      .lessThan(13)
      .moreThan(1)
      .required("Please enter the expiry month"),
    expiryYear: Yup.number().required("Please enter the expiry year"),
    cvc: Yup.number().min(3).max(3).required("Please enter the CVC"),
  });
  const { touched, errors, handleChange, handleSubmit, handleBlur } = useFormik(
    {
      initialValues: {
        cardHolder: "",
        cardNumber: "",
        expiryMonth: "",
        expiryYear: "",
        cvc: "",
      },
      validationSchema: validationSchema,
      onSubmit: (value) => {
        console.log(value);
        setcardInputs("hidden");
      },
    }
  );
  console.log(errors.cardHolder);
  return (
    <div className="flex">
      {/* data over the card */}
      <div className="h-10 w-10 bg-white absolute rounded-3xl top-[85px] left-[183px] z-10"></div>
      <div className="h-5 w-5 bg-[#6239E8] border border-stone-100 absolute rounded-3xl top-[96px] left-[240px] z-10"></div>
      <div className="absolute left-36 top-[168px] z-10 text-2xl">
        <h3 className="text-white font-semibold absolute left-[40px] tracking-[4px]">
          {cardNumber.substring(0, 4)}
        </h3>
        <h3 className="text-white font-semibold absolute left-[118px] tracking-[4px]">
          {cardNumber.substring(4, 8)}
        </h3>
        <h3 className="text-white font-semibold absolute left-[198px] tracking-[4px]">
          {cardNumber.substring(8, 12)}
        </h3>

        <h3 className="text-white font-semibold absolute left-[276px] tracking-[4px]">
          {cardNumber.substring(12, 16)}
        </h3>
        <h3 className="text-zinc-300 font-semibold absolute left-[40px] top-[46px] z-10 text-lg font-mono w-52">
          {cardHolder}
        </h3>
        <h3 className="text-zinc-300 font-semibold absolute left-[300px] top-[46px] z-10 text-lg font-mono w-52">
          {expiryMonth + "/" + expiryYear}
        </h3>
      </div>
      <h3 className="text-white font-semibold absolute left-[510px] top-[384px] tracking-[4px] z-10">
        {cvc}
      </h3>
      <img
        className="object-contain absolute top-16 left-40 w-[28%]"
        src={cardFront}
        alt="cardFront"
      />
      <img
        className="object-contain absolute top-[300px] left-60 w-[28%]"
        src={cardBack}
        alt="cardBack"
      />

      <img src={bgImage} alt="bgImage" className="h-[100vh] w-[34%]" />

      <div className="ml-80 mt-32">
        {/* card inputs */}
        <form onSubmit={handleSubmit}>
          <div className={`${cardInputs}`}>
            <label
              htmlFor="cardHolder"
              className=" block font-mono font-semibold"
            >
              CARDHOLDER NAME
            </label>
            <input
              maxLength="19"
              type="text"
              id="cardHolder"
              placeholder="e.g. Hritik Rajput"
              className="font-semibold border-2 border-zinc-300 rounded-lg p-2 text-xl mt-1 w-96 focus:border-violet-900 outline-none"
              name="cardHolder"
              onChange={(e) => {
                setCardHolder(e.target.value.toLocaleUpperCase());
                handleChange(e);
              }}
              onBlur={handleBlur}
            />
            {errors.cardHolder && touched.cardHolder && (
              <p3 className="block text-red-700 font-medium">
                {errors.cardHolder}
              </p3>
            )}
            <label
              htmlFor="cardNumber"
              className="block mt-5 font-mono font-semibold"
            >
              CARD NUMBER
            </label>
            <input
              type="text"
              maxLength="16"
              id="cardNumber"
              name="cardNumber"
              placeholder="e.g.1234 5678 9123 0000"
              className="font-semibold border-zinc-300 border-2 rounded-lg p-2 text-xl mt-1 w-96 outline-none focus:border-violet-900"
              onChange={(e) => {
                setCardNumber(e.target.value);
                handleChange(e);
              }}
              onBlur={handleBlur}
            />
            {errors.cardNumber && touched.cardNumber && (
              <p3 className="block text-red-700 font-medium">
                {errors.cardNumber}
              </p3>
            )}
            <div className="flex mt-5 w-96">
              <div className="">
                <label
                  htmlFor="expiryMonth"
                  className="font-mono font-semibold block"
                >
                  EXP. DATE (MM/YY)
                </label>
                <div className="flex w-48 justify-between">
                  <div className="">
                    <input
                      maxLength="2"
                      type="text"
                      id="expiryMonth"
                      name="expiryMonth"
                      placeholder="MM"
                      className="font-semibold border-zinc-300 border-2 rounded-lg p-2 text-xl mt-1 w-20 outline-none focus:border-violet-900"
                      onChange={(e) => {
                        setExpiryMonth(e.target.value);
                        handleChange(e);
                      }}
                      onBlur={handleBlur}
                    />
                    {errors.expiryMonth && touched.expiryMonth && (
                      <p3 className="block text-red-700 font-medium">
                        {errors.expiryMonth}
                      </p3>
                    )}
                  </div>
                  <div className="">
                    <input
                      type="text"
                      maxLength="2"
                      placeholder="YY"
                      name="expiryYear"
                      className="font-semibold border-zinc-300 border-2 rounded-lg p-2 text-xl mt-1 w-20 mr-6 outline-none focus:border-violet-900"
                      onChange={(e) => {
                        setExpiryYear(e.target.value);
                        handleChange(e);
                      }}
                      onBlur={handleBlur}
                    />{" "}
                    {errors.expiryYear && touched.expiryYear && (
                      <p3 className="block text-red-700 font-medium">
                        {errors.expiryYear}
                      </p3>
                    )}
                  </div>
                </div>
              </div>
              <div className="">
                <label htmlFor="cvc" className="font-mono font-semibold block">
                  CVC
                </label>
                <input
                  type="text"
                  id="cvc"
                  maxLength="3"
                  placeholder="e.g. 123"
                  name="cvc"
                  className="font-semibold border-zinc-300 border-2 rounded-lg p-2 text-xl mt-1 w-full outline-none focus:border-violet-900"
                  onChange={(e) => {
                    setCvc(e.target.value);
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                />
                {errors.cvc && touched.cvc && (
                  <p3 className="block text-red-700 font-medium">
                    {errors.cvc}
                  </p3>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#1a032b] text-white w-96 mt-7 p-2 rounded-lg font-mono"
            >
              Confirm
            </button>
          </div>
        </form>
        {/* final elements */}
        <div
          className={`${
            cardInputs === "hidden" ? "vissible" : "hidden"
          } flex flex-col items-center`}
        >
          <svg
            width="80"
            height="80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="40" cy="40" r="40" fill="url(#a)" />
            <path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3" />
            <defs>
              <linearGradient
                id="a"
                x1="-23.014"
                y1="11.507"
                x2="0"
                y2="91.507"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#6348FE" />
                <stop offset="1" stop-color="#610595" />
              </linearGradient>
            </defs>
          </svg>
          <h2 className="text-4xl mt-10 font-mono">THANK YOU!</h2>
          <div className="mt-5 font-semibold text-lg text-zinc-500">
            We've added your card details
          </div>
          <button className="bg-[#1a032b] text-white w-96 mt-7 p-2 rounded-lg font-mono">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
