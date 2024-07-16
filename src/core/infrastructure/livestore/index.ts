import { makeAdapter } from "@livestore/web";

import LiveStoreWorker from "./worker.ts?worker";

export { schema } from "./schema.ts";

// TODO: Add sync configuration
export const livestoreAdapter = makeAdapter({
  storage: { type: "opfs" },
  worker: LiveStoreWorker,
});
