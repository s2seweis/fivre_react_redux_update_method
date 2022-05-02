import categoriesTypes from './categories.types';
import categoryTypes from './categories.types';

const INITIAL_STATE = {
  categories: [],
  category: {},
};

const categoriesReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case categoryTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
      case categoriesTypes.SET_CATEGORY:
        return {
        ...state,
        category: action.payload
      }
      case categoriesTypes.UPDATE_CATEGORY:
      const current = state.categories.find(
        (cat) => cat.categoryId === action.payload.categoryId
      );
      current.category.categoryName = action.payload.data.categoryName;
      // current.post.category = action.payload.data.category;
      // current.post.description = action.payload.data.description;
      state = {
        ...state,
        categories: state.categories.map((cat) =>
          cat.categoryId === action.payload.categoryId ? current : cat
        ),
      };
      return state;
    default:
      return state;
  }
};

export default categoriesReducer;