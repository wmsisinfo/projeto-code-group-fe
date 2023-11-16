import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as httpServices from "../../services/httpservices";
import ProjetoDto from "../../model/Projeto";
import TextFieldComponent from "../TextFieldComponent";
import ComboBoxComponent from "../ComboBoxComponent";
import AlertComponent from "../AlertComponent";
import "./FormComponent.css";

const FormComponent = (props) => {
  const { objectToEdit, closeFunction } = props;
  const ERROR_ALERT = "alert-danger";
  const ERROR_BTN = "btn-danger";
  const SUCESS_ALERT = "alert-success";
  const SUCCESS_BTN = "btn-primary";
  const [alert, setAlert] = useState(null);
  const risco = useSelector((state) => state.projeto.risco);
  const statusProjetos = useSelector((state) => state.projeto.status);

  const [nome, setNome] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [id, setId] = useState(0);
  const [dataInicio, setDataInicio] = useState("");
  const [dataPrevisaoFim, setDataPrevisaoFim] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState("");
  const [orcamento, setOrcamento] = useState(0);
  const [riscoId, setRiscoId] = useState("");
  const [idGerente, setIdGerente] = useState("");
  const [funcionarios, setFuncionarios] = useState([]);

  const showAlert = (message, type, btnType) => {
    setAlert({ message, type, btnType });
  };

  const closeAlert = () => {
    setAlert(null);
  };

  useEffect(() => {
    setIsLoading(true);

    if (objectToEdit) {
      setNome(objectToEdit.nome);
      setDescricao(objectToEdit.descricao);
      setDataInicio(objectToEdit.dataInicio);
      setDataFim(objectToEdit.dataFim);
      setDataPrevisaoFim(objectToEdit.dataPrevisaoFim);
      setOrcamento(parseFloat(objectToEdit.orcamento));
      setRiscoId(objectToEdit.risco);
      setStatus(objectToEdit.status);
      setIdGerente(objectToEdit.idGerente);
      setId(objectToEdit.id);
    }

    const listar = async () => {
      const resposta = await httpServices.listFuncionarios();
      if (resposta) {
        setFuncionarios(resposta);
        setIsLoading(false);
      }
    };
    listar();
  }, [objectToEdit]);

  const saveHandler = (event) => {
    event.preventDefault();
    const projeto = new ProjetoDto(
      id,
      nome,
      dataInicio,
      dataPrevisaoFim,
      dataFim,
      descricao,
      status,
      parseFloat(orcamento),
      riscoId,
      idGerente
    );

    if (!nome) {
      showAlert("Nome deve ser informado", ERROR_ALERT, ERROR_BTN);
      return;
    }
    if (!dataInicio) {
      showAlert(
        "Data de início do projeto deve ser informada",
        ERROR_ALERT,
        ERROR_BTN
      );
      return;
    }

    if (!dataPrevisaoFim) {
      showAlert(
        "Data de previsão do final do projeto deve ser informada",
        ERROR_ALERT,
        ERROR_BTN
      );
      return;
    }

    if (!descricao) {
      showAlert(
        "Descrição do projeto deve ser informada",
        ERROR_ALERT,
        ERROR_BTN
      );
      return;
    }

    if (!status) {
      showAlert("Status do projeto deve ser informado", ERROR_ALERT, ERROR_BTN);
      return;
    }

    if (!orcamento) {
      showAlert(
        "Orçamento do projeto deve ser informado",
        ERROR_ALERT,
        ERROR_BTN
      );
      setOrcamento(0);
      return;
    }

    if (isNaN(orcamento)) {
      showAlert(
        "Orçamento do projeto deve ser informado",
        ERROR_ALERT,
        ERROR_BTN
      );
      setOrcamento(0);
      return;
    }

    if (!riscoId) {
      showAlert("Risco do projeto deve ser informado", ERROR_ALERT, ERROR_BTN);
      return;
    }

    if (!idGerente) {
      showAlert(
        "Gerente do projeto deve ser informado",
        ERROR_ALERT,
        ERROR_BTN
      );
      return;
    }

    setIsLoading(true);
    const saveFunc = async () => {
      const resposta = await httpServices.saveProjetoHandler(projeto);
      if (resposta) {
        setIsLoading(false);
        showAlert("Dados gravados com sucesso!", SUCESS_ALERT, SUCCESS_BTN);
      }
    };
    saveFunc();
    limpar();
    closeFunction();
  };

  const limpar = () => {
    setNome("");
    setDescricao("");
    setDataFim("__/__/____");
    setDataInicio("__/__/____");
    setDataPrevisaoFim("__/__/____");
    setOrcamento(0);
    setRiscoId("BAIXO");
    setStatus("EM ANALISE");
    setIdGerente(0);
  };

  return (
    <>
      {isLoading ? (
        <p>Carregando ... </p>
      ) : (
        <>
          {alert && (
            <AlertComponent
              message={alert.message}
              type={alert.type}
              btnType="btn-danger"
              onClose={closeAlert}
            />
          )}
          <section className="form-component">
            <form onSubmit={saveHandler}>
              <h2>Preencha os dados para criar ou alterar o projeto</h2>
              <div className="row">
                <div className="col-4">
                  <TextFieldComponent
                    mandatory={true}
                    label="Id:"
                    fieldValue={id}
                    isReadOnly={true}
                    inputType="text"
                  />
                </div>
                <div className="col-8">
                  <TextFieldComponent
                    mandatory={true}
                    label="Nome"
                    placeholder="Digite o nome do projeto"
                    fieldValue={nome}
                    isReadOnly={false}
                    inputType="text"
                    changeContentHandler={(valor) => setNome(valor)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <TextFieldComponent
                    mandatory={true}
                    label="Data de início"
                    placeholder="Digite de início do projeto"
                    fieldValue={dataInicio}
                    isReadOnly={false}
                    inputType="date"
                    changeContentHandler={(valor) => setDataInicio(valor)}
                  />
                </div>
                <div className="col">
                  <TextFieldComponent
                    mandatory={true}
                    label="Previsão de final"
                    placeholder="Digite a data prevista para o final do projeto"
                    fieldValue={dataPrevisaoFim}
                    isReadOnly={false}
                    inputType="date"
                    changeContentHandler={(valor) => setDataPrevisaoFim(valor)}
                  />
                </div>
                <div className="col">
                  <TextFieldComponent
                    mandatory={true}
                    label="Data de finalização"
                    placeholder="Digite de finalização do projeto"
                    fieldValue={dataFim}
                    isReadOnly={false}
                    inputType="date"
                    changeContentHandler={(valor) => setDataFim(valor)}
                  />
                </div>
              </div>

              <TextFieldComponent
                mandatory={true}
                label="Descrição"
                placeholder="Descrição do projeto"
                fieldValue={descricao}
                isReadOnly={false}
                inputType="text"
                changeContentHandler={(valor) => setDescricao(valor)}
              />
              <TextFieldComponent
                mandatory={true}
                label="Orçamento"
                placeholder="Orçamento do projeto"
                fieldValue={orcamento}
                isReadOnly={false}
                inputType="number"
                changeContentHandler={(valor) => setOrcamento(valor)}
              />
              <div className="row">
                <div className="col">
                  <ComboBoxComponent
                    label="Gerente"
                    oldValue={idGerente}
                    comboOptions={funcionarios}
                    clickOptionHandler={(valor) => setIdGerente(valor)}
                  />
                </div>
                <div className="col">
                  <ComboBoxComponent
                    label="Status"
                    oldValue={status}
                    comboOptions={statusProjetos}
                    clickOptionHandler={(valor) => setStatus(valor)}
                  />
                </div>
                <div className="col">
                  <ComboBoxComponent
                    label="Risco"
                    comboOptions={risco}
                    oldValue={riscoId}
                    clickOptionHandler={(valor) => setRiscoId(valor)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button
                    type="button"
                    onClick={saveHandler}
                    className="btn btn-primary"
                  >
                    Gravar
                  </button>
                </div>
                <div className="col"></div>
                <div className="col">
                  <button
                    type="button"
                    onClick={() => closeFunction()}
                    className="btn btn-secondary"
                  >
                    Voltar
                  </button>
                </div>
              </div>
            </form>
          </section>
        </>
      )}
    </>
  );
};

export default FormComponent;
