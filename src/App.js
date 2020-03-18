import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";

import { fetchData } from "./actions";

function App(props) {
  const handleClick = () => {
    props.fetchData();
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Update</button>
      {props.isFetching ? <div>Loading...</div> : null}
      {props.media.map(m => (
        <div>{JSON.stringify(m)}</div>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  isFetching: state.isFetching,
  page: state.page,
  media: state.media
});

export default connect(mapStateToProps, { fetchData })(App);
