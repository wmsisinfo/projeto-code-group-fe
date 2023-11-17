export const INSERT = "INSERT";
export const UPDATE = "UPDATE";
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

export const deleteProjeto = (id) => {
  return async (dispatch) => {
    const uri = `http://localhost:9001/api/v1/projeto/${id}`;

    const request = await fetch(uri, {
      method: "DELETE",
      redirect: "follow",
    });
    if (!request.ok) {
      const resData = await request.json();
      throw new Error(resData.error);
    }

    dispatch({
      type: DELETE,
      itemToDelete: id,
    });
  };
};
