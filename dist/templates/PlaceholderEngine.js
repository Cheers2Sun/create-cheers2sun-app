"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceholderEngine = void 0;
class PlaceholderEngine {
    /**
     * Replaces all supported placeholders in the template.
     */
    process(content, context) {
        let output = content;
        const replacements = {
            PROJECT_NAME: context.spec.project.name,
            APP_DOMAIN: context.spec.application.domain,
            TEMPLATE_NAME: context.spec.application.template,
            SPEC_VERSION: context.spec.version.toString()
        };
        for (const [key, value] of Object.entries(replacements)) {
            output = output.replaceAll(`{{${key}}}`, value);
        }
        return output;
    }
}
exports.PlaceholderEngine = PlaceholderEngine;
