import React from "react";

function Button(props) {
  return (
    <button
      type="button"
      style={{
        cursor: "pointer",
        padding: "4px 8px 4px 8px",
        backgroundColor: "rgb(20, 181, 192)",
      }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
