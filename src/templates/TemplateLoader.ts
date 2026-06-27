import * as fs from "node:fs";
import * as path from "node:path";

import yaml from "js-yaml";

import { TemplateManifest } from "./TemplateManifest";
import { Installation } from "../utils/Installation";
export class TemplateLoader {

    constructor(
        private readonly templatesRoot: string = Installation.templates() 
    ) {}

    /**
     * Loads a template manifest.
     *
     * Example:
     * templates/v1/travel/manifest.yaml
     */
    public loadManifest(version: number, template: string): TemplateManifest {

        const manifestPath = path.join(
            this.templatesRoot,
            `v${version}`,
            template,
            "manifest.yaml"
        );

        if (!fs.existsSync(manifestPath)) {
            throw new Error(
                `Template manifest not found: ${manifestPath}`
            );
        }

        const file = fs.readFileSync(
            manifestPath,
            "utf8"
        );

        const manifest = yaml.load(file);

        if (!manifest) {
            throw new Error(
                `Invalid manifest: ${manifestPath}`
            );
        }

        return manifest as TemplateManifest;
    }

    /**
     * Returns the path of a template directory.
     */
    public resolveTemplate(name: string): string {

        const templatePath = path.join(
            this.templatesRoot,
            name
        );

        if (!fs.existsSync(templatePath)) {
            throw new Error(
                `Template not found: ${name}`
            );
        }

        return templatePath;
    }

    /**
     * Returns every template folder that must be merged.
     */
    public resolveTemplateChain(
        manifest: TemplateManifest
    ): string[] {

        const chain: string[] = [];

        for (const folder of manifest.extends) {

            chain.push(
                this.resolveTemplate(folder)
            );

        }

        return chain;
    }

}
