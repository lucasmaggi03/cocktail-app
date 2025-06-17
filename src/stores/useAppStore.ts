import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, type RecipiesSliceType } from "./recipeSlice";
import {type FavortiesSliceType, createFavoritesSlice} from './favoritesSlice'

export const useAppStore = create<RecipiesSliceType & FavortiesSliceType>()(devtools((...a) => ({
  ...createRecipesSlice(...a),
  ...createFavoritesSlice(...a),
})));
