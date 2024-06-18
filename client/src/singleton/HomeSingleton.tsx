// src/patterns/HomeManager.ts

class HomeManager {
  private static instance: HomeManager | null = null;
  private subscribers: (() => void)[] = [];
  private isDoorOpen = false;

  private constructor() {}

  public static getInstance(): HomeManager {
    if (HomeManager.instance === null) {
      HomeManager.instance = new HomeManager();
    }
    return HomeManager.instance;
  }

  public subscribe(callback: () => void): void {
    this.subscribers.push(callback);
  }

  public unsubscribe(callback: () => void): void {
    this.subscribers = this.subscribers.filter(subscriber => subscriber !== callback);
  }

  public notify(): void {
    this.subscribers.forEach(callback => callback());
  }

  public setDoorState(isOpen: boolean): void {
    this.isDoorOpen = isOpen;
    this.notify();
  }

  public getDoorState(): boolean {
    return this.isDoorOpen;
  }
}

export default HomeManager;
