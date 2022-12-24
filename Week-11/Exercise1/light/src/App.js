import "./App.css";

import { connect } from "react-redux";

import { bulbOff, bulbOn } from "./redux/action/lightAction";
import Button from "./Button";

function App(props) {
  const flipLight = () => {
    if (props.light) {
      props.offBulb();
    } else {
      props.onBulb();
    }
  };

  const lightedness = props.light ? "lit" : "dark";
  return (
    <div className={`room ${lightedness}`}>
      the room is {lightedness}
      <br />
      <Button onClick={flipLight}>flip</Button>
    </div>
  );
}

// mapping state to props

const mapStateToProps = (state) => {
  return {
    light: state.bulb.light,
  };
};
// map dispatching actions

const mapDispatchToProps = (dispatch) => {
  return {
    offBulb: () => dispatch(bulbOff()),

    onBulb: () => dispatch(bulbOn()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
