import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { fetchData } from "../actions";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const PageButton = styled.button``;

const CurrentPage = styled.div``;

function Pages(props) {
  const handlePageTurn = pageNum => ev => {
    ev.preventDefault();
    props.fetchData(pageNum);
  };
  return (
    <Container className={props.className}>
      <PageButton
        onClick={handlePageTurn(props.currentPage - 1)}
        disabled={props.currentPage <= 1}
      >
        {"<"}
      </PageButton>

      <CurrentPage>{props.currentPage}</CurrentPage>

      <PageButton
        onClick={handlePageTurn(props.currentPage + 1)}
        disabled={!props.hasNextPage}
      >
        {">"}
      </PageButton>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    currentPage: state.pageInfo.currentPage,
    hasNextPage: state.pageInfo.hasNextPage
  };
};

export default connect(mapStateToProps, { fetchData })(Pages);
