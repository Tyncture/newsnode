import { HNComment, HNPost } from "../types";
import { getDescendants } from "./comment";
import { getItem } from "./item";

export async function getPost(id: number): Promise<HNPost> {
  const item = (await getItem(id)) as HNPost;
  return {
    ...item,
    // Coerce types
    descendants: Number(item.descendants),
    kids: item.kids ? item.kids.map(cid => Number(cid)) : [],
    score: Number(item.score),
    getDescendants: (): Promise<HNComment[]> =>
      item.kids ? getDescendants(item.kids) : Promise.resolve([]),
  };
}
