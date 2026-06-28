import * as fs from "node:fs";
import * as path from "node:path";

export class PackageLocator {

    /**
     * Returns the installed package root.
     *
     * Works both:
     *  - inside the repository
     *  - after npm install -g
     */
    public static locate(): string {

        let current = __dirname;

        while (true) {

            const packageJson =
                path.join(current, "package.json");

            const templates =
                path.join(current, "templates");

            if (

                fs.existsSync(packageJson) &&
                fs.existsSync(templates)

            ) {

                return current;

            }

            const parent =
                path.dirname(current);

            if (parent === current) {

                throw new Error(
                    "Unable to locate create-cheers2sun-app installation."
                );

            }

            current = parent;

        }

    }

}
