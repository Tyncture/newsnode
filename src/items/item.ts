import HNApi from "../api";
import { HNItem } from "../types";

export async function getItem(id: number): Promise<HNItem> {
  const data = await HNApi.getPath(`/item/${id}.json`);
  return {
    // Let callers have the other properties too
    ...data,
    // Coerce types
    id: Number(data.id),
    by: data.by,
    time: new Date(data.time * 1000),
    type: data.type,
    dead: Boolean(data.dead),
    deleted: Boolean(data.deleted),
  }
}
