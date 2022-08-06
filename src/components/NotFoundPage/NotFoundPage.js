import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components"
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: aliceblue;
`;

const P = styled.p`
 margin-right:10px
`
const NotFoundPage = () => {
    return (
        <Container>
         <P>This page not found   </P>
         <Link to={"/"}>Go to home page</Link>
        </Container>
    )
}

export default NotFoundPage
