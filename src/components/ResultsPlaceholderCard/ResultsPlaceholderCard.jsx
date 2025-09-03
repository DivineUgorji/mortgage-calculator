import React from "react";
import placeholderIllustration from "../../assets/images/illustration-empty.svg";
const ResultsPlaceholderCard = () => {
  return (
    <div className="bg-slate-900 ">
      <div className="grid place-items-center">
        <img
          src={placeholderIllustration}
          alt="mortgage calcultor illustration"
          className="pt-[116px]"
        />
        <h2 className="font-bold text-2xl text-neutral-white pt-4">
          Results shown here
        </h2>
        <p className="text-slate-300 text-base text-center pt-4">
          Complete the form and click “calculate repayments” to see what your
          monthly repayments would be.
        </p>
      </div>
    </div>
  );
};

export default ResultsPlaceholderCard;
