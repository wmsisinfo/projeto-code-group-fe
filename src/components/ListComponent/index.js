import { useEffect, useState } from "react";
import * as httpServices from "../../services/httpservices";
import ToastComponent from "../ToastComponent";

const ListComponent = (props) => {
  const [isReady, setIsReady] = useState(false);
  const [projetos, setProjetos] = useState([]);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  useEffect(() => {
    setIsReady(false);
    listarTodosOsProjetos();
  }, []);

  const showToast = () => {
    setIsToastVisible(true);
  };

  const handleCancel = () => {
    // Handle cancel logic
    setIsToastVisible(false);
  };

  const handleConfirm = () => {
    console.log(itemToDelete.id);
    setIsReady(false);
    httpServices
      .deleteProjeto(itemToDelete.id)
      .then((_res) => {
        listarTodosOsProjetos();
      })
      .catch((err) => {
        setIsReady(true);
      });
    setIsToastVisible(false);
  };

  const listarTodosOsProjetos = () => {
    httpServices
      .readAllProjetos()
      .then((_res) => {
        setProjetos(_res);
        setIsReady(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editHandler = (item) => {
    props.executeFunction(item);
  };

  const shouldDeleteProjetoHandler = (item) => {
    setItemToDelete(item);
    showToast();
  };

  return (
    <>
      {!isReady ? (
        <p>Aguarde ... </p>
      ) : (
        <>
          {isToastVisible && (
            <ToastComponent
              message="Confirma ?"
              onConfirm={handleConfirm}
              onCancel={handleCancel}
            />
          )}
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
                {projetos.map((element) => {
                  return (
                    <tr key={element.id}>
                      <td>{element.id}</td>
                      <td>{element.nome}</td>
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
                          onClick={() => shouldDeleteProjetoHandler(element)}
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
      )}
    </>
  );
};

export default ListComponent;
