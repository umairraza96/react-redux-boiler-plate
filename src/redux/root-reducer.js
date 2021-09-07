import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import example from "./example/reducer";

//persist config for redux persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: [], //add strings to persist
};

const rootReducer = combineReducers({
  example,
});

export default persistReducer(persistConfig, rootReducer);
