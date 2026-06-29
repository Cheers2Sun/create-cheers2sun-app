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
            "src/plugins/duffel/client.ts",
            "src/plugins/duffel/search.ts",
            "src/plugins/duffel/types.ts",
            "src/plugins/supabase/client.ts",
            "src/plugins/supabase/server.ts",
            "src/plugins/supabase/middleware.ts",
            "app/flights/page.tsx",
            "app/hotels/page.tsx",
            "app/packages/page.tsx",
            "app/about/page.tsx",
            "app/contact/page.tsx",
            "components/Hero.tsx",
            "components/SearchBox.tsx",
            "components/Navigation.tsx",
            "components/FeaturedDestinations.tsx",
            "app/api/flights/route.ts",

            "src/controllers/FlightSearchController.ts",
            "src/services/FlightService.ts",

            "src/providers/FlightProvider.ts",
            "src/providers/ProviderFactory.ts",

            "src/models/Airport.ts",
            "src/models/FlightOffer.ts",
            "src/models/FlightSearchRequest.ts",
            "src/models/FlightSearchResponse.ts",
            "src/models/FlightSegment.ts"

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
