import React from "react";

import Button from "./Button";
import { connect } from "react-redux";

import { addStep, resetStep } from "../redux/action/stepAction";

function StepCounter(props) {
  return (
    <div>
      <h2 className="mt-2">You've walked {props.steps} steps today!</h2>
      <div className="mt-2">
        <Button variant="container" onClick={props.add}>
          Add a Step
        </Button>
      </div>
      <div className="mt-2">
        <Button variant="border" onClick={props.reset}>
          Reset steps
        </Button>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    steps: state.stepper.steps,
  };
};
// map dispatching actions

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch(addStep()),

    reset: () => dispatch(resetStep()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StepCounter);
