import React from "react";

const InputField = ({
  id,
  label,
  prefix,
  suffix,
  prefixBg = "bg-slate-100",
  suffixBg = "bg-slate-100",
  ...delegated
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="pb-1">
          {label}
        </label>
      )}
      <div className="flex gap-2 items-center rounded-md shadow-sm border border-slate-300  focus-within:border-primary-lime focus-within:bg-neutral-white overflow-hidden group">
        {prefix && (
          <span
            className={`inline-flex text-slate-600  font-semibold text-lg self-stretch px-3 py-3 ${prefixBg} group-focus-within:bg-primary-lime`}
          >
            {prefix}
          </span>
        )}

        <input
          id={id}
          {...delegated}
          className="w-full flex-1 px-3 py-3 font-semibold text-lg focus:outline-none tracking-wider"
        />

        {suffix && (
          <span
            className={`inline-flex  self-stretch px-3 py-3 
              font-semibold text-lg text-slate-600 
              hover:suffixBg-primary-lime ${suffixBg} group-focus-within:bg-primary-lime`}
          >
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
};

export default InputField;
