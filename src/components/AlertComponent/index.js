import React, { useState } from "react";
import "./AlertComponent.css";

const AlertComponent = (props) => {
  console.log(props.message);
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    props.onClose();
  };

  return (
    isVisible && (
      <div className="overlay">
        <div className={`overlay-content alert ${props.type}`}>
          <p>{props.message}</p>
          <button className={`btn ${props.btnType}`} onClick={handleClose}>
            Fechar
          </button>
        </div>
      </div>
    )
  );
};

export default AlertComponent;
