import React from "react";
import "./ToastComponent.css";

const ToastComponent = (props) => {
  console.log(props.message);
  return (
    <>
      <div className="overlay">
        <div className={`overlay-content`}>
          <p>{props.message}</p>
          <div className="row">
            <div className="col">
              <button className="btn btn-danger" onClick={props.onConfirm}>
                Sim
              </button>
            </div>
            <div className="col">
              <button className="btn btn-secondary" onClick={props.onCancel}>
                Não
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToastComponent;
