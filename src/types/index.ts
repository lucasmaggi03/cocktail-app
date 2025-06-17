import { z } from "zod";
import {
  CategoriesAPIResponseSchema,
  DrinkAPIRespones,
  DrinksAPIRespones,
  RecipeAPIResponseSchema,
  SearchFilterSchema,
} from "../utils/recipies-schema";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type SearchFilter = z.infer<typeof SearchFilterSchema>;
export type Drinks = z.infer<typeof DrinksAPIRespones>;
export type Drink = z.infer<typeof DrinkAPIRespones>;
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>;
