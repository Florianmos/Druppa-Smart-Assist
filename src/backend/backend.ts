import { AuthContextProps } from "@mgi-labs/mgi-id";




export default class Backend {
  constructor(
    public readonly backendUrl: string,
    private readonly auth: AuthContextProps,
    private readonly fetch: typeof window.fetch = (...args) =>
      window.fetch(...args)
  ) {}







  async getUserInfos(email: string) {
    const url = this.expandURL(`headboard/user-infos/${email}`);
    const response = await this.fetchWithAuth(url);
    if (!response.ok) {
      throw new Error("Could not get user infos from server");
    }

    return await response.json();
  }

  async getTotalInk(
    activated: boolean,
    startDate?: Date,
    endDate?: Date
  ): Promise<number> {
    const searchParams: Record<string, string> = {};
    if (startDate) {
      searchParams["startDate"] = new Date(startDate).toISOString();
    }
    if (endDate) {
      searchParams["endDate"] = new Date(endDate).toISOString();
    }

    const url =
      this.expandURL(`inks/totalInks?activated=${activated}`) +
      "&" +
      new URLSearchParams(searchParams);
    const response = await this.fetchWithAuth(url);
    if (!response.ok) {
      throw new Error("Could not get total of inks from server");
    }

    return (await response.json()) as number;
  }


  async getMachineConnectionDate(type: string, serialNumber: string) {
    const url = this.expandURL(
      `inks/machine-date?type=${type}&serialNumber=${serialNumber}`
    );
    const response = await this.fetchWithAuth(url);
    if (!response.ok) {
      throw new Error(
        `Could not get connection date of machine ${type} from server`
      );
    }
    const res = (await response.json()) as { date: Date };
    return res.date;
  }

  private expandURL(path: string): string {
    return this.backendUrl !== ""
      ? new URL(path, this.backendUrl).toString()
      : path;
  }

  private async fetchWithAuth(
    input: RequestInfo,
    init: RequestInit = {}
  ): Promise<Response> {
    init.headers = new Headers(init.headers);
    init.headers.set("Authorization", `Bearer ${this.auth.user.access_token}`);
    return await this.fetch(input, init);
  }
}
