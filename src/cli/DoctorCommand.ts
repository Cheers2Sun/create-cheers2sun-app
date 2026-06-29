import * as fs from "node:fs";
import * as path from "node:path";
import { Installation } from "../utils/Installation";

export class DoctorCommand {

    public execute(): void {
    
        console.log();
        console.log("Cheers2Sun Doctor");
        console.log("------------------");
        console.log();
    
        console.log(
            "Package Root :",
            Installation.root()
        );

        console.log(
           "Version :",
            Installation.version()
        );
    
        console.log();
    
        let ok = true;
    
        ok &&= this.checkTemplates();
        ok &&= this.checkExamples();
        ok &&= this.checkPlugins();
    
        console.log();
    
        ok &&= this.checkRequiredFiles();
    
        console.log();
    
        console.log(
            ok
                ? "✅ Installation OK"
                : "❌ Installation is incomplete."
        );
    
        console.log();
    
    }

    private checkFile(
        name: string,
        file: string
    ): boolean {
    
        const exists = fs.existsSync(file);
    
        console.log(
            `${exists ? "✓" : "✗"} ${name}`
        );
    
        return exists;
    
    }

    private checkTemplates(): boolean {
    
        const exists = fs.existsSync(
            Installation.templates()
        );
    
        console.log(
            `${exists ? "✓" : "✗"} Templates`
        );
    
        return exists;
    
    }

    private checkExamples(): boolean {
    
        const exists = fs.existsSync(
            Installation.examples()
        );
    
        console.log(
            `${exists ? "✓" : "✗"} Examples`
        );
    
        return exists;
    
    }


    private checkPlugins(): boolean {
    
        const exists = fs.existsSync(
            Installation.plugins()
        );
    
        console.log(
            `${exists ? "✓" : "✗"} Plugin Templates`
        );
    
        return exists;
    
    }

    private checkRequiredFiles(): boolean {
    
        console.log("Required Files");
        console.log("--------------");
    
        let ok = true;
    
        ok &&= this.checkFile(
            "package.json",
            Installation.packageJson()
        );
    
        ok &&= this.checkFile(
            "README.md",
            Installation.readme()
        );
    
        ok &&= this.checkFile(
            "LICENSE",
            Installation.license()
        );
    
        ok &&= this.checkFile(
            "Default Spec",
            Installation.defaultSpec()
        );
    
        ok &&= this.checkFile(
            "Travel Example",
            path.join(
                Installation.examples(),
                "travel.yaml"
            )
        );
    
        ok &&= this.checkFile(
            "Duffel Client Template",
            path.join(
                Installation.plugins(),
                "duffel",
                "client.ts.tpl"
            )
        );
    
        ok &&= this.checkFile(
            "Supabase Client Template",
            path.join(
                Installation.plugins(),
                "supabase",
                "client.ts.tpl"
            )
        );
    
        return ok;
    
    }
    
}
