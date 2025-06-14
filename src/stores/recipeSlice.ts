import type { StateCreator } from "zustand";
import {
  getCategories,
  getRecipeById,
  getRecipies,
} from "../services/RecipeService";
import type { Categories, Drink, Drinks, SearchFilter } from "../types";

export type RecipiesSliceType = {
  categories: Categories;
  drinks: Drinks;
  fetchCategories: () => void;
  searchRecipies: (SearchFilter: SearchFilter) => Promise<void>;
  selectRecipe: (id: Drink["idDrink"]) => Promise<void>;
};

export const createRecipesSlice: StateCreator<RecipiesSliceType> = (set) => ({
  categories: { drinks: [] },
  drinks: {
    drinks: [],
  },
  fetchCategories: async () => {
    const categories = await getCategories();
    set({
      categories,
    });
  },

  searchRecipies: async (filters) => {
    const drinks = await getRecipies(filters);
    set({
      drinks,
    });
  },
  selectRecipe: async (id) => {
    const selectRecipie = await getRecipeById(id);
    console.log(selectRecipie);
  },
});
