import { CheersContext } from "../../compiler/CheersContext";
import { Plugin } from "../Plugin";

export class SupabasePlugin implements Plugin {

  public readonly id = "supabase";

  public readonly version = "1.0.0";

  public async execute(
    context: CheersContext
  ): Promise<void> {

    console.log("Supabase plugin loaded.");

  }

}
