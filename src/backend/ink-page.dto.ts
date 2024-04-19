import { InksInfosDto } from "../domain/ink.interface";

export interface InkPageDto {
  inks: InksInfosDto[];
  metadata: {
    nextCursor?: string;
    totalCount: number;
  };
}
