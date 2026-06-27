import { CheersContext } from "../../compiler/CheersContext";
import { Plugin } from "../Plugin";
export declare class CorePlugin implements Plugin {
    readonly id = "core";
    readonly version = "1.0.0";
    execute(context: CheersContext): Promise<void>;
}
