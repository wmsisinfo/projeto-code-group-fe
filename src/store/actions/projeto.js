export const INSERT = "INSERT";
export const UPDATE = "UPDATE";
export const DELETE = "DELETE";
export const QUERY = "QUERY";

export const saveProjetoHandler = async (projeto) => {
  try {
    const uri = `http://localhost:9001/api/v1/projeto`;
    const method = projeto.id ? "PUT" : "POST";
    if (projeto.id) uri = "";
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
    return true;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
