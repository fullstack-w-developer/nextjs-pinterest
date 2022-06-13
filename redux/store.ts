import { configureStore } from "@reduxjs/toolkit";
import User from "./User";

const Store = configureStore({
  reducer: {
    user: User,
  },
});


export default Store