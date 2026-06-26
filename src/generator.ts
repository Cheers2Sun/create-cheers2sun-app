import fs from "fs-extra";
import path from "path";

export async function generateProject(projectName: string) {
    const projectDir = path.join(process.cwd(), projectName);

    await fs.ensureDir(projectDir);

    await fs.writeFile(
        path.join(projectDir, "README.md"),
        `# ${projectName}\n`
    );

    await fs.writeJson(
        path.join(projectDir, "package.json"),
        {
            name: projectName,
            version: "1.0.0"
        },
        { spaces: 2 }
    );

    await fs.writeFile(
        path.join(projectDir, "spec.yaml"),
`version: 1.0

project:
  name: ${projectName}
`
    );

    console.log("Project created:", projectDir);
}
