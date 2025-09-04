import React from "react";

const InputField = ({
  id,
  label,
  error,
  prefix,
  suffix,
  prefixBg = "bg-slate-100",
  suffixBg = "bg-slate-100",
  ...delegated
}) => {
  return (
    <div className="flex flex-col gap-1 relative">
      {label && (
        <label htmlFor={id} className="pb-1">
          {label}
        </label>
      )}
      <div
        className={`flex gap-2 items-center rounded-md 
          shadow-sm border overflow-hidden group 
          ${
            error
              ? "border-primary-red"
              : "border-slate-300 focus-within:border-primary-lime"
          }`}
      >
        {prefix && (
          <span
            className={`inline-flex text-slate-600 font-semibold text-lg self-stretch px-3 py-3
      ${
        error
          ? "bg-primary-red text-white"
          : `${prefixBg} group-focus-within:bg-primary-lime`
      }
    `}
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
            className={`inline-flex self-stretch px-3 py-3 font-semibold text-lg
      ${
        error
          ? "bg-primary-red text-white"
          : `${suffixBg} text-slate-600 group-focus-within:bg-primary-lime`
      }
    `}
          >
            {suffix}
          </span>
        )}
      </div>
      {error && (
        <p className="absolute -bottom-5 left-0 text-sm text-primary-red">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;
