import { CheersContext } from "../../compiler/CheersContext";
import { Plugin } from "../Plugin";
import { PluginSupportResult,SUPPORTED } from "../PluginSupportResult";
import { PluginFileWriter } from "../../generator/PluginFileWriter";

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
        const writer =
            new PluginFileWriter(context);
    
        writer.writeTemplate(
            "supabase/client.ts.tpl",
            "src/plugins/supabase/client.ts"
        );
    
        writer.writeTemplate(
            "supabase/server.ts.tpl",
            "src/plugins/supabase/server.ts"
        );
    
        writer.writeTemplate(
            "supabase/middleware.ts.tpl",
            "src/plugins/supabase/middleware.ts"
        );
    
        writer.writeTemplate(
            "supabase/env.example.tpl",
            ".env.example"
        );

    }

    public finalize(
        context: CheersContext
    ): void {

        console.log("SupabasePlugin.finalize");

    }

}
