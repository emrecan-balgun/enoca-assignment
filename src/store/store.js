import { configureStore } from "@reduxjs/toolkit";

import newsReducer from "../store/news/newsSlice";

export const store = configureStore({
  reducer: { news: newsReducer },
});
