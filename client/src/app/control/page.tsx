"use client";
import React, { useEffect } from "react";
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
    return () => {
      
    };
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
    <div style={styles.container}>
      <div style={styles.section}>
        <h1 style={styles.title}>Contrôle de la Lumière</h1>
        <input
          type="range"
          min="0"
          max="100"
          value={brightness}
          onChange={handleBrightnessChange}
          style={styles.slider}
        />
        <p style={styles.text}>Luminosité : {brightness}%</p>
      </div>

      <div style={styles.section}>
        <h1 style={styles.title}>Contrôle de la Porte</h1>
        <button onClick={handleToggleDoor} style={styles.button}>
          {isOpen ? "Fermer la Porte" : "Ouvrir la Porte"}
        </button>
        <p style={styles.text}>
          {isOpen ? "La porte est actuellement ouverte." : "La porte est fermée."}
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subtitle}>Porte Générale</h2>
        <p style={styles.text}>C'est ici pour ouvrir la porte Générale :</p>
        <ButtonControl />
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  section: {
    marginBottom: "20px",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#333",
  },
  subtitle: {
    fontSize: "20px",
    marginBottom: "8px",
    color: "#555",
  },
  text: {
    fontSize: "16px",
    color: "#666",
    marginTop: "10px",
  },
  slider: {
    width: "100%",
    marginTop: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};

export default Control;
