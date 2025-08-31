import React from "react";

const Button = ({ icon: Icon, children, className, ...props }) => {
  return (
    <div className="pt-4">
      <button
        className={`flex items-center justify-center gap-2 rounded-2xl px-3 py-2 
    bg-primary-lime text-slate-900 cursor-pointer ${className}`}
        {...props}
      >
        {Icon && <Icon className="w-5 h-5" />}
        {children}
      </button>
    </div>
  );
};

export default Button;
