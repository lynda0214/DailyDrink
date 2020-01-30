import * as actionTypes from '../actions/types';

const initialState = {
    drinks: [
        {
            title: "珍珠奶茶",
            price: 50,
            addition: '微糖去冰',
        }
    ]
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
      case actionTypes.CREATE: {
          const newDrink = {
              title: action.title,
              price: action.price,
              addition: action.addition,
          }
          return {
              drinks: [...state.drinks, newDrink]
          }
      }
      case actionTypes.EDIT: {
          const updatedArray = [...state.drinks];
          updatedArray[action.id].title = action.title;
          updatedArray[action.id].price = action.price;
          updatedArray[action.id].addition = action.addition;
          return {
              drinks: updatedArray
          }
      }
      case actionTypes.DELETE: {
          const updatedArray = [...state.drinks];
          updatedArray.splice(action.id, 1);
          return {
              drinks: updatedArray
          }
      }
      default:
          return state;

  }
};

export default reducer;