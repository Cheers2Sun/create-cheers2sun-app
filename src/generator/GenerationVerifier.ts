import * as fs from "node:fs";
import * as path from "node:path";

import { CheersContext } from "../compiler/CheersContext";

export class GenerationVerifier {


    public verify(output: string): void {

        console.log();
        console.log("Verifying generated project...");
        console.log();

        const requiredFiles = [

            "README.md",

            "package.json",

            "tsconfig.json",

            "next.config.ts",

            "next-env.d.ts",

            "eslint.config.mjs",

            "postcss.config.mjs",

            ".gitignore",
            ".cheers/manifest.json",
            "app/layout.tsx",

            "app/page.tsx",

            "app/globals.css",
            ".env.example",
            "components/Header.tsx",
            "components/Footer.tsx",
            "public/logo.svg",
            "src/lib/duffel/client.ts",
            "src/lib/duffel/search.ts",
            "src/lib/duffel/types.ts",
            "src/lib/supabase/client.ts",
            "src/lib/supabase/server.ts",
            "src/lib/supabase/middleware.ts"


        ];

        let success = true;

        for (const file of requiredFiles) {

            const filename = path.join(
                output,
                file
            );

            if (fs.existsSync(filename)) {

                console.log(`✓ ${file}`);

            } else {

                console.log(`✗ ${file}`);

                success = false;

            }

        }

        if (!success) {

            throw new Error(
                "Generation verification failed."
            );

        }

        console.log();
        console.log("✅ Generation verification passed.");

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
