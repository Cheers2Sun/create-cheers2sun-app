export interface TemplateManifest {
    version: number;

    template: string;

    extends: string[];

    plugins: string[];

    theme?: {
        default: string;
    };
}
