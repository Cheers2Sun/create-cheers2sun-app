import { CheersContext } from "../../compiler/CheersContext";
import { Plugin } from "../Plugin";

export class DuffelPlugin implements Plugin {

  public readonly id = "duffel";

  public readonly version = "1.0.0";

  public async execute(
    context: CheersContext
  ): Promise<void> {

    console.log("Duffel plugin loaded.");

  }

}
