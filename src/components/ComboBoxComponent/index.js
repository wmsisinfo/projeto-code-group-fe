import { useState } from "react";

const ComboBoxComponent = (props) => {
  const [selectedValue, setSelectedValue] = useState(props.oldValue);
  console.log(props.oldValue);

  const changeOptionHandler = (event) => {
    setSelectedValue(event.target.value);
    props.clickOptionHandler(event.target.value);
  };

  return (
    <section>
      <h4>{props.label}</h4>
      <select
        value={selectedValue ? selectedValue : ""}
        className="form-select"
        aria-label={props.label}
        onChange={changeOptionHandler}
      >
        <option value="">...</option>
        {props.comboOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.nome}
          </option>
        ))}
      </select>
    </section>
  );
};

export default ComboBoxComponent;
