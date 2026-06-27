import { CheersContext } from "../compiler/CheersContext";
export interface Plugin {
    readonly id: string;
    readonly version: string;
    execute(context: CheersContext): Promise<void>;
}
