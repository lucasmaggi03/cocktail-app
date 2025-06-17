import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, type RecipiesSliceType } from "./recipeSlice";
import {type FavortiesSliceType, createFavoritesSlice} from './favoritesSlice'
import { type NotificationSliceType, createNotificationSlice } from "./notificationSlice";

export const useAppStore = create<RecipiesSliceType & FavortiesSliceType & NotificationSliceType>()(devtools((...a) => ({
  ...createRecipesSlice(...a),
  ...createFavoritesSlice(...a),
  ...createNotificationSlice(...a),
})));
