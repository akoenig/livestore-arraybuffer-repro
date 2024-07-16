import { makeWorker } from "@livestore/web/worker";

import { schema } from "./schema.ts";

makeWorker({ schema });
