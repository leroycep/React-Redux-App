import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchData } from "./actions";
import MediaCard from "./components/MediaCard";
import MediaList from "./components/MediaList";
import Pages from "./components/Pages";
import Search from "./components/Search";

function App(props) {
  useEffect(() => {
    props.fetchData();
  }, []);

  return (
    <div className="App">
      <Search />
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
