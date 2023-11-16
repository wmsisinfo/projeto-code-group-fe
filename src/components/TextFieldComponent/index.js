import "./TextFieldComponent.css";

const TextFieldComponent = (props) => {
  const {
    placeholder,
    changeContentHandler,
    label,
    inputType,
    isReadOnly,
    fieldValue,
    mandatory,
  } = props;

  const changedPlaceHolder = `${placeholder}...`;

  const textChangeHandler = (event) => {
    changeContentHandler(event.target.value);
  };

  return (
    <div className="text-field">
      <label>{label}</label>
      <input
        type={inputType}
        readOnly={isReadOnly}
        value={fieldValue}
        onChange={textChangeHandler}
        required={mandatory}
        placeholder={changedPlaceHolder}
      />
    </div>
  );
};

export default TextFieldComponent;
