import React from "react";

type DoorProps = {
  isOpen: boolean;
};

const Door: React.FC<DoorProps> = ({ isOpen }) => {
  return (
    <div
      style={{
        width: isOpen ? 10 : 135,
        height: isOpen ? 100 : 10,
        backgroundColor: "#475569",
        transition: "background-color 0.3s ease",
      }}
    ></div>
  );
};

export default Door;
