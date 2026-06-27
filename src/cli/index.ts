#!/usr/bin/env node

import { CheersCompiler } from "../compiler/CheersCompiler";

function main(): void {
    const args = process.argv.slice(2);

    const outputDirectory = args[0] ?? "generated";
    const specFile = "cheers.yaml";

    try {
        const compiler = new CheersCompiler();

        compiler.compile(specFile, outputDirectory);

        console.log("✅ Cheers2Sun project generated successfully.");
    } catch (error) {
        console.error("❌ Compiler failed.");

        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error(error);
        }

        process.exit(1);
    }
}

main();
