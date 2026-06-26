"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCli = runCli;
const commander_1 = require("commander");
const generator_1 = require("./generator");
function runCli() {
    const program = new commander_1.Command();
    program
        .name("create-cheers2sun-app")
        .description("Cheers2Sun Application Generator")
        .version("0.0.1");
    program
        .argument("<project-name>")
        .action(async (projectName) => {
        await (0, generator_1.generateProject)(projectName);
    });
    program.parse();
}
