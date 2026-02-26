import { IGeneral } from "@/interfaces/general";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IGeneral = {
  drawer: {
    cart: false,
    filter: false,
    category: false,
    sidebar: false,
    search: false,
  },
};

type IPayload = {
  payload: any;
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setInit: (state, { payload }: IPayload) => {
      const { categories, carts } = payload;

      return {
        ...state,
        categories,
        carts,
      };
    },
    openDrawer: (state, { payload }: IPayload) => {
      const { type, open } = payload;

      return {
        ...state,
        drawer: {
          cart: false,
          filter: false,
          category: false,
          sidebar: false,
          search: false,
          [type]: open,
        },
      };
    },
  },
});

export const generalReducer = generalSlice.reducer;

export const { setInit, openDrawer } = generalSlice.actions;
