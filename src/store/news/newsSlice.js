import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  search: "",
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    changeData: (state, action) => {
      state.data = action.payload;
    },
    changeSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeData, changeSearch } = newsSlice.actions;

export default newsSlice.reducer;
