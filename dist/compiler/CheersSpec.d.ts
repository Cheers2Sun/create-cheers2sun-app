export interface CheersSpec {
    version: number;
    project: {
        name: string;
        displayName?: string;
        organization?: string;
    };
    application: {
        domain: string;
        template: string;
        description?: string;
    };
    framework: {
        frontend: {
            name: string;
            version: number;
        };
        language: {
            name: string;
            version: number;
        };
    };
    deployment: {
        provider: string;
    };
    theme: {
        mode: "light" | "dark";
        colors: {
            primary: string;
            secondary: string;
        };
    };
    modules: Record<string, {
        enabled: boolean;
    }>;
    plugins: Record<string, {
        enabled: boolean;
        provider?: string;
    }>;
    business: {
        enabled: boolean;
    };
    metadata: {
        author?: string;
        license?: string;
    };
}
