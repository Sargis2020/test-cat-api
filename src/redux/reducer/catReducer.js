import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategories, getCategoriesImage } from "../api/catApi";
const initialState = {
  categories: [],
  categoryImages:[],
  activeCategory : null
};
//Api
export const getCatCategories = createAsyncThunk("get-cat-list", async () => {
  const response = await getCategories();
  return response.data;
});

export const getCatCategoriesImage = createAsyncThunk("get-cat-category-image", async (data) => {
    const response = await getCategoriesImage(data);
    return response.data;
  });
  

export const catSlice = createSlice({
  name: "cat",
  initialState,
  reducers: {
    setCategoriesList: (state, action) => {
      state.categories = action.payload;
    },
    setActiveCategory : (state, action) => {
       state.activeCategory = action.payload
    },
    setCategoriesImageList: (state, action) => {
        state.categoryImages = action.payload;
      },
  },
  extraReducers: (builder) => {
    builder.addCase(getCatCategories.fulfilled, (state, action) => {
      catSlice.caseReducers.setCategoriesList(state, action);
    });
    builder.addCase(getCatCategoriesImage.fulfilled, (state, action) => {
        catSlice.caseReducers.setCategoriesImageList(state, action);
      });
  },
});

export const {setCategoriesList, setCategoriesImageList, setActiveCategory} = catSlice.actions;

export const getCategoriesData = (state) => state.cat?.categories;
export const getActiveCategory = (state) => state.cat?.activeCategory;
export const getCategoryIamgeData = (state) => state.cat?.categoryImages;

export default catSlice.reducer;
