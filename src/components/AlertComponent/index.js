import React, { useState } from "react";
import "./AlertComponent.css";

const AlertComponent = (props) => {
  const { message, btnType, onClose } = props;
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    isVisible && (
      <div className="overlay">
        <div className={`overlay-content alert ${props.type}`}>
          <p>{message}</p>
          <button className={`btn ${btnType}`} onClick={handleClose}>
            Fechar
          </button>
        </div>
      </div>
    )
  );
};

export default AlertComponent;
