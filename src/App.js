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

const funcionarios = [
  { id: 1, nome: "ZE", status: "EM ANDAMENTO", risco: "ALTo" },
  { id: 2, nome: "ZE MANE", status: "EM ANDAMENTO", risco: "ALTo" },
];

function App() {
  const [isListing, setIsListing] = useState(true);
  const [editingProjeto, setEditingProjeto] = useState(null);
  const editProjetoHandler = (projeto) => {
    setEditingProjeto(projeto);
    console.log(projeto);
    //setIsListing(false);
  };
  const deleteProjetoHandler = (id, option) => {
    console.log(id);
    console.log(option);
    // if (option === "NAO") return;
    // console.log(id);
    //setIsListing(false);
  };

  return (
    <Provider store={store}>
      <div className="App">
        <>
          {!isListing && <FormComponent />}
          {isListing && (
            <ListComponent
              persons={funcionarios}
              executeFunction={editProjetoHandler}
              deleteFunction={deleteProjetoHandler}
            />
          )}
        </>
      </div>
    </Provider>
  );
}

export default App;
