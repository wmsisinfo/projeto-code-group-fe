import { INSERT, DELETE, UPDATE, QUERY } from "../actions/projeto";

const initialState = {
  projetos: [],
  gerentes: [],
  status: [
    "EM ANALISE",
    "ANALISE REALIZADA",
    "ANALISE APROVADA",
    "INICIADO",
    "PLANEJADO",
    "EM ANDAMENTO",
    "ENCERRADO",
    "CANCELADO",
  ],
  risco: ["BAIXO", "MEDIO", "ALTO"],
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
