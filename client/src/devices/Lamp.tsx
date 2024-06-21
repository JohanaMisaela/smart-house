import Image from "next/image";
import React from "react";

interface LampProps {
  brightness: number;
}

const Lamp: React.FC<LampProps> = ({ brightness }) => {
  const getLampColor = (brightness: number): string => {
    const brightnessPercentage = brightness / 100;
    let red, green, blue, alpha;

    if (brightnessPercentage === 0) {
      red = 255;
      green = 255;
      blue = 0;
      alpha = 0;
    } else {
      red = 255;
      green = 255;
      blue = 0;
      alpha = brightnessPercentage;
    }

    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  };

  const lampColor = getLampColor(brightness);
  return (
    <div
      style={{ backgroundColor: lampColor }}
      className={`w-16 h-16 rounded-full lamp`}
    ></div>
  );
};

export default Lamp;
