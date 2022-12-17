import React from "react";

export const RundedButton = (props) => {
  return (
    <button type="button" onClick={props.onClick} className="btn btn-rounded">
      {props.children}
    </button>
  );
};
