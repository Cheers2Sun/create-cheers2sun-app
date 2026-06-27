"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorePlugin = void 0;
class CorePlugin {
    id = "core";
    version = "1.0.0";
    async execute(context) {
        console.log("Core plugin loaded.");
    }
}
exports.CorePlugin = CorePlugin;
