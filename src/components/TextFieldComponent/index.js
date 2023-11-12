import './TextFieldComponent.css'

const TextFieldComponent = (props) => {

    const changedPlaceHolder = `${props.placeholder}...` 

    const textChangeHandler = (event) => {
        props.changeContentHandler(event.target.value)
    }

    return (
        <div className="text-field">
            <label>
                {props.label}
            </label>
            <input type={props.inputType} readOnly={props.isReadOnly} value={props.fieldValue} onChange={textChangeHandler} required={props.mandatory} placeholder={changedPlaceHolder}/>
        </div>
    )
}

export default TextFieldComponent