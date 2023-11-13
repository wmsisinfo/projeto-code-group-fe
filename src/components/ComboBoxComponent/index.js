const ComboBoxComponent = (props) => {
  const changeOptionHandler = (event) => {
    console.log(event.target.value);
    props.clickOptionHandler(event.target.value);
  };

  return (
    <section>
      <h4>{props.label}</h4>
      <select
        className="form-select"
        aria-label={props.label}
        onChange={changeOptionHandler}
      >
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
