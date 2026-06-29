import { CheersContext } from "../../compiler/CheersContext";
import { Plugin } from "../Plugin";
import { PluginSupportResult,SUPPORTED } from "../PluginSupportResult";
import { PluginFileWriter } from "../../generator/PluginFileWriter";
export class DuffelPlugin implements Plugin {

    public readonly name = "duffel";

    public supports(context: CheersContext): PluginSupportResult {
            if (
                context.spec.application.domain !== "travel"
            ) {
        
                return {
        
                    supported: false,
        
                    reason: "requires application.domain = travel"
        
                };
        
            }
        
            return SUPPORTED;
        
    }


    public initialize(
        context: CheersContext
    ): void {

        console.log("DuffelPlugin.initialize");

    }

    public generate(
        context: CheersContext
    ): void {

       const writer =  new PluginFileWriter(context);

       writer.writeTemplate(
           "duffel/client.ts.tpl",
           "src/plugins/duffel/client.ts"
       );

       writer.writeTemplate(
           "duffel/search.ts.tpl",
           "src/plugins/duffel/search.ts"
       );

       writer.writeTemplate(
           "duffel/types.ts.tpl",
           "src/plugins/duffel/types.ts"
       );

        writer.writeTemplate(        
            "duffel/api/flights/route.ts.tpl",
            "app/api/flights/route.ts",
        );

    }

    public finalize(
        context: CheersContext
    ): void {

        console.log("DuffelPlugin.finalize");

    }

}
