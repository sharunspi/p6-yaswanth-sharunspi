import React from "react";

function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#E3856B] rounded-md text-[#EDCBD2] px-4 py-1 ml-4 hover:bg-[#d38671]"
    >
      {children}
    </button>
  );
}

export default Button;
