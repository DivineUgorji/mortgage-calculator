import React from "react";

const ResultCard = ({ children, className }) => {
  return (
    <div className={`text-neutral-white ${className} font-jakarta`}>
      <h2 className="font-bold text-2xl tracking-tight pb-4">Your Results</h2>
      <p className="text-slate-300 pb-[39px]">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>

      <div
        className=" mx-auto bg-slate-950 text-white p-7 
      rounded-lg shadow-lg border-t-4 border-primary-lime"
      >
        <div className="mb-6">
          <p className="text-slate-300 tracking-wide text-base pb-3">
            Your monthly repayments
          </p>
          <p className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-primary-lime pb-9">
            £1,797.74
          </p>
        </div>

        <hr className="border-slate-700 pb-8" />

        <div>
          <p className="text-slate-300 tracking-wide text-base">
            Total you'll repay over the term
          </p>
          <p className="text-2xl font-bold tracking-wide pt-2">£539,322.94</p>
        </div>
      </div>

      {children}
    </div>
  );
};

export default ResultCard;
