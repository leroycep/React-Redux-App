import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";

import { updateHello, fetchData } from "./actions";

function App(props) {
  const handleClick = () => {
    props.updateHello("random citizen!");
    props.fetchData();
  };
  return (
    <div className="App">
      <div>Hello: {props.hello}</div>
      <button onClick={handleClick}>Update</button>
      {props.isFetching ? <div>Loading...</div> : null}
      {props.media.map(m => (
        <div>{JSON.stringify(m)}</div>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  hello: state.hello,
  isFetching: state.isFetching,
  page: state.page,
  media: state.media
});

export default connect(mapStateToProps, { updateHello, fetchData })(App);
