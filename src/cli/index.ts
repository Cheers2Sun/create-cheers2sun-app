#!/usr/bin/env node
import * as fs from "node:fs";
import * as path from "node:path";

import { Command } from "commander";
import { CheersCompiler } from "../compiler/CheersCompiler";
import { Installation } from "../utils/Installation";
import { DoctorCommand } from "./DoctorCommand";
import packageJson from "../../package.json";

const program = new Command();

program
    .name("create-cheers2sun-app")
    .description(
        "Cheers2Sun Open Source Application Generator"
    )
    .version(packageJson.version);



/*
 * init
 */

program
    .command("init")
    .description("Create a default cheers.yaml specification")
    .option(
        "-f, --force",
        "Overwrite an existing cheers.yaml"
    )
    .action((options: { force?: boolean }) => {

        const source = Installation.defaultSpec();
        console.log("Package Root :", Installation.root());
        console.log("Default Spec :", source);
        console.log("Exists       :", fs.existsSync(source));

        const destination = path.resolve(
            "cheers.yaml"
        );

        if (!fs.existsSync(source)) {

            console.error(
                "❌ Default specification template not found."
            );

            process.exit(1);

        }

        if (fs.existsSync(destination) && 
            !options.force
           ) {

            console.error(
                "❌ cheers.yaml already exists."
            );

            console.log(
                "Use --force to overwrite it."
            );
            process.exit(1);

        }
        const existed = fs.existsSync(destination);
        fs.copyFileSync(
            source,
            destination
        );
        console.log(
            existed
               ? "✅ Overwrote cheers.yaml"
               : "✅ Created cheers.yaml"
        );


    });

/*
 * default generation command
 */

program
    .argument(
        "<output>",
        "Output directory"
    )
    .option(
        "-s, --spec <file>",
        "Cheers specification",
        "cheers.yaml"
    )
    .action(
        (
            output: string,
            options: {
                spec: string;
            }
        ) => {

            try {

                const compiler = new CheersCompiler();

                compiler.compile(
                    options.spec,
                    output
                );

                console.log(
                    "✅ Cheers2Sun project generated successfully."
                );

            } catch (error) {

                console.error(
                    "❌ Compiler failed."
                );

                if (error instanceof Error) {

                    console.error(
                        error.message
                    );

                } else {

                    console.error(error);

                }

                process.exit(1);

            }

        }
    );

program
    .command("doctor")
    .description(
        "Verify generator installation"
    )
    .action(() => {
        new DoctorCommand()
            .execute();
    });


program.parse();


