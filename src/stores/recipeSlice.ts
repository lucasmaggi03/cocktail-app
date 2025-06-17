import type { StateCreator } from "zustand";
import {
  getCategories,
  getRecipeById,
  getRecipies,
} from "../services/RecipeService";
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types";

export type RecipiesSliceType = {
  categories: Categories;
  drinks: Drinks;
  selectedRecipe: Recipe;
  modal: boolean;
  fetchCategories: () => void;
  searchRecipies: (SearchFilter: SearchFilter) => Promise<void>;
  selectRecipe: (id: Drink["idDrink"]) => Promise<void>;
  closeModal: () => void;
};

export const createRecipesSlice: StateCreator<RecipiesSliceType> = (set) => ({
  categories: { drinks: [] },
  drinks: {
    drinks: [],
  },
  selectedRecipe: {} as Recipe,
  modal: false,
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
    const selectedRecipe = await getRecipeById(id);
    set({
      selectedRecipe,
      modal: true,
    });
  },
  closeModal: ()=>{
    set({
      modal:false,
      selectedRecipe: {} as Recipe
    })
  }
});
