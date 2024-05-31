import React from "react";

type DoorProps = {
  isOpen: boolean;
};

const Door: React.FC<DoorProps> = ({ isOpen }) => {
  return (
    <div
      style={{
        width: "100px",
        height: "200px",
        backgroundColor: isOpen ? "green" : "red",
        border: "1px solid #000",
        borderRadius: "5px",
        transition: "background-color 0.3s ease",
      }}
    >
      {isOpen ? "Ouvert" : "Fermé"}
    </div>
  );
};

export default Door;
