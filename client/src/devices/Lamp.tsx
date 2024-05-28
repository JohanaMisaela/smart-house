import React from "react";

interface LampProps {
  brightness: number;
}

const Lamp: React.FC<LampProps> = ({ brightness }) => {
  const getLampColor = (brightness: number): string => {
    const brightnessPercentage = brightness / 100;
    const red = Math.floor(255 * (1 - brightnessPercentage));
    const green = Math.floor(255 * (1 - brightnessPercentage));
    const blue = 255;
    return `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <div
      style={{
        marginTop: "20px",
        width: "200px",
        height: "20px",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: getLampColor(brightness),
        border: "1px solid #000",
        borderRadius: "10px",
      }}
    ></div>
  );
};

export default Lamp;
