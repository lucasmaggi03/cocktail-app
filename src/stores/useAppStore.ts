import { create } from "zustand";
import { createRecipesSlice, type RecipiesSliceType } from "./recipeSlice";

export const useAppStore = create<RecipiesSliceType>((...a) => ({
    ...createRecipesSlice(...a)
}))