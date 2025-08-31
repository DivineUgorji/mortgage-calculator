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
    <div className="flex flex-col gap-1 pb-4">
      {label && (
        <label htmlFor={id} className="pb-3">
          {label}
        </label>
      )}
      <div className="flex gap-4 items-center rounded-md shadow-sm border-2 border-slate-300  focus-within:border-primary-lime">
        {prefix && (
          <span
            className={`inline-flex text-slate-600 items-center px-3 py-2 ${prefixBg}`}
          >
            {prefix}
          </span>
        )}

        <input
          id={id}
          {...delegated}
          className="w-full flex-1 px-3 py-2 focus:outline-none"
        />

        {/* {sufix && (
          <span className={`inline-flex text-slate-600 ${suffixBg}`}>
            {prefix}
          </span>
        )} */}

        {suffix && (
          <span
            className={`inline-flex items-center px-3 py-2 text-slate-600 text-sm hover:suffixBg-primary-lime ${suffixBg}`}
          >
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
};

export default InputField;
