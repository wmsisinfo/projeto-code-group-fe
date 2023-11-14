import "./ListComponent.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const ListComponent = (props) => {
  const options = {
    title: "Confirma ?",
    message: "Confirma a exclusão ?",
    buttons: [
      {
        label: "Sim",
        onClick: () => alert("Click Yes"),
      },
      {
        label: "Não",
        onClick: () => alert("Click No"),
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

  const deleteHandler = (id) => {
    confirmAlert(options);
    console.log(id);
  };

  return (
    <>
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
                    onClick={() => deleteHandler(element.id)}
                  ></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      );
    </>
  );
};

export default ListComponent;
