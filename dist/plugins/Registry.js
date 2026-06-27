"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registry = void 0;
class Registry {
    plugins = [];
    register(plugin) {
        this.plugins.push(plugin);
    }
    getPlugins() {
        return [...this.plugins];
    }
}
exports.Registry = Registry;
