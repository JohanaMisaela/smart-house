// src/commands/SetBrightnessCommand.ts

import LightController from "@/controllers/Light.Controller";

class SetBrightnessCommand {
  private lightController: LightController;
  private value: number;

  constructor(value: number) {
    this.lightController = LightController.getInstance();
    this.value = value;
  }

  public execute(): void {
    this.lightController.setBrightness(this.value);
  }
}

export default SetBrightnessCommand;
