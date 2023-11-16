import { useState } from "react";

const ComboBoxComponent = (props) => {
  const { label, comboOptions, clickOptionHandler, oldValue } = props;
  const [selectedValue, setSelectedValue] = useState(oldValue);

  const changeOptionHandler = (event) => {
    setSelectedValue(event.target.value);
    clickOptionHandler(event.target.value);
  };

  return (
    <section>
      <h4>{label}</h4>
      <select
        value={selectedValue || ""}
        className="form-select"
        aria-label={label}
        onChange={changeOptionHandler}
      >
        <option value="">...</option>
        {comboOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.nome}
          </option>
        ))}
      </select>
    </section>
  );
};

export default ComboBoxComponent;
