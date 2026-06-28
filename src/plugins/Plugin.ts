import { CheersContext } from "../compiler/CheersContext";
import { PluginSupportResult } from "./PluginSupportResult";
export interface Plugin {

    /**
     * Unique plugin name.
     * Example:
     *  core
     *  duffel
     *  supabase
     */
    readonly name: string;

    /**
     * Determines whether this plugin should run.
     * Default implementation is handled by each plugin.
     */
    supports?(
        context: CheersContext
    ): PluginSupportResult;

    /**
     * Called before generation begins.
     */
    initialize(
        context: CheersContext
    ): void;

    /**
     * Generate plugin artifacts.
     */
    generate(
        context: CheersContext
    ): void;

    /**
     * Cleanup/finalization.
     */
    finalize(
        context: CheersContext
    ): void;

}
