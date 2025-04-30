import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/User";

interface UserState {
  userInfo: User | null;
}
const initialState: UserState = {
  userInfo: JSON.parse(localStorage.getItem("userInfo") || "null"),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
