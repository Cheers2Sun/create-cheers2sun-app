export class PlaceholderEngine {

    /**
     * Renders a template by replacing
     * {{project.name}}
     * {{application.domain}}
     * {{framework.frontend.name}}
     * etc.
     */
    public render(
        template: string,
        model: unknown
    ): string {

        return template.replace(

            /{{\s*([a-zA-Z0-9_.]+)\s*}}/g,

            (_, expression: string) => {

                const value = this.lookup(
                    model,
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
        model: unknown
    ): string {

        return this.render(
            template,
            model
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
