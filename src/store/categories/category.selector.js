

//input selectors and output selectors

import {createSelector} from "reselect";

const selectCategoryReducer = (state)=> state.categories

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice)=> categoriesSlice.categories
)
export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories)=> categories.reduce(
        (acc, { title, items }) => {
            acc[title.toLowerCase()] = items;
            return acc;
        },
        {}
    )
)

//This selector is to get the loading state and activate the spinner
export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice)=>categoriesSlice.isLoading
)



//These are memozied selectors.

//Basically its a means of chaching so that if the valaue of a state doesn't change,
//There is no need to rerender.

//IT IS VERY USEFUL. ALWAYS USE IT!!
