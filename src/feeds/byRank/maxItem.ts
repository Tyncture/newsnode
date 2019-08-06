import HNApi from "../../api";
import { getItem } from "../../items/item";
import { HNItem } from "../../types";

export async function getMaxItem(): Promise<HNItem> {
  const id = Number(await HNApi.getPath("/maxitem.json"));
  return await getItem(id);
}
