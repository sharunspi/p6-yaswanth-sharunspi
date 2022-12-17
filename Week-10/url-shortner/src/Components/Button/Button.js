import React from "react";

export const Button = (props) => {
  return (
    <button type="button" onClick={props.onClick} className="btn btn-normal">
      {props.children}
    </button>
  );
};
