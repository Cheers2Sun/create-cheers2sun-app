import { CheersContext } from "../../compiler/CheersContext";
import { Plugin } from "../Plugin";
export declare class SupabasePlugin implements Plugin {
    readonly id = "supabase";
    readonly version = "1.0.0";
    execute(context: CheersContext): Promise<void>;
}
