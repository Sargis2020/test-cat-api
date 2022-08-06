import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height:500px
`;

const NoData = () => {
  return <Container>Please choose category</Container>;
};

export default NoData;
