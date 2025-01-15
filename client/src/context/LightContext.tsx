"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type LightContextType = {
  brightness: number;
  setBrightness: (brightness: number) => void;
};

const LightContext = createContext<LightContextType | undefined>(undefined);

export const useLightContext = () => {
  const context = useContext(LightContext);
  if (!context) {
    throw new Error(
      "useLightContext doit être utilisé à l'intérieur de LightProvider"
    );
  }
  return context;
};

interface LightProviderProps {
  children: ReactNode; 
}

export const LightProvider: React.FC<LightProviderProps> = ({ children }) => {
  const [brightness, setBrightnessState] = useState(() => {
    const storedBrightness = localStorage.getItem("brightness");
    return storedBrightness ? parseInt(storedBrightness, 10) : 50;
  });

  const setBrightness = (value: number) => {
    localStorage.setItem("brightness", value.toString());
    setBrightnessState(value);
    window.dispatchEvent(
      new StorageEvent("storage", {
        key: "brightness",
        newValue: value.toString(),
        oldValue: brightness.toString(),
        storageArea: localStorage,
      })
    );
  };

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "brightness" && event.newValue !== null) {
        setBrightnessState(parseInt(event.newValue, 10));
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <LightContext.Provider value={{ brightness, setBrightness }}>
      {children}
    </LightContext.Provider>
  );
};
