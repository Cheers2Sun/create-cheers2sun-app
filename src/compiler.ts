import { ProjectSpec } from "./model";
import { validate } from "./validator";

export async function compile(spec: ProjectSpec): Promise<void> {
  validate(spec);

  console.log(`Compiling ${spec.project.name}...`);

  // Plugins will be invoked here in future sprints.
}
