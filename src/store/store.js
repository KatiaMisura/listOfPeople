import { configureStore } from "@reduxjs/toolkit";
import mojSlice from "./slice/mojSlice";

export default configureStore({
  reducer: {
    counter: mojSlice,
  },
});
