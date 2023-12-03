import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state: { mode: string }) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },

    setLogin: (
      state: { user: unknown; token: unknown },
      action: { payload: { user: null; token: null } }
    ) => {
      state.user = action.payload?.user || null;
      state.token = action.payload?.token || null;
    },
    setLogout: (state: { user: null; token: null }) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setMode, setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
