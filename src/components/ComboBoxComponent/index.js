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
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </section>
  );
};

export default ComboBoxComponent;
