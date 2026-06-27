import * as fs from "node:fs";
import * as path from "node:path";

import { CheersContext } from "../compiler/CheersContext";
import { CheersProjectWriter } from "./CheersProjectWriter";


export class CheersGenerator {

    public generate(
        context: CheersContext
    ): void {

        console.log("Generating project...");

        const writer = new CheersProjectWriter();

        writer.write(context);

        console.log("Generation completed.");

    }

}

