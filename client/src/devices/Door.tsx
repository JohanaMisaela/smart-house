import React from "react";

type DoorProps = {
  isOpen: boolean;
};

const Door: React.FC<DoorProps> = ({ isOpen }) => {
  return (
    <div
      style={{
        width: isOpen ? 20 : 100,
        height: isOpen ? 100 : 20,
        backgroundColor: "gray",
        border: "1px solid #000",
        borderRadius: "5px",
        transition: "background-color 0.3s ease",
      }}
    ></div>
  );
};

export default Door;
