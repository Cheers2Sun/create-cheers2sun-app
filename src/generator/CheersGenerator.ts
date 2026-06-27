import * as fs from "node:fs";
import * as path from "node:path";

import { CheersContext } from "../compiler/CheersContext";
import { CheersProjectWriter } from "./CheersProjectWriter";
import { GenerationVerifier } from "./GenerationVerifier";

export class CheersGenerator {

    public generate(
        context: CheersContext
    ): void {

        console.log("Generating project...");

        const writer = new CheersProjectWriter();

        writer.write(context);

        const verifier = new GenerationVerifier();

        verifier.verify(context);

        console.log("Generation completed.");

    }

}

