import { CheersContext } from "../../compiler/CheersContext";
import { Plugin } from "../Plugin";
import { PluginSupportResult,SUPPORTED } from "../PluginSupportResult";
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

        console.log("DuffelPlugin.generate");

    }

    public finalize(
        context: CheersContext
    ): void {

        console.log("DuffelPlugin.finalize");

    }

}
