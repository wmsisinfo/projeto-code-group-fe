import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import projetoReducer from "./store/reducers/projeto";
import pessoaReducer from "./store/reducers/pessoa";
import FormComponent from "./components/FormComponent";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const store = configureStore({
  reducer: { projeto: projetoReducer, pessoaReducer: pessoaReducer },
});
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
