import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";

import { updateHello } from "./actions";

function App(props) {
  const handleClick = () => {
    props.updateHello("random citizen!");
  };
  return (
    <div className="App">
      <div>Hello: {props.hello}</div>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

const mapStateToProps = state => ({
  hello: state.hello
});

export default connect(mapStateToProps, { updateHello })(App);
