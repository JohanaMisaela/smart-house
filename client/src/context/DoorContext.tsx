"use client";
import DoorController from "@/controllers/Door.controller";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type DoorContextType = {
  isOpen: boolean;
  toggleDoor: () => void;
};

const DoorContext = createContext<DoorContextType | undefined>(undefined);

export const useDoorContext = () => {
  const context = useContext(DoorContext);
  if (!context) {
    throw new Error(
      "useDoorContext doit être utilisé à l'intérieur de DoorProvider"
    );
  }
  return context;
};

interface DoorProviderProps {
  children: ReactNode;
}

export const DoorProvider: React.FC<DoorProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(() => {
    const storedState = localStorage.getItem("doorState");
    return storedState ? storedState === "open" : false;
  });

  const toggleDoor = () => {
    const newState = !isOpen;
    localStorage.setItem("doorState", newState ? "open" : "closed");
    setIsOpen(newState);

    window.dispatchEvent(
      new StorageEvent("storage", {
        key: "doorState",
        newValue: newState ? "open" : "closed",
        oldValue: isOpen ? "open" : "closed",
        storageArea: localStorage,
      })
    );
  };

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "doorState" && event.newValue !== null) {
        setIsOpen(event.newValue === "open");
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Initialize DoorController with toggleDoor function
  DoorController.initialize(toggleDoor);

  return (
    <DoorContext.Provider value={{ isOpen, toggleDoor }}>
      {children}
    </DoorContext.Provider>
  );
};
