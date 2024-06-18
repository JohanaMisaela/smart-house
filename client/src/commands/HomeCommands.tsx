// src/patterns/commands.ts
import HomeManager from '../singleton/HomeSingleton';

class OpenDoorCommand {
  private homeManager: HomeManager;

  constructor(homeManager: HomeManager) {
    this.homeManager = homeManager;
  }

  public execute(): void {
    this.homeManager.setDoorState(true);
  }
}

class CloseDoorCommand {
  private homeManager: HomeManager;

  constructor(homeManager: HomeManager) {
    this.homeManager = homeManager;
  }

  public execute(): void {
    this.homeManager.setDoorState(false);
  }
}

export { OpenDoorCommand, CloseDoorCommand };
