import { ProjectSpec } from "./model";

export function validate(spec: ProjectSpec): void {
  if (!spec.project?.name) {
    throw new Error("Project name is required.");
  }

  if (!spec.framework?.typescript) {
    throw new Error("TypeScript must be enabled.");
  }
}
