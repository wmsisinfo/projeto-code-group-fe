import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AlertComponent from "../AlertComponent";
import ToastComponent from "../ToastComponent";
import * as projetoActions from "../../store/actions/projeto";

const ListComponent = (props) => {
  const { executeFunction } = props;
  const ERROR_ALERT = "alert-danger";
  const ERROR_BTN = "btn-danger";
  const dispatch = useDispatch();

  const [isToastVisible, setIsToastVisible] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [alert, setAlert] = useState(null);
  const projetos = useSelector((state) => state.projeto.projetos);

  const showAlert = (message, type, btnType) => {
    setAlert({ message, type, btnType });
  };

  const closeAlert = () => {
    setAlert(null);
  };

  const showToast = () => {
    setIsToastVisible(true);
  };

  const handleCancel = () => {
    setIsToastVisible(false);
  };

  const handleConfirm = () => {
    dispatch(projetoActions.deleteProjeto(itemToDelete.id))
      .then(() => {})
      .catch((err) => {
        showAlert(err.message, ERROR_ALERT, ERROR_BTN);
      });
    setIsToastVisible(false);
  };

  const editHandler = (item) => {
    executeFunction(item);
  };

  const shouldDeleteProjetoHandler = (item) => {
    setItemToDelete(item);
    showToast();
  };

  return (
    <>
      {alert && (
        <AlertComponent
          message={alert.message}
          type={alert.type}
          btnType="btn-danger"
          onClose={closeAlert}
        />
      )}
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
  );
};

export default ListComponent;
