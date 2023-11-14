import { useEffect, useState } from "react";
import * as httpServices from "../../services/httpservices";

const ListComponent = (props) => {
  const [isReady, setIsReady] = useState(false);
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    setIsReady(false);
    listarTodosOsProjetos();
  }, []);

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
    const resposta = window.confirm("Confirma ?");
    if (!resposta) return;
    setIsReady(false);
    httpServices
      .deleteProjeto(item.id)
      .then((_res) => {
        listarTodosOsProjetos();
      })
      .catch((err) => {
        setIsReady(true);
      });
  };

  return (
    <>
      {!isReady ? (
        <p>Aguarde ... </p>
      ) : (
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
      )}
    </>
  );
};

export default ListComponent;
