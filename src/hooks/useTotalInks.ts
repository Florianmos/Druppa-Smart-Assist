import useSWR from "swr";
import { useBackend } from "../backend/BackendProvider";

const INKS_REFRESH_INTERVAL = 0;

export function useTotalInks(startDate?: Date, endDate?: Date) {
  const backend = useBackend();
  const key = [`total`, startDate, endDate];
  return useSWR(
    key,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (_) => {
      return backend.getTotalInk(false, startDate, endDate);
    },
    { refreshInterval: INKS_REFRESH_INTERVAL }
  );
}
