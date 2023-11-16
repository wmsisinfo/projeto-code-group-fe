import React from "react";
import "./ToastComponent.css";

const ToastComponent = (props) => {
  const { message, onConfirm, onCancel } = props;
  return (
    <>
      <div className="overlay">
        <div className={`overlay-content`}>
          <p>{message}</p>
          <div className="row">
            <div className="col">
              <button className="btn btn-danger" onClick={onConfirm}>
                Sim
              </button>
            </div>
            <div className="col">
              <button className="btn btn-secondary" onClick={onCancel}>
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
