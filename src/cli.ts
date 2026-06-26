import { Command } from "commander";
import { generateProject } from "./generator";

export function runCli() {

    const program = new Command();

    program
        .name("create-cheers2sun-app")
        .description("Cheers2Sun Application Generator")
        .version("0.0.1");

    program
        .argument("<project-name>")
        .action(async (projectName) => {
            await generateProject(projectName);
        });

    program.parse();
}
