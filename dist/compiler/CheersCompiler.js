"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheersCompiler = void 0;
const CheersParser_1 = require("./CheersParser");
const CheersValidator_1 = require("./CheersValidator");
const TemplateLoader_1 = require("../templates/TemplateLoader");
const CheersGenerator_1 = require("../generator/CheersGenerator");
class CheersCompiler {
    compile(specFile, outputDirectory) {
        const parser = new CheersParser_1.CheersParser();
        const validator = new CheersValidator_1.CheersValidator();
        const loader = new TemplateLoader_1.TemplateLoader();
        const generator = new CheersGenerator_1.CheersGenerator();
        const spec = parser.parse(specFile);
        validator.validate(spec);
        const manifest = loader.loadManifest(spec.version, spec.application.template);
        const templates = loader.resolveTemplateChain(manifest);
        const context = {
            spec,
            root: process.cwd(),
            output: outputDirectory,
            manifest,
            templates
        };
        generator.generate(context);
    }
}
exports.CheersCompiler = CheersCompiler;
