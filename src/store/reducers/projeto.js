import { INSERT, DELETE, UPDATE, QUERY} from '../actions/projeto';

const initialState = {
    projetos: [],
    gerentes: [],
    status: []
};

export default (state = initialState, action) => {
    switch (action.type) {
      case INSERT:
        return initialState;
      case DELETE:
        return initialState;
      case UPDATE:
        return initialState;
      default:
        return state;
    }
  };
  