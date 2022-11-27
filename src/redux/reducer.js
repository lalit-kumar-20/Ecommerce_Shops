import * as types from "./actionType";

const intialState = {
  shops: [],
  shop: {},
  loading: true,
};

const usersReducers = (state = intialState, action) => {
  switch (action.type) {
    case types.GET_SHOPS:
      return {
        ...state,
        shops: action.payload,
        loading: false,
      };
    case types.DELETE_SHOPS:
    case types.ADD_SHOP:
    case types.UPDATE_SHOP:
    case types.FILTER_BY_AREA:
    case types.FILTER_BY_AREA:
      return {
        ...state,
        loading: false,
      };
    case types.GET_SINGLE_SHOP:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default usersReducers;
