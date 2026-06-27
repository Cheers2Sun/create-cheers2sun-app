export interface ProjectSpec {
  project: {
    name: string;
  };

  framework: {
    nextjs: number;
    typescript: boolean;
  };

  modules: string[];

  providers: {
    flights?: string;
    auth?: string;
  };

  deployment: {
    platform: string;
  };
}
