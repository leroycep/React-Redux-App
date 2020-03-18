import React, { useRef } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { fetchData } from "../actions";

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SearchInput = styled.input``;

const SearchButton = styled.button``;

function Pages(props) {
  const searchField = useRef(null);

  const handleSubmit = ev => {
    ev.preventDefault();
    props.fetchData(1, searchField.current.value);
  };

  return (
    <Form className={props.className} onSubmit={handleSubmit}>
      <SearchInput ref={searchField} type="text" defaultValue={props.search} />
      <SearchButton>Search</SearchButton>
    </Form>
  );
}

const mapStateToProps = state => {
  return {
    search: state.search
  };
};

export default connect(mapStateToProps, { fetchData })(Pages);
