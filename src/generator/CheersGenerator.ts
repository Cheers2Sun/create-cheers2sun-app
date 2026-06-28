import * as fs from "node:fs";
import * as path from "node:path";

import { CheersContext } from "../compiler/CheersContext";
import { CheersProjectWriter } from "./CheersProjectWriter";
import { GenerationVerifier } from "./GenerationVerifier";
import { ManifestWriter } from "./ManifestWriter";
import { Registry } from "../plugins/Registry";
export class CheersGenerator {

    public generate(
        context: CheersContext
    ): void {
    
        console.log("Generating project...");
    
        const writer = new CheersProjectWriter();
    
        writer.write(context);
    
        //
        // Run all plugins
        //
        const pluginManager = Registry.create();
    
        pluginManager.execute(context);
    
        //
        // Write manifest after plugins have finished
        //
        const manifestWriter = new ManifestWriter();
    
        manifestWriter.write(context);
    
        //
        // Verify the completed project
        //
        const verifier = new GenerationVerifier();
    
        verifier.verify(context.output);
    
        console.log("Generation completed.");
    
    }


}

