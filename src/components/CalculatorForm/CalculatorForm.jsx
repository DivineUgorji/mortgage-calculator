import React, { useState } from "react";
import InputField from "../UI/InputField";
import RadioButton from "../UI/RadioButton";
import Button from "../UI/Button";

import { Calculator } from "lucide-react";

const CalculatorForm = ({ onCalculateMortgage }) => {
  const [formData, setFormData] = useState({
    amount: "",
    interest: "",
    term: "",
    mortgageType: "",
  });

  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};

    if (!formData.amount) {
      newErrors.amount = "This field is required";
    }
    if (!formData.term) {
      newErrors.term = "This field is required";
    }
    if (!formData.interest) {
      newErrors.interest = "This field is required";
    }

    setErrors(newErrors);

    onCalculateMortgage(formData);
    // if (Object.keys(newErrors).length === 0) {

    // }

    console.log("form was submitted");
  }

  function handleClear() {
    setFormData({
      amount: "",
      interest: "",
      term: "",
      mortgageType: "repayment",
    });
    setErrors({});
    console.log("onclear function is called");
  }

  return (
    <div className="grid ">
      <div
        className="flex 
      justify-between items-center pb-[2.5rem]  max-[380px]:flex-col max-[380px]:items-start max-[380px]:gap-2"
      >
        <h1 className="font-jakarta font-extrabold tracking-normal md:text-2xl text-slate-900">
          Mortgage Calculator
        </h1>

        <Button
          className="bg-transparent text-lg text-slate-700 border-0 underline decoration-dotted decoration-1 
        underline-offset-4 decoration-slate-700 px-0 py-0"
          onClick={handleClear}
        >
          clear all
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="pb-5">
          <InputField
            label="Mortgage Amount"
            id="amount-input"
            type="number"
            prefix="￡"
            value={formData.amount}
            autoComplete="off"
            error={errors.amount}
            onChange={(event) => {
              const value = event.target.value;
              if (value <= 100000000000) {
                setFormData({ ...formData, amount: event.target.value });
              }
            }}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-x-4 md:items-center">
          <InputField
            label="Mortgage Term"
            id="term-input"
            type="number"
            value={formData.term}
            suffix="years"
            error={errors.term}
            className="py-4"
            onChange={(event) => {
              setFormData({ ...formData, term: event.target.value });
            }}
          />

          <InputField
            label="Interest Rate"
            id="interest-field"
            // required={true}
            type="number"
            value={formData.interest}
            suffix="%"
            error={errors.interest}
            onChange={(event) => {
              setFormData({ ...formData, interest: event.target.value });
            }}
          />
        </div>

        <fieldset>
          <legend className="pt-6 pb-3">Mortgage Type</legend>
          <div className="flex flex-col gap-2">
            <RadioButton
              id="repayment"
              label="Repayment"
              value="repayment"
              checked={formData.mortgageType === "repayment"}
              onChange={(event) => {
                setFormData({ ...formData, mortgageType: event.target.value });
              }}
            />
            <RadioButton
              id="interest-only"
              label="Interest Only"
              value="interest-only"
              checked={formData.mortgageType === "interest-only"}
              onChange={(event) => {
                setFormData({ ...formData, mortgageType: event.target.value });
              }}
            />
          </div>

          <div className="w-full  pt-10">
            <Button
              icon={Calculator}
              className="block px-6 py-4 md:px-11
            justify-self-center min-[380px]:justify-self-start 
            hover:bg-lime-hover transition-all duration-300 ease-out"
              type="submit"
            >
              <span className="block font-bold tracking-tight max-[370px]:hidden text-[1.1rem]">
                Calculate Repayments
              </span>
              <span className="hidden font-bold tracking-tight max-[370px]:block">
                Calculate Pay
              </span>
            </Button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default CalculatorForm;
