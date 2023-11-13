import { useState } from "react";
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import projetoReducer from "./store/reducers/projeto";
import FormComponent from "./components/FormComponent";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

//const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const store = configureStore({ reducer: { projeto: projetoReducer } });
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FormComponent />
      </div>
    </Provider>
  );
}

export default App;
