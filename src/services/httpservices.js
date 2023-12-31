export const saveOrUpdateProject = async (projeto) => {
  try {
    const uri = `http://localhost:9001/api/v1/projeto`;
    const method = projeto.id ? "PUT" : "POST";

    const json = JSON.stringify(projeto);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const response = await fetch(uri, {
      method: method,
      headers: myHeaders,
      body: json,
      redirect: "follow",
    });

    if (!response.ok) {
      throw new Error("Erro gravar o projeto");
    }

    const resData = await response.json();
    return resData.id;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const listWorkers = async () => {
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

export const listAllProjects = async () => {
  const uri = `http://localhost:9001/api/v1/projeto`;

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const response = await fetch(uri, requestOptions);

  if (!response.ok) {
    throw new Error("Erro ao obter a lista de projetos");
  }

  const resData = await response.json();

  return resData;
};

export const readAllProjects = async () => {
  const uri = "http://localhost:9001/api/v1/projeto";

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const request = await fetch(uri, {
    method: "GET",
    requestOptions,
  });
  if (!request.ok) {
    throw new Error("Erro ao obter a lista de projetos");
  }

  const response = request.json();
  return response;
};

export const deleteProject = async (id) => {
  const uri = `http://localhost:9001/api/v1/projeto/${id}`;

  const request = await fetch(uri, {
    method: "DELETE",
    redirect: "follow",
  });
  if (!request.ok) {
    const resData = await request.json();
    throw new Error(resData.error);
  }
  return true;
};
