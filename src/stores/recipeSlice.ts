import type { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"

type Category = {

}

export type RecipiesSliceType = {
    categories: Category[],
    fetchCategories: () => void
}

export const createRecipesSlice : StateCreator<RecipiesSliceType> = ( ) =>({
    categories: [],
    fetchCategories: ( ) =>{
        getCategories()
    }
})