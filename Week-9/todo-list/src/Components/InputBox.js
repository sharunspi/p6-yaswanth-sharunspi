import React from "react";

function InputBox({ onChangeText, value }) {
  return (
    <input
      type={"text"}
      name="input"
      value={value}
      onChange={onChangeText}
      className="bg-[#EDCBD2] text-[#80C4B7] text-2xl "
    />
  );
}

export default InputBox;
