import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "../../constants/common";
import { generateRandomId } from "../../helpers/generateRandomId";
import { IItem } from "../../types/common";

export interface ItemsState {
  activeId: number;
  items: IItem[];
}

const initialState: ItemsState = {
  activeId: INITIAL_STATE[0].id,
  items: INITIAL_STATE,
};

export const itemsSlice = createSlice({
  name: "items",
  initialState: initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.items.push({
        id: generateRandomId(),
        name: action.payload,
        comments: [],
      });
      if (state.items.length === 1) {
        state.activeId = state.items[0].id;
      } else {
        state.activeId = state.items[state.items.length - 1].id;
      }
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      if (state.items.length === 0) {
        state.activeId = 0;
      }
      if (state.activeId === action.payload) {
        state.activeId = state.items[0].id;
      }
    },
    addComment: (
      state,
      action: PayloadAction<{ value: string; color: string }>
    ) => {
      const { value, color } = action.payload;
      const item = state.items.find((item) => item.id === state.activeId);
      if (item) {
        item.comments.push({
          id: generateRandomId(),
          text: value,
          color,
        });
      }
    },
    changeActiveId: (state, action: PayloadAction<number>) => {
      state.activeId = action.payload;
    },
  },
});

export const { addItem, deleteItem, addComment, changeActiveId } =
  itemsSlice.actions;

export const items = itemsSlice.reducer;
