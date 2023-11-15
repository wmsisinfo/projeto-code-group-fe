import React from "react";
import "./ToastComponent.css";

const ToastComponent = (props) => {
  console.log(props.message);
  return (
    <>
      <div className="overlay">
        <div className={`overlay-content`}>
          <p>{props.message}</p>
          <div className="btn-group">
            <button className="btn btn-danger" onClick={props.onConfirm}>
              Sim
            </button>
            <button className="btn btn-secondary" onClick={props.onCancel}>
              Não
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToastComponent;
