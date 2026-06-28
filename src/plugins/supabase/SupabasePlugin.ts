import { CheersContext } from "../../compiler/CheersContext";
import { Plugin } from "../Plugin";
import { PluginSupportResult,SUPPORTED } from "../PluginSupportResult";
export class SupabasePlugin implements Plugin {

    public readonly name = "supabase";

    public supports(context: CheersContext): PluginSupportResult {
       return SUPPORTED;
      /* return context.spec.plugins.supabase === true; */
    }

    public initialize(
        context: CheersContext
    ): void {

        console.log("SupabasePlugin.initialize");

    }

    public generate(
        context: CheersContext
    ): void {

        console.log("SupabasePlugin.generate");

    }

    public finalize(
        context: CheersContext
    ): void {

        console.log("SupabasePlugin.finalize");

    }

}
