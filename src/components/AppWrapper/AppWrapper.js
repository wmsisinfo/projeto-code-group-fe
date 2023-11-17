import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as httpServices from "../../services/httpservices";
import * as projectActions from "../../store/actions/projeto";
import ListComponent from "../ListComponent";
import FormComponent from "../FormComponent";
import AlertComponent from "../AlertComponent";

const AppWrapper = () => {
  const [isListing, setIsListing] = useState(true);
  const [alert, setAlert] = useState(null);
  const ERROR_ALERT = "alert-danger";
  const ERROR_BTN = "btn-danger";

  const [editingProjeto, setEditingProjeto] = useState(null);

  const showAlert = (message, type, btnType) => {
    setAlert({ message, type, btnType });
  };

  const closeAlert = () => {
    setAlert(null);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    try {
      const listProjects = async () => {
        const list = await httpServices.listAllProjects();
        dispatch(projectActions.updateProjectsList(list));
      };
      listProjects();
    } catch (error) {
      showAlert(error.message, ERROR_ALERT, ERROR_BTN);
    }
  }, [dispatch]);

  const editProjetoHandler = (projeto) => {
    setEditingProjeto(projeto);
    setIsListing(false);
  };

  return (
    <div className="App">
      {alert && (
        <AlertComponent
          message={alert.message}
          type={alert.type}
          btnType="btn-danger"
          onClose={closeAlert}
        />
      )}
      {!isListing && (
        <FormComponent
          closeFunction={() => setIsListing(true)}
          objectToEdit={editingProjeto}
        />
      )}
      {isListing && <ListComponent executeFunction={editProjetoHandler} />}
    </div>
  );
};

export default AppWrapper;
