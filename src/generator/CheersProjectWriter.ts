import * as fs from "node:fs";
import * as path from "node:path";

import { CheersContext } from "../compiler/CheersContext";
import { PlaceholderEngine } from "../templates/PlaceholderEngine";

export class CheersProjectWriter {

    private readonly placeholders = new PlaceholderEngine();

    public write(context: CheersContext): void {

        this.ensureDirectory(context.output);

        for (const template of context.templates) {

            this.copyDirectory(
                template,
                context.output,
                context
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
        destination: string,
        context: CheersContext
    ): void {

        const entries = fs.readdirSync(source, {
            withFileTypes: true
        });

        for (const entry of entries) {

            const sourcePath = path.join(
                source,
                entry.name
            );

            let destinationPath = path.join(
                destination,
                entry.name
            );

            if (entry.isDirectory()) {

                this.ensureDirectory(destinationPath);

                this.copyDirectory(
                    sourcePath,
                    destinationPath,
                    context
                );

                continue;

            }

            if (sourcePath.endsWith(".tpl")) {

                destinationPath = destinationPath.substring(
                    0,
                    destinationPath.length - 4
                );

                const template = fs.readFileSync(
                    sourcePath,
                    "utf8"
                );

                const output = this.placeholders.process(
                    template,
                    context
                );

                fs.writeFileSync(
                    destinationPath,
                    output,
                    "utf8"
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
