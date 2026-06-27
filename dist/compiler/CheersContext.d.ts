import { CheersSpec } from "./CheersSpec";
import { TemplateManifest } from "../templates/TemplateManifest";
export interface CheersContext {
    spec: CheersSpec;
    root: string;
    output: string;
    manifest: TemplateManifest;
    templates: readonly string[];
}
