import initialState from "../initialState";
import { SET_EXAMPLE, SET_EXAMPLE_ARR, SET_EXAMPLE_BOOL, SET_EXAMPLE_OBJ, TOGGLE_EXAMPLE_BOOL } from "./action.types";

const exampleReducer = (state = initialState.example, action) => {
  switch (action.type) {
    case SET_EXAMPLE:
      return { ...action.payload };
    case SET_EXAMPLE_ARR:
      return { ...state, arr: action.payload };
    case SET_EXAMPLE_OBJ:
      return { ...state, obj: action.payload };
    case SET_EXAMPLE_BOOL:
      return { ...state, bool: action.payload };
    case TOGGLE_EXAMPLE_BOOL:
      return { ...state, bool: !state.bool };
    default:
      return { ...state };
  }
};

export default exampleReducer;
