import React, { useState } from "react";
import InputField from "../UI/InputField";
import RadioButton from "../UI/RadioButton";
import Button from "../UI/Button";
// import { ReactComponent as CalculatorIcon } from "../../assets/images/calculator.svg";
import { Calculator } from "lucide-react";

function handleMortgageCalcultion() {
  //TODO
}

const CalculatorForm = () => {
  const [formData, setFormData] = useState({
    amount: 500000,
    interest: 2.5,
    term: 10,
  });

  const [mortgageType, setMortgageType] = useState("repayment");
  return (
    <div className="bg-neutral-white p-[2.5rem]">
      <div className="flex justify-between items-center pb-[2.5rem]">
        <h1 className="font-bold text-2xl text-slate-900">
          Mortgage Calculator
        </h1>
        <Button
          className="bg-transparent text-slate-700 border-0 underline decoration-dotted decoration-1 
        underline-offset-4 decoration-slate-700"
        >
          clear all
        </Button>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          handleMortgageCalcultion;
        }}
      >
        <InputField
          required={true}
          label="Mortgage Amount"
          id="amount-input"
          type="number"
          prefix="￡"
          value={formData.amount}
          onChange={(event) => {
            setFormData({ ...formData, amount: event.target.value });
          }}
        />

        <div className="flex flex-col md:flex-row gap-x-4 md:items-center">
          <InputField
            label="Mortgage Term"
            id="term-input"
            required={true}
            type="number"
            value={formData.term}
            suffix="years"
            onChange={(event) => {
              setFormData({ ...formData, term: event.target.value });
            }}
          />

          <InputField
            label="Interest Rate"
            id="interest-field"
            required={true}
            type="number"
            value={formData.interest}
            suffix="%"
            onChange={(event) => {
              setFormData({ ...formData, interest: event.target.value });
            }}
          />
        </div>

        <fieldset>
          <legend className="pb-3">Type of Mortgage</legend>
          <div className="flex flex-col gap-3">
            <RadioButton
              id="repayment"
              label="Repayment"
              value="repayment"
              checked={mortgageType === "repayment"}
              onChange={(event) => {
                setMortgageType(event.target.value);
              }}
            />
            <RadioButton
              id="interest-only"
              label="Interest Only"
              value="interest only"
              checked={mortgageType === "interest only"}
              onChange={(event) => {
                setMortgageType(event.target.value);
              }}
            />
          </div>
        </fieldset>
      </form>

      <Button icon={Calculator}>Calculate Repayments</Button>
    </div>
  );
};

export default CalculatorForm;
