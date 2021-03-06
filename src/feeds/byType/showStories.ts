import { HNStory } from "../../types";
import { getFeed } from "../feed";

export async function getShowStories(
  limit: number = 100,
  afterId: number = 0,
): Promise<HNStory[]> {
  return (await getFeed("showstories", limit, afterId)) as HNStory[];
}
