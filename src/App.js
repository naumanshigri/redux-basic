import "./App.css";

import { connect } from "react-redux";
import {
  increateCounter,
  decreaseCounter,
} from "./redux/Counter/counter.action";

function App(props) {
  return (
    <div className="App">
      <div>Count:{props.count}</div>
      <button onClick={() => props.increateCounter()}>Increate Count </button>
      <button onClick={() => props.decreaseCounter()}>Decrease Count </button>
    </div>
  );
}

const mapStateProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increateCounter: () => dispatch(increateCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};

export default connect(mapStateProps, mapDispatchToProps)(App);
