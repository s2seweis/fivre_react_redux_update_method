import categoriesTypes from './categories.types';

export const addCategoryStart = categoryData => ({
  type: categoriesTypes.ADD_NEW_CATEGORY_START,
  payload: categoryData
});

export const fetchCategoriesStart = (filters={}) => ({
  type: categoriesTypes.FETCH_CATEGORIES_START,
  payload: filters
});

// export const setCategories = categories => ({
//   type: categoriesTypes.SET_CATEGORIES,
//   payload: categories
// });

export const deleteCategoryStart = categoryID => ({
  type: categoriesTypes.DELETE_CATEGORY_START,
  payload: categoryID
});

export const updateCategoryStart = categoryID => ({
  type: categoriesTypes.UPDATE_CATEGORY_START,
  payload: categoryID
});

export const fetchCategoryStart = categoryID => ({
  type: categoriesTypes.FETCH_CATEGORY_START,
  payload: categoryID
});

export const setCategory = category => ({
  type: categoriesTypes.SET_CATEGORY,
  payload: category
});

export const updateCategory = (data) => ({
  type: "UPDATE_CATEGORY",
  payload: data,
});

export const setCategoriesLoading = (message) => ({
  type: "SET_CATEGORIES_LOADING",
  payload: message,
});

export const setCategories = (data) => ({
  type: "SET_CATEGORIES",
  payload: data,
});