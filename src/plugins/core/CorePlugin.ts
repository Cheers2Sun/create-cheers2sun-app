import { CheersContext } from "../../compiler/CheersContext";
import { Plugin } from "../Plugin";
import { PluginSupportResult,SUPPORTED } from "../PluginSupportResult";
export class CorePlugin implements Plugin {

    public readonly name = "core";

    public supports(context: CheersContext): PluginSupportResult {
        return  SUPPORTED;
    }

    public initialize(
        context: CheersContext
    ): void {

        console.log("CorePlugin.initialize");

    }

    public generate(
        context: CheersContext
    ): void {

        console.log("CorePlugin.generate");

    }

    public finalize(
        context: CheersContext
    ): void {

        console.log("CorePlugin.finalize");

    }

}
