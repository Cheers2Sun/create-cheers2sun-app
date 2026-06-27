"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupabasePlugin = void 0;
class SupabasePlugin {
    id = "supabase";
    version = "1.0.0";
    async execute(context) {
        console.log("Supabase plugin loaded.");
    }
}
exports.SupabasePlugin = SupabasePlugin;
