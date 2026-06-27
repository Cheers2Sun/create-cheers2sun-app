"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuffelPlugin = void 0;
class DuffelPlugin {
    id = "duffel";
    version = "1.0.0";
    async execute(context) {
        console.log("Duffel plugin loaded.");
    }
}
exports.DuffelPlugin = DuffelPlugin;
