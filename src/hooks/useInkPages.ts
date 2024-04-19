import { useSWRInfinite } from "swr";
import { useBackend } from "../backend/BackendProvider";
import { InkPage } from "../domain/ink-page";

const INK_PAGES_REFRESH_INTERVAL = 5000;

export function useInkPages({
  pageSize,
  search,
  startId,
  endId,
  startDate,
  endDate,
}: {
  pageSize: number;
  search?: string;
  startId?: number;
  endId?: number;
  startDate?: Date;
  endDate?: Date;
}) {
  const backend = useBackend();
  return useSWRInfinite(
    getInkPageKey(search, startId, endId, startDate, endDate),
    async (
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ...[_, search, startId, endId, cursor, startDate, endDate]: InkPageKey
    ) => {
      return backend.getInkPage({
        limit: pageSize,
        search,
        cursor,
        startId,
        endId,
        startDate,
        endDate,
      });
    },
    { refreshInterval: INK_PAGES_REFRESH_INTERVAL }
  );
}

type InkPageKey = [
  "ink-pages",
  string | undefined, // Search
  number | undefined, // startDate
  number | undefined, // endDate
  string | undefined, // Cursor
  Date | undefined, // startDate
  Date | undefined // endDate
];

function getInkPageKey(
  search?: string,
  startId?: number,
  endId?: number,
  startDate?: Date,
  endDate?: Date
): (pageIndex: number, previousPageData: InkPage | null) => InkPageKey | null {
  return (pageIndex, previousPageData) => {
    // Reached the end
    if (previousPageData && !previousPageData?.metadata?.nextCursor) {
      return null;
    }

    // First page
    if (pageIndex === 0) {
      return [
        "ink-pages",
        search,
        startId,
        endId,
        undefined,
        startDate,
        endDate,
      ];
    }

    // Return key for next page
    return [
      "ink-pages",
      search,
      startId,
      endId,
      previousPageData?.metadata?.nextCursor,
      startDate,
      endDate,
    ];
  };
}
