import { CheersSpec } from "./CheersSpec";
import { TemplateManifest } from "../templates/TemplateManifest";
export interface CheersContext {

    spec: CheersSpec;

    root: string;          // project root (current working directory)

    generatorRoot: string; // generator package root

    output: string;

    manifest: TemplateManifest;

    templates: string[];

}

