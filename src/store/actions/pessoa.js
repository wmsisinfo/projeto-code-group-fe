export const QUERY_FUNCIONARIOS = "QUERY_FUNCIONARIOS";

export const listFuncionarios = async () => {
  const uri = `http://localhost:9001/api/v1/pessoa/funcionarios`;

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const response = await fetch(uri, requestOptions);

  if (!response.ok) {
    throw new Error("Erro ao obter a lista de funcionarios");
  }

  const resData = await response.json();

  return resData;
};
