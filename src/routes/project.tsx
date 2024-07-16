import { LiveStoreProvider } from "@livestore/livestore/react";
import { useParams } from "react-router-dom";

import { schema } from "@/core/infrastructure/livestore/schema.ts";
import LiveStoreWorker from '@/core/infrastructure/livestore/worker.ts?worker'
import { makeAdapter } from "@livestore/web";

const adapter = makeAdapter({ storage: { type: 'opfs' }, worker: LiveStoreWorker })

export function Project() {
  const params = useParams();

  return (
    <LiveStoreProvider
      schema={schema}
      adapter={adapter}
      renderLoading={(_) => <div>Loading LiveStore ({_.stage})...</div>}
    >
      <div>Project: {params.id}</div>
    </LiveStoreProvider>
  );
}
