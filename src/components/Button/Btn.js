import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
  border: none;
  outline: none;
  background: cadetblue;
  color: #fff;
  cursor: pointer;
`;

const Btn = ({ text, onClick }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default Btn;
