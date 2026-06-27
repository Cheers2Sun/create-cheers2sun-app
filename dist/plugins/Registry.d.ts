import { Plugin } from "./Plugin";
export declare class Registry {
    private readonly plugins;
    register(plugin: Plugin): void;
    getPlugins(): Plugin[];
}
