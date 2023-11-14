import { Provider } from "react-redux";
import { useState } from "react";
import { configureStore } from "@reduxjs/toolkit";
import projetoReducer from "./store/reducers/projeto";
import pessoaReducer from "./store/reducers/pessoa";
import ListComponent from "./components/ListComponent";
import FormComponent from "./components/FormComponent";
import { listarTodosProjetos } from "./services/httpservices";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

const store = configureStore({
  reducer: { projeto: projetoReducer, pessoaReducer: pessoaReducer },
});

function App() {
  const [isListing, setIsListing] = useState(true);
  const [editingProjeto, setEditingProjeto] = useState(null);
  const editProjetoHandler = (projeto) => {
    setEditingProjeto(projeto);
    console.log(projeto);
    setIsListing(false);
  };

  return (
    <Provider store={store}>
      <div className="App">
        <>
          {!isListing && (
            <FormComponent closeFunction={() => setIsListing(true)} />
          )}
          {isListing && <ListComponent executeFunction={editProjetoHandler} />}
        </>
      </div>
    </Provider>
  );
}

export default App;
