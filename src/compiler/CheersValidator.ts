import { CheersSpec } from "./CheersSpec";

export class CheersValidator {
  public validate(spec: CheersSpec): void {

    if (spec.version !== 1) {
      throw new Error(
        `Unsupported specification version: ${spec.version}`
      );
    }

    if (!spec.project?.name?.trim()) {
      throw new Error("project.name is required.");
    }

    if (!spec.application?.domain?.trim()) {
      throw new Error("application.domain is required.");
    }

    if (!spec.application?.template?.trim()) {
      throw new Error("application.template is required.");
    }

    if (!spec.framework?.frontend?.name?.trim()) {
      throw new Error("framework.frontend.name is required.");
    }

    if (!spec.framework?.language?.name?.trim()) {
      throw new Error("framework.language.name is required.");
    }

    if (!spec.deployment?.provider?.trim()) {
      throw new Error("deployment.provider is required.");
    }

    if (!spec.theme) {
      throw new Error("theme section is required.");
    }

    if (!spec.modules) {
      throw new Error("modules section is required.");
    }

    if (!spec.plugins) {
      throw new Error("plugins section is required.");
    }

    if (!spec.business) {
      throw new Error("business section is required.");
    }
  }
}
