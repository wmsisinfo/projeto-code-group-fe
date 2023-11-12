
const ComboBoxComponent = (props) => {

    const clickOptionHandler = (event) => {
        console.log(event.target.value);
        props.clickOptionHandler(event.target.value)
    }

    return (
        <div className="dropdown">
            <button className="btn btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {props.label}
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" onClick={clickOptionHandler}>Action</a></li>
                <li><a className="dropdown-item" href="#" onClick={clickOptionHandler}>Another action</a></li>
                <li><a className="dropdown-item" href="#" onClick={clickOptionHandler}>Something else here</a></li>
            </ul>
        </div>
    )
}

export default ComboBoxComponent