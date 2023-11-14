import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useState } from "react";

const ListComponent = (props) => {
  const [selectedId, setSelectedId] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const options = {
    title: "Confirma ?",
    message: "Confirma a exclusão ?",
    buttons: [
      {
        label: "Sim",
        onClick: () => props.executeFunction(selectedId, "SIM"),
      },
      {
        label: "Não",
        onClick: () => props.executeFunction(selectedId, "NAO"),
      },
    ],
    closeOnEscape: true,
    closeOnClickOutside: true,
    keyCodeForClose: [8, 32],
    willUnmount: () => {},
    afterClose: () => {},
    onClickOutside: () => {},
    onKeypress: () => {},
    onKeypressEscape: () => {},
    overlayClassName: "overlay-custom-class-name",
  };

  const editHandler = (item) => {
    props.executeFunction(item);
  };

  const deleteHandler = (item) => {
    console.log(item.id);
    setSelectedId(item.id);
    confirmAlert(options);
    //
  };

  return (
    <>
      <div className="container-lg" style={{ marginTop: "100px" }}>
        <h2>Lista dos Projetos</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Risco</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {props.persons.map((element) => {
              return (
                <tr key={element.id}>
                  <td>{element.id}</td>
                  <td>{element.name}</td>
                  <td>{element.risco}</td>
                  <td>{element.status}</td>
                  <td>
                    <i
                      className="bi bi-pencil-square"
                      onClick={() => editHandler(element)}
                    ></i>
                  </td>
                  <td>
                    <i
                      className="bi bi bi-trash"
                      onClick={() => deleteHandler(element)}
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => editHandler(null)}
        >
          Novo Projeto
        </button>
      </div>
    </>
  );
};

export default ListComponent;
