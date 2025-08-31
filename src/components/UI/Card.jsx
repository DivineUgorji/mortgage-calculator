import React from "react";

const Card = ({ children, className }) => {
  return (
    <div className={`p-4 shadow-md md:rounded-2xl  ${className}`}>
      {children}
    </div>
  );
};

export default Card;
