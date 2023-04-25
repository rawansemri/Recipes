import * as FOOD_CONSTANTS from "./constants";

export function FetchFood(foodtype) {
  return async (dispatch) => {
    dispatch({
      type: FOOD_CONSTANTS.FOOD_LOADING,
    });
    try {
      if (foodtype == "arabic") {
        const res = await fetch(`https://arabic.free.beeceptor.com/arabic`);
        // const res = await fetch(`http://localhost:8000/Dishes`);
        const Dishes = await res.json();
        dispatch({
          type: FOOD_CONSTANTS.FETCH_FOOD_SUCCESS,
          payload: Dishes.Dishes,
        });
      }else if (foodtype == "turkish") {
        const res = await fetch(`https://turkish.free.beeceptor.com/turkish`);
        // const res = await fetch(`http://localhost:6000/Dishes`);
        const Dishes = await res.json();
        dispatch({
          type: FOOD_CONSTANTS.FETCH_FOOD_SUCCESS,
          payload: Dishes.Dishes,
        });
      }else if (foodtype == "sea") {
        const res = await fetch(`https://seafood.free.beeceptor.com/sea`);
        // const res = await fetch(`http://localhost:5000/Dishes`);
        const Dishes = await res.json();
        dispatch({
          type: FOOD_CONSTANTS.FETCH_FOOD_SUCCESS,
          payload: Dishes.Dishes,
        });
      }
     
    } catch (error) {
      dispatch({ type: FOOD_CONSTANTS.FOOD_ERROR, payload: error });
    }
  };
}

export function GetSingleDish(name, id){
    return async (dispatch, getState) => {
      dispatch({
        type: FOOD_CONSTANTS.FOOD_LOADING,
      });
      try {
        const state = getState();
        const { Dishes } = state.foodReducer;
        const dish = Dishes.find((dish) => dish.id === id);
        if (dish) {
          dispatch({
            type: FOOD_CONSTANTS.FETCH_FOOD_SUCCESS,
            payload: dish,
          });
        } else {
          throw new Error("Dish not found");
        }
      } catch (error) {
        dispatch({ type: FOOD_CONSTANTS.FOOD_ERROR, payload: error });
      }
    };
  }

  // export function AddNewDish(myref, typeofdish){
  //   if (typeofdish == "sea"){
  //     fetch(`https://seafood.free.beeceptor.com/sea`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(myref)
  //   })
  //   }

  //   fetch(`https://${typeofdish}.free.beeceptor.com/${typeofdish}`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(myref)
  //   })
  // }
  
  export function resetReducer(){
    return async (dispatch) => {
      dispatch({
        type: FOOD_CONSTANTS.FOOD_LOADING,
      });
      try {
          dispatch({
            type: FOOD_CONSTANTS.RESET_REDUCER,
            payload: "",
          });

       
      } catch (error) {
        dispatch({ type: FOOD_CONSTANTS.FOOD_ERROR, payload: error });
      }
    };
  }

  export function AddNewDish(myref, typeofdish){
    return async (dispatch) => {
      dispatch({
        type: FOOD_CONSTANTS.FOOD_LOADING,
      });
      try {
        if (typeofdish == "sea"){
              fetch(`https://seafood.free.beeceptor.com/sea`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(myref)
            })
            }
        else fetch(`https://${typeofdish}.free.beeceptor.com/${typeofdish}`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(myref)
            })
       
      } catch (error) {
        dispatch({ type: FOOD_CONSTANTS.FOOD_ERROR, payload: error });
      }
    };
  }