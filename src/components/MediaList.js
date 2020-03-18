import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import MediaCard from "./MediaCard";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .item {
    max-width: 20%;
  }
`;

function MediaList(props) {
  return (
    <Container>
      {props.media.map(m => (
        <MediaCard className="item" media={m} />
      ))}
    </Container>
  );
}

const mapStateToProps = state => ({
  media: state.media
});

export default connect(mapStateToProps, {})(MediaList);
