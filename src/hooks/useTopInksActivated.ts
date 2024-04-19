import useSWR from "swr";
import { useBackend } from "../backend/BackendProvider";

const INKS_REFRESH_INTERVAL = 0;

export function useTopInksActivated(startDate?: Date, endDate?: Date) {
  const backend = useBackend();
  const key = [`topInksActivated`, startDate, endDate];
  return useSWR(
    key,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (_) => {
      return backend.getTopInks(true, startDate, endDate);
    },
    { refreshInterval: INKS_REFRESH_INTERVAL }
  );
}
