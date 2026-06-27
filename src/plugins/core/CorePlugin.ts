import { CheersContext } from "../../compiler/CheersContext";
import { Plugin } from "../Plugin";

export class CorePlugin implements Plugin {

  public readonly id = "core";

  public readonly version = "1.0.0";

  public async execute(
    context: CheersContext
  ): Promise<void> {

    console.log("Core plugin loaded.");

  }

}
