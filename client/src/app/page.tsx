"use client";
import SetBrightnessCommand from "@/commands/SetBrightnessCommand";
import { useLightContext } from "@/context/LightContext";
import LightController from "@/controllers/Light.Controller";
import Lamp from "@/devices/Lamp";
import { useEffect, useState } from "react";

const Page = () => {
  const { brightness } = useLightContext();

  return (
    <div style={{ padding: "20px" }}>
      <Lamp brightness={brightness} />
    </div>
  );
};

export default Page;
