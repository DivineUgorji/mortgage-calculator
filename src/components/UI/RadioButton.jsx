import React from "react";

const RadioButton = ({ id, label, ...props }) => {
  return (
    <label
      htmlFor={id}
      className={`
        flex items-center gap-3 cursor-pointer rounded-md border p-4 transition
        ${
          props.checked
            ? "bg-primary-lime/15 border-primary-lime"
            : "bg-white border-slate-300"
        }
      `}
    >
      <input
        type="radio"
        id={id}
        {...props}
        className="
          appearance-none w-3 h-3 rounded-full border-2 border-slate-300
          checked:border-primary-lime checked:bg-primary-lime/15
          focus:outline-none"
      />
      <span className="font-semibold text-slate-950">{label}</span>
    </label>
  );
};

export default RadioButton;
