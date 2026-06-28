import * as fs from "node:fs";
import * as path from "node:path";

import { CheersContext } from "../compiler/CheersContext";

export class ManifestWriter {

    public write(
        context: CheersContext
    ): void {

        const directory = path.join(
            context.output,
            ".cheers"
        );

        fs.mkdirSync(
            directory,
            { recursive: true }
        );

        const manifest = {

            generator: "create-cheers2sun-app",

            generatorVersion: "1.0.0",

            manifestVersion: 1,

            template: context.spec.template,

            generatedAt: new Date().toISOString(),

            project: {

                name: context.spec.project?.name

            },

            plugins: Object.keys( context.spec.plugins ?? {} )

        };


        fs.writeFileSync(

            path.join(
                directory,
                "manifest.json"
            ),

            JSON.stringify(
                manifest,
                null,
                4
            ),

            "utf8"

        );

    }

}
