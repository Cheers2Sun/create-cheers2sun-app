import { TemplateManifest } from "./TemplateManifest";
export declare class TemplateLoader {
    private readonly templatesRoot;
    constructor(templatesRoot?: string);
    /**
     * Loads a template manifest.
     *
     * Example:
     * templates/v1/travel/manifest.yaml
     */
    loadManifest(version: number, template: string): TemplateManifest;
    /**
     * Returns the path of a template directory.
     */
    resolveTemplate(name: string): string;
    /**
     * Returns every template folder that must be merged.
     */
    resolveTemplateChain(manifest: TemplateManifest): string[];
}
