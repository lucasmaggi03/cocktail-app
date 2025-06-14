import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, type RecipiesSliceType } from "./recipeSlice";

export const useAppStore = create<RecipiesSliceType>()(devtools((...a) => ({
  ...createRecipesSlice(...a),
})));
