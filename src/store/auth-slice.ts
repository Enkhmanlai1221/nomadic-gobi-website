import { createSlice } from "@reduxjs/toolkit";
import { IAuth } from "@/interfaces/auth";

const initialState: IAuth = {
  // user: null,
  accessToken: null,
  sessionScope: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (
      state,
      {
        payload,
      }: {
        payload: {
          accessToken: string;
          sessionScope: string;
        };
      },
    ) => ({ ...state, accessToken: payload.accessToken }),
    logout: () => {
      return initialState;
    },
    authMe: (state, { payload }: { payload: any }) => ({
      ...state,
      user: payload,
    }),
  },
});

export const authReducer = authSlice.reducer;

export const { authMe, setToken, logout } = authSlice.actions;
