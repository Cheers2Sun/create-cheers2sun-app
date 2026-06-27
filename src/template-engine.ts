import fs from "fs-extra";

export async function renderTemplate(
  templateFile: string,
  destinationFile: string,
  variables: Record<string, string>
) {
  let content = await fs.readFile(templateFile, "utf8");

  for (const [key, value] of Object.entries(variables)) {
    content = content.replaceAll(`{{${key}}}`, value);
  }

  await fs.writeFile(destinationFile, content);
}
