import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Btn from "../components/Button/Btn";
import { getCatCategories, getCategoriesData } from "../redux/reducer/catReducer";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: aliceblue;
`;

const Home = () => {
  const  dispatch = useDispatch()
  const categories = useSelector(getCategoriesData)
  const navigate = useNavigate()


  console.log(categories)
  const getCategories = () => {
    dispatch(getCatCategories())
  };

  useEffect(()=>{
     if(categories.length>0){
         navigate("/categories")
     }
  },[categories])

  return (
    <Container>
      <Btn text="Get Categories" onClick={getCategories} />
    </Container>
  );
};

export default Home;
