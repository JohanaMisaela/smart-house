// src/controllers/DoorController.ts
type ToggleDoorFunction = () => void;

class DoorController {
  private static instance: DoorController;
  private toggleDoorFunction: ToggleDoorFunction;

  private constructor(toggleDoorFunction: ToggleDoorFunction) {
    this.toggleDoorFunction = toggleDoorFunction;
  }

  static initialize(toggleDoorFunction: ToggleDoorFunction) {
    if (!DoorController.instance) {
      DoorController.instance = new DoorController(toggleDoorFunction);
    }
  }

  static getInstance(): DoorController {
    if (!DoorController.instance) {
      throw new Error(
        "DoorController must be initialized first with a toggleDoorFunction"
      );
    }
    return DoorController.instance;
  }

  toggleDoor() {
    this.toggleDoorFunction();
  }
}

export default DoorController;
