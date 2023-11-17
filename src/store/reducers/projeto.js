import { INSERT, QUERY } from "../actions/projeto";

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

const handleReduce = (state = initialState, action) => {
  switch (action.type) {
    case QUERY:
      return {
        ...state,
        projetos: action.projetos,
      };
    case INSERT:
      const modifiedState = { ...state };
      let newList = modifiedState.projetos.map((p) => p);
      const idx = newList.findIndex((p) => p.id === action.newItem.id);
      if (idx >= 0) {
        newList[idx] = action.newItem;
      } else {
        newList.push(action.newItem);
      }
      return {
        ...state,
        projetos: newList,
      };
    default:
      return state;
  }
};

export default handleReduce;
