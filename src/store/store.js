import { createStore } from "redux";
import { persistCombineReducers, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import * as reducers from "../reducers";

const persistConifg = {
  version: 1,
  key: "root",
  storage,
};

const rootReducer = persistCombineReducers(persistConifg, { ...reducers });

const store = createStore(
  rootReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistedStore = persistStore(store);

export default { store, persistedStore };
