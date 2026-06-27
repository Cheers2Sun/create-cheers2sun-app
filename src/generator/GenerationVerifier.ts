import * as fs from "node:fs";
import * as path from "node:path";

import { CheersContext } from "../compiler/CheersContext";

export class GenerationVerifier {

    public verify(context: CheersContext): void {

        console.log("");
        console.log("Verifying generated project...");

        this.requireFile(context.output, "README.md");
        this.requireFile(context.output, "package.json");
        this.requireFile(context.output, "tsconfig.json");
        this.requireFile(context.output, "app/page.tsx");

        this.ensureNoTemplates(context.output);

        console.log("✅ Generation verification passed.");
        console.log("");

    }

    private requireFile(
        root: string,
        relativePath: string
    ): void {

        const file = path.join(root, relativePath);

        if (!fs.existsSync(file)) {

            throw new Error(
                `Missing generated file: ${relativePath}`
            );

        }

        console.log(`✓ ${relativePath}`);

    }

    private ensureNoTemplates(
        directory: string
    ): void {

        const entries = fs.readdirSync(
            directory,
            {
                withFileTypes: true
            }
        );

        for (const entry of entries) {

            const fullPath = path.join(
                directory,
                entry.name
            );

            if (entry.isDirectory()) {

                this.ensureNoTemplates(fullPath);

                continue;

            }

            if (entry.name.endsWith(".tpl")) {

                throw new Error(
                    `Template file left in generated project: ${fullPath}`
                );

            }

        }

    }

}
