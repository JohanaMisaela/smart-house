import React from "react";

interface LampProps {
  brightness: number;
}

const Lamp: React.FC<LampProps> = ({ brightness }) => {
  const getLampColor = (brightness: number): string => {
    const brightnessPercentage = brightness / 100;
    let red, green, blue;
    if (brightnessPercentage === 0) {
      red = 0;
      green = 0;
      blue = 0;
    } else if (brightnessPercentage === 1) {
      red = 255;
      green = 255;
      blue = 255;
    } else {
      red = Math.floor(255 * brightnessPercentage);
      green = Math.floor(255 * brightnessPercentage);
      blue = Math.floor(255 * brightnessPercentage);
    }
    if (brightnessPercentage > 0.5) {
      const yellowPercentage = (brightnessPercentage - 0.5) * 2;
      red = 255;
      green = 255;
      blue = Math.floor(255 * (1 - yellowPercentage));
    }

    return `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <div
      style={{
        width: 40,
        height: 40,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: getLampColor(brightness),
        borderRadius: "100%",
        border: "1px solid black",
      }}
      className="flex items-center justify-center"
    >
      <div
        style={{
          width: 20,
          height: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          backgroundColor: getLampColor(brightness),
          border: "1px solid black",
          borderRadius: "100%",
        }}
      ></div>
    </div>
  );
};

export default Lamp;
