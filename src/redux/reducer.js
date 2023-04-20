import * as FOOD_CONSTANTS from "./constants";

const initState = {
  Dishes: [],
  loading: false,
  error: null,
};
export function foodReducer(state = initState, action) {
  switch (action.type) {
    case FOOD_CONSTANTS.FOOD_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FOOD_CONSTANTS.FOOD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FOOD_CONSTANTS.FETCH_FOOD_SUCCESS:
      return {
        ...state,
        loading: false,
        Dishes: action.payload,
      };
      case FOOD_CONSTANTS.RESET_REDUCER:
          return initState;
      
    default:
      return state;
  }
}
