import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as pessoaActions from "../../store/actions/pessoa";
import * as httpServices from "../../services/httpservices";
import ProjetoDto from "../../model/Projeto";
import TextFieldComponent from "../TextFieldComponent";
import ComboBoxComponent from "../ComboBoxComponent";
//import ListaSuspensa from '../ListaSuspensa'
import "./FormComponent.css";

const FormComponent = (props) => {
  //const dispatch = useDispatch();
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
  useEffect(() => {
    setIsLoading(true);
    const listar = async () => {
      const resposta = await httpServices.listFuncionarios();
      if (resposta) {
        setFuncionarios(resposta);
        setIsLoading(false);
      }
    };
    listar();
  }, [statusProjetos]);

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
      alert("Nome deve ser informado");
      return;
    }
    if (!dataInicio) {
      alert("Data de início do projeto deve ser informada");
      return;
    }

    if (!dataPrevisaoFim) {
      alert("Data de previsão do final do projeto deve ser informada");
      return;
    }

    if (!descricao) {
      alert("Descrição do projeto deve ser informada");
      return;
    }

    if (!status) {
      alert("Status do projeto deve ser informado");
      return;
    }

    if (!orcamento) {
      alert("Orçamento do projeto deve ser informado");
      setOrcamento(0);
      return;
    }

    if (isNaN(orcamento)) {
      alert("Orçamento do projeto deve ser informado");
      setOrcamento(0);
      return;
    }

    if (!riscoId) {
      alert("Risco do projeto deve ser informado");
      return;
    }

    if (!idGerente) {
      alert("Gerente do projeto deve ser informado");
      return;
    }

    setIsLoading(true);
    const saveFunc = async () => {
      const resposta = await httpServices.saveProjetoHandler(projeto);
      if (resposta) {
        setIsLoading(false);
      }
    };
    saveFunc();
    alert("Gravado com sucesso");
    limpar();
    props.closeFunction();
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
                  comboOptions={funcionarios}
                  clickOptionHandler={(valor) => setIdGerente(valor)}
                />
              </div>
              <div className="col">
                <ComboBoxComponent
                  label="Status"
                  comboOptions={statusProjetos}
                  clickOptionHandler={(valor) => setStatus(valor)}
                />
              </div>
              <div className="col">
                <ComboBoxComponent
                  label="Risco"
                  comboOptions={risco}
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
                <div className="col"></div>
                <button
                  type="button"
                  onClick={() => props.closeFunction()}
                  className="btn btn-secondary"
                >
                  Voltar
                </button>
              </div>
            </div>
          </form>
        </section>
      )}
    </>
  );
};

export default FormComponent;
