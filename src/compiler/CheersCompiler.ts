import { CheersParser } from "./CheersParser";
import { CheersValidator } from "./CheersValidator";
import { CheersContext } from "./CheersContext";
import { TemplateLoader } from "../templates/TemplateLoader";
import { CheersGenerator } from "../generator/CheersGenerator";

export class CheersCompiler {

    public compile(
        specFile: string,
        outputDirectory: string
    ): void {

        const parser = new CheersParser();

        const validator = new CheersValidator();

        const loader  = new TemplateLoader();
	

        const generator = new CheersGenerator();

        const spec = parser.parse(specFile);

        validator.validate(spec);

        const manifest = loader.loadManifest(
            spec.version,
            spec.application.template
        );

        const templates = loader.resolveTemplateChain(
            manifest
        );


        const context: CheersContext = {
           spec,
           root: process.cwd(),
           output: outputDirectory,
           manifest,
           templates
        };

        generator.generate(context);


    }

}
