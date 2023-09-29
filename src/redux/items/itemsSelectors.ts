import { RootState } from "../store";

export const getItems = (state: RootState) => state.items.items;
export const getActiveId = (state: RootState) => state.items.activeId;
