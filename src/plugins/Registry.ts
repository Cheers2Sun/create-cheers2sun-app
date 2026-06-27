import { Plugin } from "./Plugin";

export class Registry {

  private readonly plugins: Plugin[] = [];

  public register(plugin: Plugin): void {
    this.plugins.push(plugin);
  }

  public getPlugins(): Plugin[] {
    return [...this.plugins];
  }

}
