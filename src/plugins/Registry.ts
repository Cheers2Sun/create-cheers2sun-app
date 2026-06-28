import { PluginManager } from "./PluginManager";

import { CorePlugin } from "./core/CorePlugin";
import { DuffelPlugin } from "./duffel/DuffelPlugin";
import { SupabasePlugin } from "./supabase/SupabasePlugin";

export class Registry {

    public static create(): PluginManager {

        const manager = new PluginManager();

        manager.register(
            new CorePlugin()
        );

        manager.register(
            new DuffelPlugin()
        );

        manager.register(
            new SupabasePlugin()
        );

        return manager;

    }

}
