import * as path from "node:path";

export class Installation {

    /**
     * Root of the installed package.
     *
     * Development:
     *   dist/utils  -> ../.. -> project root
     *
     * npm link:
     *   .../node_modules/create-cheers2sun-app/dist/utils
     *                 -> ../.. -> package root
     */
    public static root(): string {

        return path.resolve(
            __dirname,
            "../.."
        );

    }

    public static templates(): string {

        return path.join(
            this.root(),
            "templates"
        );

    }

    public static examples(): string {

        return path.join(
            this.root(),
            "examples"
        );

    }

    public static docs(): string {

        return path.join(
            this.root(),
            "docs"
        );

    }

    public static defaultSpec(): string {

        return path.join(
            this.templates(),
            "spec",
            "default.yaml"
        );

    }

}
