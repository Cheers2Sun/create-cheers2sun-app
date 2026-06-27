import { ProjectSpec } from "../model";

export interface Plugin {
  name: string;
  generate(spec: ProjectSpec): Promise<void>;
}
