import React from "react";

function Button({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#E3856B] rounded-md text-[#EDCBD2]"
    >
      Add new
    </button>
  );
}

export default Button;
