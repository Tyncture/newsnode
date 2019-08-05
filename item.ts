import HNApi from "./api";
import { HNItem } from "./types";

export async function getItem(id: number): Promise<HNItem> {
  const data = await HNApi.getPath(`/item/${id}`);
  return {
    // Let callers have the other properties too
    ...data,
    // Coerce types
    id: Number(data.id),
    by: data.by,
    score: Number(data.score),
    time: new Date(data.time),
    type: data.type,
    dead: Boolean(data.dead),
    deleted: Boolean(data.deleted),
  }
}
