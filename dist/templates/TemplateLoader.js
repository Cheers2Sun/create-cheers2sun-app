"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateLoader = void 0;
const fs = __importStar(require("node:fs"));
const path = __importStar(require("node:path"));
const js_yaml_1 = __importDefault(require("js-yaml"));
class TemplateLoader {
    templatesRoot;
    constructor(templatesRoot = "templates") {
        this.templatesRoot = templatesRoot;
    }
    /**
     * Loads a template manifest.
     *
     * Example:
     * templates/v1/travel/manifest.yaml
     */
    loadManifest(version, template) {
        const manifestPath = path.join(this.templatesRoot, `v${version}`, template, "manifest.yaml");
        if (!fs.existsSync(manifestPath)) {
            throw new Error(`Template manifest not found: ${manifestPath}`);
        }
        const file = fs.readFileSync(manifestPath, "utf8");
        const manifest = js_yaml_1.default.load(file);
        if (!manifest) {
            throw new Error(`Invalid manifest: ${manifestPath}`);
        }
        return manifest;
    }
    /**
     * Returns the path of a template directory.
     */
    resolveTemplate(name) {
        const templatePath = path.join(this.templatesRoot, name);
        if (!fs.existsSync(templatePath)) {
            throw new Error(`Template not found: ${name}`);
        }
        return templatePath;
    }
    /**
     * Returns every template folder that must be merged.
     */
    resolveTemplateChain(manifest) {
        const chain = [];
        for (const folder of manifest.extends) {
            chain.push(this.resolveTemplate(folder));
        }
        return chain;
    }
}
exports.TemplateLoader = TemplateLoader;
