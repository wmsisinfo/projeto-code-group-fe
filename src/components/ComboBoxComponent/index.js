const ComboBoxComponent = (props) => {
  const changeOptionHandler = (event) => {
    console.log(event.target.value);
    props.clickOptionHandler(event.target.value);
  };

  console.log(props.comboOptions);
  return (
    <section>
      <h4>{props.label}</h4>
      <select
        className="form-select"
        aria-label={props.label}
        onChange={changeOptionHandler}
      >
        {props.comboOptions.map((option, idx) => (
          <option key={idx}>{option}</option>
        ))}
      </select>
    </section>
  );
};

export default ComboBoxComponent;
