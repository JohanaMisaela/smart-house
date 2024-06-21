"use client";
import React, { useEffect, useState } from "react";
import LightController from "@/controllers/Light.Controller";
import SetBrightnessCommand from "@/commands/SetBrightnessCommand";
import { useLightContext } from "@/context/LightContext";
import { useDoorContext } from "@/context/DoorContext";
import ToggleDoorCommand from "@/commands/ToggleDoorCommand";
import ButtonControl from "@/controllers/HomeDoor.Controller";

const Control = () => {
  const { brightness, setBrightness } = useLightContext();
  const { isOpen, toggleDoor } = useDoorContext();
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
  const handleToggleDoor = () => {
    const command = new ToggleDoorCommand(toggleDoor);
    command.execute();
  };
  return (
    <>
      <div style={{ padding: "20px" }}>
        <input
          type="range"
          min="0"
          max="100"
          value={brightness}
          onChange={handleBrightnessChange}
        />
      </div>

      <h1>Contrôle de la Porte</h1>
      <button onClick={handleToggleDoor}>
        {isOpen ? "Fermer la Porte" : "Ouvrir la Porte"}
      </button>

      <div>
        <p>C'est ici pour ouvrir le porte General</p>
        <ButtonControl />
      </div>
    </>
  );
};

export default Control;
