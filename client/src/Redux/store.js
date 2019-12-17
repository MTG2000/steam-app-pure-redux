import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import apiMiddleware from "./middlewares/apiMiddleware";
import rootReducer from "./reducers";

const intialState = {};
const middleware = [thunk, apiMiddleware];

const store = createStore(
  rootReducer,
  intialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //This is required for the devtools extension
  )
);

export default store;
