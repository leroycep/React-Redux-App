import React from "react";
import { connect } from "react-redux";

import { fetchData } from "./actions";
import MediaCard from "./components/MediaCard";
import MediaList from "./components/MediaList";
import Pages from "./components/Pages";

function App(props) {
  const handleClick = () => {
    props.fetchData();
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Update</button>
      <Pages />
      {props.isFetching ? <div>Loading...</div> : null}
      <MediaList />
    </div>
  );
}

const mapStateToProps = state => ({
  isFetching: state.isFetching,
  page: state.page
});

export default connect(mapStateToProps, { fetchData })(App);
