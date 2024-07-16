import { livestoreAdapter, schema } from "./infrastructure/livestore/index.ts";
import { makeCreateProjectId } from "./use-cases/create-project-id.ts";

function makeCore() {
  const infrastructure = {
    livestoreSchema: schema,
    livestoreAdapter,
  };

  const useCases = {
    createProjectId: makeCreateProjectId(),
  };

  return { infrastructure, useCases } as const;
}

export const core = makeCore();
