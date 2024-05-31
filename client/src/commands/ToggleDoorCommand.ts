// src/commands/ToggleDoorCommand.ts
class ToggleDoorCommand {
  private toggleDoor: () => void;

  constructor(toggleDoor: () => void) {
    this.toggleDoor = toggleDoor;
  }

  execute() {
    this.toggleDoor();
  }
}

export default ToggleDoorCommand;
