import { useState } from 'react'
import ButtonComponent from '../ButtonComponent'
import TextFieldComponent from '../TextFieldComponent'
//import ListaSuspensa from '../ListaSuspensa'
import './FormComponent.css'

const FormComponent = (props) => {

    const [nome, setNome] = useState('')
    const [id, setId] = useState(0);
    const[dataInicio, setDataInicio] = useState('');
    // const [cargo, setCargo] = useState('')
    // const [imagem, setImagem] = useState('')
    // const [time, setTime] = useState('')

    const saveHandler = (event) => {
        event.preventDefault()
        // props.aoColaboradorCadastrado({
        //     nome,
        //     cargo,
        //     imagem,
        //     time
        // })
        setNome('')
        console.log('gravando');
        console.log(dataInicio);
        // setCargo('')
        // setImagem('')
        // setTime('')
    }

    return (
        <section className="form-component">
            <form onSubmit={saveHandler}>
                <h2>Preencha os dados para criar ou alterar o projeto</h2>
                <TextFieldComponent 
                    mandatory={true}
                    label="Id:"
                    fieldValue={id}
                    isReadOnly={true}
                    inputType="text"/>
                <TextFieldComponent 
                    mandatory={true}
                    label="Nome"
                    placeholder="Digite o nome do projeto" 
                    fieldValue={nome}
                    isReadOnly={false}
                    inputType="text"
                    changeContentHandler={valor => setNome(valor)}
                />
                <TextFieldComponent 
                    mandatory={true}
                    label="Data de início"
                    placeholder="Digite de início do projeto" 
                    fieldValue={dataInicio}
                    isReadOnly={false}
                    inputType="date"
                    changeContentHandler={valor => setDataInicio(valor)}
                />
                {/* <ListaSuspensa
                    obrigatorio={true}
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                /> */}
                <ButtonComponent>
                    Gravar
                </ButtonComponent>
            </form>
        </section>
    )
}

export default FormComponent