import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  getCategoriesData,
  getActiveCategory,
  getCategoryIamgeData,
} from "../redux/reducer/catReducer";
import SidePanel from "../components/SidePanel/SidePanel";
import { useNavigate } from "react-router-dom";
import NoData from "../components/NoData/NoData";

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const SidePanelElement = styled.div`
  width: 20%;
`;

const MainElement = styled.div`
  width: 80%;
  height: 500px;
  overflow: auto;
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`;

const Li = styled.li`
  margin: 5px;
`;

const Categories = () => {
  const categories = useSelector(getCategoriesData);
  const navigate = useNavigate();
  const activeCategory = useSelector(getActiveCategory);
  const activeCategoryIMage = useSelector(getCategoryIamgeData);
  const [catImages, setCatImages] = useState([]);

  useEffect(() => {
    if (activeCategoryIMage) {
      setCatImages([...catImages, ...activeCategoryIMage]);
    }
  }, [activeCategoryIMage]);

  useEffect(() => {
    setCatImages([]);
  }, [activeCategory]);

  console.log(catImages);

  useEffect(() => {
    if (categories.length == 0) {
      navigate("/");
    }
  }, [categories]);

  return (
    <Container>
      <SidePanelElement>
        <SidePanel />
      </SidePanelElement>
      <MainElement>
        {catImages.length > 0 ? (
          <Ul>
            {catImages?.map((image) => {
              return (
                <Li key={image.id}>
                  <img
                    src={image.url}
                    style={{ width: "100px", height: "100px" }}
                  />
                </Li>
              );
            })}
          </Ul>
        ) : (
          <NoData />
        )}
      </MainElement>
    </Container>
  );
};

export default Categories;
