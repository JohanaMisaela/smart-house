// src/controllers/LightController.ts
class LightController {
  private static instance: LightController;
  private brightness: number;
  private observers: Array<(brightness: number) => void>;

  private constructor() {
    this.brightness = 50;
    this.observers = [];
  }

  public static getInstance(): LightController {
    if (!LightController.instance) {
      LightController.instance = new LightController();
    }
    return LightController.instance;
  }

  public setBrightness(value: number): void {
    this.brightness = value;
    this.notifyObservers();
  }

  public getBrightness(): number {
    return this.brightness;
  }

  public addObserver(observer: (brightness: number) => void): void {
    this.observers.push(observer);
  }

  private notifyObservers(): void {
    this.observers.forEach((observer) => observer(this.brightness));
  }
}

export default LightController;
