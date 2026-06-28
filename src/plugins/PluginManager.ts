import { CheersContext } from "../compiler/CheersContext";
import { Plugin } from "./Plugin";
import { PluginExecutionResult } from "./PluginExecutionResult";
import { SUPPORTED } from "./PluginSupportResult";
export class PluginManager {

    private readonly plugins = new Map<string, Plugin>();

    /**
     * Register a plugin.
     */
    public register(
        plugin: Plugin
    ): void {

        if (this.plugins.has(plugin.name)) {
              throw new Error(
                  `Duplicate plugin registration: '${plugin.name}'`
              );
        }
        this.plugins.set(
            plugin.name,
            plugin
        );

    }

    /**
     * Execute enabled plugins.
     */
    public execute(
        context: CheersContext
    ): PluginExecutionResult {

         const result: PluginExecutionResult = {
               executed: [],
               skipped: [],
               failed: []
        };

        if (!context.spec.plugins) {
            return result;
        }

           for (const feature of Object.keys(context.spec.plugins)) {
                const config = context.spec.plugins[feature]
                if (!config) {
                  continue;
                }
                const provider = config.provider ?? "";
                const plugin = this.plugins.get(provider);
                if (!plugin) { 
                    console.warn(
                    `⚠ Plugin '${provider}' required for '${feature}' is not installed.`
                    );
                
                    result.skipped.push(
                          `${feature} (${provider} not installed)`
                    );
                
                    continue;
                }


            const support = plugin.supports ? plugin.supports(context): SUPPORTED;
            if (!support.supported) {
                 const reason = support.reason ?? "unsupported";
                 
                 console.log(
                   `Skipping plugin '${plugin.name}'` +
                    (support.reason
                        ? ` (${reason})`
                        : "")
                 );
                 result.skipped.push(
                   `${plugin.name} (${reason})`
                 );
                 continue;

           }

            console.log(
                `Running plugin: ${plugin.name}`
            );

            try {
            
                plugin.initialize(context);
            
                plugin.generate(context);
            
                plugin.finalize(context);
            
                result.executed.push(
                    plugin.name
                );
            
            }
            catch (error) {
            
                console.error(
                    `Plugin '${plugin.name}' failed.`
                );
            
                if (error instanceof Error) {
            
                    console.error(
                        error.message
                    );
            
                }
            
                result.failed.push(
                    plugin.name
                );
            
            }


        }
        return result;

    }

}
