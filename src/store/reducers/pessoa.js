import { QUERY_FUNCIONARIOS } from "../actions/pessoa";

const initialState = {
  funcionarios: [],
};

export default (state = initialState, action) => {
  if (action.type === QUERY_FUNCIONARIOS) {
    return {
      ...state,
      funcionarios: action.funcionarios,
    };
  } else {
    return state;
  }
};
