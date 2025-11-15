import { useEffect, useRef, useState } from "react";

type QueryState<T> =
  | { status: "pending" }
  | { status: "success"; response: T }
  | { status: "error"; error: unknown };

export function useQuery<T>(stableQueryFn: () => Promise<T>) {
  const [queryState, setQueryState] = useState<QueryState<T>>({
    status: "pending",
  });

  useEffect(() => {
    // todo: don't double exec in strict mode
    stableQueryFn()
      .then((response) => setQueryState({ status: "success", response }))
      .catch((error) => setQueryState({ status: "error", error }));
  }, [stableQueryFn]);

  return queryState;
}
