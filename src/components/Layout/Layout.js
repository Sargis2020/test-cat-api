import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/logo.ico"


const Container = styled.div``;
const Header = styled.div`
width: 100%;
padding: 15px;
background: darkseagreen;
display: flex;
justify-content: center;
align-items: center;

`;
const Main = styled.div``;
const Footer = styled.div`
width: 100%;
padding: 15px;
background: darkseagreen;
position:absolute;
bottom:0;
display: flex;
justify-content: center;
align-items: center;
color:#fff
`;

const Img = styled.img`
 width:20px;
 heigth:20px
`
const P = styled.p`
 color:#fff;
 margin-left: 8px
`

const Layout = () => {
  return (
    <Container>
      <Header>
          <Img src={logo}/>
          <P>The Cat Ai</P>
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer>Created By @Sargis Harutyunyan</Footer>
    </Container>
  );
};

export default Layout;
