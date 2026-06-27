import { CheersContext } from "../compiler/CheersContext";

export class PlaceholderEngine {

    /**
     * Replaces all supported placeholders in the template.
     */
    public process(
        content: string,
        context: CheersContext
    ): string {

        let output = content;

        const replacements: Record<string, string> = {

            PROJECT_NAME:
                context.spec.project.name,

            APP_DOMAIN:
                context.spec.application.domain,

            TEMPLATE_NAME:
                context.spec.application.template,

            SPEC_VERSION:
                context.spec.version.toString()

        };

        for (const [key, value] of Object.entries(replacements)) {

            output = output.replaceAll(
                `{{${key}}}`,
                value
            );

        }

        return output;

    }

}
