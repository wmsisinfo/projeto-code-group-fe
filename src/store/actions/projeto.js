export const INSERT = "INSERT";
export const DELETE = "DELETE";
export const QUERY = "QUERY";

export const updateProjectsList = (projectList) => {
  return async (dispatch) => {
    dispatch({
      type: QUERY,
      projetos: projectList,
    });
  };
};

export const insertOrUpdateProjectInList = (item) => {
  return async (dispatch) => {
    dispatch({
      type: INSERT,
      newItem: item,
    });
  };
};

export const deleteProject = (item) => {
  return async (dispatch) => {
    dispatch({
      type: DELETE,
      itemToDelete: item,
    });
  };
};
