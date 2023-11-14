import { Provider } from "react-redux";
import { useState } from "react";
import { configureStore } from "@reduxjs/toolkit";
import projetoReducer from "./store/reducers/projeto";
import pessoaReducer from "./store/reducers/pessoa";
import ListComponent from "./components/ListComponent";
import FormComponent from "./components/FormComponent";
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
  const [isEditing, setIsEditing] = useState(true);
  const [editingProjeto, setEditingProjeto] = useState(null);
  const editProjetoHandler = (projeto) => {
    setEditingProjeto(projeto);
    console.log(projeto);
    setIsEditing(true);
  };
  const deleteProjetoHandler = (id) => {};

  return (
    <Provider store={store}>
      <div className="App">
        {!isEditing && (
          <ListComponent
            persons={funcionarios}
            executeFunction={editProjetoHandler}
          />
        )}
        {isEditing && <FormComponent />}
      </div>
    </Provider>
  );
}

export default App;
