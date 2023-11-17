import { Provider } from "react-redux";
import { useState } from "react";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import { configureStore } from "@reduxjs/toolkit";
import projetoReducer from "./store/reducers/projeto";
import pessoaReducer from "./store/reducers/pessoa";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

const store = configureStore({
  reducer: { projeto: projetoReducer, pessoaReducer: pessoaReducer },
});

function App() {
  const [isReady, setIsReady] = useState(true);
  return (
    <Provider store={store}>
      <AppWrapper />;
    </Provider>
  );
}

export default App;
