import React from "react";

const RadioButton = ({ id, label, ...props }) => {
  return (
    <div className="flex gap-4 outline-1 rounded px-4">
      <input type="radio" id={id} {...props} />
      <label htmlFor={id} className="py-3">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
