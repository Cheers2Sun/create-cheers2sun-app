import { CheersContext } from "../compiler/CheersContext";
export declare class PlaceholderEngine {
    /**
     * Replaces all supported placeholders in the template.
     */
    process(content: string, context: CheersContext): string;
}
