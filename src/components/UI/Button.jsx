import React from "react";

const Button = ({ icon: Icon, children, className, ...props }) => {
  return (
    <div>
      <button
        className={` rounded-4xl bg-primary-lime text-slate-900 cursor-pointer ${className}`}
        {...props}
      >
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-5 h-5" />}
          {children}
        </div>
      </button>
    </div>
  );
};

export default Button;
