import React from "react";

const ResultCard = ({ children, className }) => {
  return (
    <div className={`text-neutral-white ${className}`}>
      <h2 className="font-bold pb-4">Your Results</h2>
      <p className="text-slate-300 pb-[40px]">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>

      <div className=" mx-auto bg-slate-950 text-white p-6 rounded-lg shadow-lg border-t-4 border-primary-lime">
        <div className="mb-6">
          <p className="text-slate-300 text-lg pb-2">Your monthly repayments</p>
          <p className="text-4xl font-bold text-primary-lime pb-8">£1,797.74</p>
        </div>

        <hr className="border-slate-700 pb-8" />

        <div>
          <p className="text-slate-300 text-lg">
            Total you'll repay over the term
          </p>
          <p className="text-2xl font-bold pt-2">£539,322.94</p>
        </div>
      </div>

      {children}
    </div>
  );
};

export default ResultCard;
