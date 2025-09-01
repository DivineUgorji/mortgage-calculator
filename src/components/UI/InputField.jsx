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
    <div className="flex flex-col gap-1 pb-6">
      {label && (
        <label htmlFor={id} className="pb-2">
          {label}
        </label>
      )}
      <div className="flex gap-4 items-center rounded-md shadow-sm border border-slate-300  focus-within:border-primary-lime overflow-hidden group">
        {prefix && (
          <span
            className={`inline-flex text-slate-600  self-stretch px-3 py-2 ${prefixBg} group-focus-within:bg-primary-lime`}
          >
            {prefix}
          </span>
        )}

        <input
          id={id}
          {...delegated}
          className="w-full flex-1 px-3 py-2 font-semibold focus:outline-none"
        />

        {suffix && (
          <span
            className={`inline-flex  self-stretch px-3 py-2 text-slate-600 text-sm  hover:suffixBg-primary-lime ${suffixBg} group-focus-within:bg-primary-lime`}
          >
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
};

export default InputField;
