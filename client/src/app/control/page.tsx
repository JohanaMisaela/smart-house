"use client";
import React, { useEffect, useState } from "react";
import LightController from "@/controllers/Light.Controller";
import SetBrightnessCommand from "@/commands/SetBrightnessCommand";
import { useLightContext } from "@/context/LightContext";

const Control = () => {
  const { brightness, setBrightness } = useLightContext();

  useEffect(() => {
    const lightController = LightController.getInstance();
    const handleBrightnessChange = (value: number) => setBrightness(value);
    lightController.addObserver(handleBrightnessChange);
    return () => {};
  }, []);

  const handleBrightnessChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(event.target.value);
    setBrightness(value);
    const command = new SetBrightnessCommand(value);
    command.execute();
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="range"
        min="0"
        max="100"
        value={brightness}
        onChange={handleBrightnessChange}
      />
    </div>
  );
};

export default Control;
