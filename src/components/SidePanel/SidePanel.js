import React, { useEffect, useState } from "react";
import {
  getActiveCategory,
  getCatCategoriesImage,
  getCategoriesData,
  setActiveCategory,
} from "../../redux/reducer/catReducer";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Btn from "../Button/Btn";



const Ul = styled.ul`
  list-style-type: none;
`;

const Li = styled.li`
  padding: 5px;
  width: 100px;
  text-align: center;
  cursor: pointer;
`;

const SidePanel = () => {
  const categories = useSelector(getCategoriesData);
  const dispatch = useDispatch();
  const activeCategory = useSelector(getActiveCategory);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    setLimit(10);
    setPage(0);
  }, [activeCategory]);

  useEffect(() => {
    if (activeCategory) {
      dispatch(
        getCatCategoriesImage({ limit, page, categoryId: activeCategory?.id })
      );
    }
  }, [activeCategory, page]);

  const chooseCategory = (category) => {
    dispatch(setActiveCategory(category));
  };

  return (
    <>
      <Ul>
        {categories?.map((category) => {
          return (
            <Li
              key={category.id}
              onClick={() => chooseCategory(category)}
              style={{
                background: activeCategory?.id == category.id ? "cadetblue" : "",
              }}
            >
              {category.name}
            </Li>
          );
        })}
      </Ul>
      {activeCategory && <div style={{marginLeft:"54px"}}>
          <Btn text="Load More" onClick={loadMore} />
          </div>}
    </>
  );
};

export default SidePanel;
