import * as fs from "node:fs";
import * as path from "node:path";

import { CheersContext } from "../compiler/CheersContext";

export class CheersProjectWriter {

    public write(context: CheersContext): void {

        this.ensureDirectory(context.output);

        for (const template of context.templates) {

            this.copyDirectory(
                template,
                context.output
            );

        }

    }

    private ensureDirectory(directory: string): void {

        if (!fs.existsSync(directory)) {

            fs.mkdirSync(directory, {
                recursive: true
            });

        }

    }

    private copyDirectory(
        source: string,
        destination: string
    ): void {

        const entries = fs.readdirSync(source, {
            withFileTypes: true
        });

        for (const entry of entries) {

            const sourcePath = path.join(
                source,
                entry.name
            );

            const destinationPath = path.join(
                destination,
                entry.name
            );

            if (entry.isDirectory()) {

                this.ensureDirectory(destinationPath);

                this.copyDirectory(
                    sourcePath,
                    destinationPath
                );

            } else {

                fs.copyFileSync(
                    sourcePath,
                    destinationPath
                );

            }

        }

    }

}
