import { getDescendants } from "./comment";
import { getItem } from "./item";
import { HNComment, HNStory } from "./types";

export async function getStory(id: number): Promise<HNStory> {
  const item = (await getItem(id)) as HNStory;
  return {
    ...item,
    // Coerce types
    descendants: Number(item.descendants),
    kids: item.kids ? item.kids.map(cid => Number(cid)) : [],
    title: item.title,
    getDescendants: (): Promise<HNComment[]> =>
      item.kids ? getDescendants(item.kids) : Promise.resolve([]),
  };
}
