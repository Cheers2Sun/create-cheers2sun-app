import * as fs from "node:fs";
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

    public static plugins(): string {

        return path.join(
            this.templates(),
            "plugins"
        );

    }    

    public static packageJson(): string {
    
        return path.join(
            this.root(),
            "package.json"
        );
    
    }
    
    public static readme(): string {
    
        return path.join(
            this.root(),
            "README.md"
        );
    
    }
    
    public static license(): string {
    
        return path.join(
            this.root(),
            "LICENSE"
        );
    
    }


    public static version(): string {
    
        return JSON.parse(
    
            fs.readFileSync(
                this.packageJson(),
                "utf8"
            )
    
        ).version;
    
    }

}
