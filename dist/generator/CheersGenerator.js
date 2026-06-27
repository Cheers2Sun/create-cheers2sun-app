"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheersGenerator = void 0;
const CheersProjectWriter_1 = require("./CheersProjectWriter");
class CheersGenerator {
    generate(context) {
        console.log("Generating project...");
        const writer = new CheersProjectWriter_1.CheersProjectWriter();
        writer.write(context);
        console.log("Generation completed.");
    }
}
exports.CheersGenerator = CheersGenerator;
