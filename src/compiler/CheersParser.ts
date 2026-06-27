import * as fs from "node:fs";
import * as path from "node:path";
import yaml from "js-yaml";

import { CheersSpec } from "./CheersSpec";

export class CheersParser {
  /**
   * Loads and parses a cheers.yaml file.
   */
  public parse(filePath: string): CheersSpec {
    const absolutePath = path.resolve(filePath);

    if (!fs.existsSync(absolutePath)) {
      throw new Error(
        `Cheers specification not found: ${absolutePath}`
      );
    }

    const fileContents = fs.readFileSync(absolutePath, "utf8");

    const spec = yaml.load(fileContents);

    if (!spec) {
      throw new Error("Unable to parse cheers.yaml.");
    }

    return spec as CheersSpec;
  }
}
