import { useState } from "react";
import ButtonComponent from "../ButtonComponent";
import TextFieldComponent from "../TextFieldComponent";
import ComboBoxComponent from "../ComboBoxComponent";
//import ListaSuspensa from '../ListaSuspensa'
import "./FormComponent.css";

const FormComponent = (props) => {
  const [nome, setNome] = useState("");
  const [id, setId] = useState(0);
  const [dataInicio, setDataInicio] = useState("");
  const [dataPrevisaoFim, setDataPrevisaoFim] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState("");
  const [orcamento, setOrcamento] = useState(0);
  const [risco, setRisco] = useState("");
  const [idGerente, setIdGerente] = useState("");
  // const [cargo, setCargo] = useState('')
  // const [imagem, setImagem] = useState('')
  // const [time, setTime] = useState('')

  const saveHandler = (event) => {
    event.preventDefault();
    // props.aoColaboradorCadastrado({
    //     nome,
    //     cargo,
    //     imagem,
    //     time
    // })
    setNome("");
    console.log("gravando");
    console.log(dataInicio);
    // setCargo('')
    // setImagem('')
    // setTime('')
  };

  return (
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
              clickOptionHandler={(valor) => setIdGerente(valor)}
            />
          </div>
          <div className="col">
            <ComboBoxComponent
              label="Status"
              clickOptionHandler={(valor) => setStatus(valor)}
            />
          </div>
          <div className="col">
            <ComboBoxComponent
              label="Risco"
              clickOptionHandler={(valor) => setRisco(valor)}
            />
          </div>
        </div>

        <ButtonComponent>Gravar</ButtonComponent>
      </form>
    </section>
  );
};

export default FormComponent;
