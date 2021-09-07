import { SET_EXAMPLE, SET_EXAMPLE_ARR, SET_EXAMPLE_BOOL, SET_EXAMPLE_OBJ, TOGGLE_EXAMPLE_BOOL } from "./action.types";

export const setExample = (data) => ({ type: SET_EXAMPLE, payload: data });
export const setExampleBool = (data) => ({ type: SET_EXAMPLE_BOOL, payload: data });
export const setExampleObj = (data) => ({ type: SET_EXAMPLE_OBJ, payload: data });
export const setExampleArr = (data) => ({ type: SET_EXAMPLE_ARR, payload: data });
export const toggleBool = () => ({ type: TOGGLE_EXAMPLE_BOOL });
