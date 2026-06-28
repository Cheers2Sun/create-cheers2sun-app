import * as fs from "node:fs";
import * as path from "node:path";

import { CheersContext } from "../compiler/CheersContext";
import { PlaceholderEngine } from "../templates/PlaceholderEngine";

export class PluginFileWriter {

    private readonly engine = new PlaceholderEngine();

    constructor(
        private readonly context: CheersContext
    ) {}

    public writeTemplate(
        templateFile: string,
        outputFile: string
    ): void {

        const source = path.join(
            this.context.generatorRoot,
            "templates",
            "plugins",
            templateFile
        );

        if (!fs.existsSync(source)) {

            throw new Error(
                `Plugin template not found: ${source}`
            );

        }

        const destination = path.join(
            this.context.output,
            outputFile
        );

        fs.mkdirSync(
            path.dirname(destination),
            { recursive: true }
        );

        const template =
            fs.readFileSync(
                source,
                "utf8"
            );

        const result =
            this.engine.render(
                template,
                this.context.spec
            );

        fs.writeFileSync(
            destination,
            result,
            "utf8"
        );

        console.log(`✓ ${outputFile}`);

    }

}
