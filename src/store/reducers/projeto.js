import { INSERT, DELETE, UPDATE, QUERY } from "../actions/projeto";

const initialState = {
  projetos: [],
  status: [
    { id: "EM ANALISE", nome: "EM ANALISE" },
    { id: "ANALISE REALIZADA", nome: "ANALISE REALIZADA" },
    { id: "ANALISE APROVADA", nome: "ANALISE APROVADA" },
    { id: "INICIADO", nome: "INICIADO" },
    { id: "PLANEJADO", nome: "PLANEJADO" },
    { id: "EM ANDAMENTO", nome: "EM ANDAMENTO" },
    { id: "ENCERRADO", nome: "ENCERRADO" },
    { id: "CANCELADO", nome: "CANCELADO" },
  ],
  risco: [
    { id: "BAIXO", nome: "BAIXO" },
    { id: "MEDIO", nome: "MEDIO" },
    { id: "ALTO", nome: "ALTO" },
  ],
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
