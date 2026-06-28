import { CheersContext } from "../compiler/CheersContext";
export class PlaceholderEngine {



    private createPlaceholders(
            context: CheersContext
          ): Map<string, string>{
        const spec = context.spec;
        const placeholders = new Map<string, string>();
        placeholders.set(
            "project.name",
            spec.project?.name ?? ""
        );
        placeholders.set(
            "project.displayName",
            spec.project?.displayName ?? ""
        );
        placeholders.set(
            "project.description",
            spec.project?.description ?? ""
        );
        placeholders.set("plugins",Object.keys(spec.plugins ?? {}).map(plugin => `- ${plugin}`).join("\n"));  
        return placeholders;
   }

    /**
     * Renders a template by replacing
     * {{project.name}}
     * {{application.domain}}
     * {{framework.frontend.name}}
     * etc.
     */

        public render(
            template: string,
            context: CheersContext
        ): string {
        
            const placeholders =
                this.createPlaceholders(context);        
            return template.replace(
                /{{\s*([a-zA-Z0-9_.]+)\s*}}/g,
                (_, expression: string) => {
                    const explicit =
                        placeholders.get(expression);
                    if (explicit !== undefined) {
                        return explicit;
                    }
                    const value =
                        this.lookup(
                            context.spec,
                            expression
                        );
                    return value == null
                        ? ""
                        : String(value);
                }
            );
        }


    /**
     * Backward compatibility.
     * Older code can continue calling process().
     */
    public process(
        template: string,
        context: CheersContext
    ): string {

        return this.render(
            template,
            context
        );

    }

    private lookup(
        model: unknown,
        path: string
    ): unknown {

        let current = model;

        for (const part of path.split(".")) {

            if (
                current === null ||
                current === undefined
            ) {

                return undefined;

            }

            current = (current as Record<string, unknown>)[part];

        }

        return current;

    }

}
