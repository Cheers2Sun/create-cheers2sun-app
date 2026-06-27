import { CheersParser } from "./CheersParser";
import { CheersValidator } from "./CheersValidator";
import { CheersContext } from "./CheersContext";

import { CheersGenerator } from "../generator/CheersGenerator";

export class CheersCompiler {

    public compile(
        specFile: string,
        outputDirectory: string
    ): void {

        const parser = new CheersParser();

        const validator = new CheersValidator();

        const generator = new CheersGenerator();

        const spec = parser.parse(specFile);

        validator.validate(spec);

        const context: CheersContext = {

            spec,

            root: process.cwd(),

            output: outputDirectory

        };

        generator.generate(context);

    }

}
