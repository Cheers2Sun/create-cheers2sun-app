"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateProject = generateProject;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
async function generateProject(projectName) {
    const projectDir = path_1.default.join(process.cwd(), projectName);
    await fs_extra_1.default.ensureDir(projectDir);
    await fs_extra_1.default.writeFile(path_1.default.join(projectDir, "README.md"), `# ${projectName}\n`);
    await fs_extra_1.default.writeJson(path_1.default.join(projectDir, "package.json"), {
        name: projectName,
        version: "1.0.0"
    }, { spaces: 2 });
    await fs_extra_1.default.writeFile(path_1.default.join(projectDir, "spec.yaml"), `version: 1.0

project:
  name: ${projectName}
`);
    console.log("Project created:", projectDir);
}
