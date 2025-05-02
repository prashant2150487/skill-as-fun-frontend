import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/User";

interface UserState {
  user: User | null;
  token: string;
  isAuthenticated: boolean;
}
const initialState: UserState = {
  user: {
    id: "",
    name: "",
    email: "",
  },
  token: "",
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload.user;
      state.token = action.payload.token || localStorage.getItem("Token") || "";
      state.isAuthenticated = !!(action.payload.user && state.token);
    },
    logout: (state) => {
      state.user = null;
      state.token = "";
      state.isAuthenticated = false;
      localStorage.removeItem("Token");
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
