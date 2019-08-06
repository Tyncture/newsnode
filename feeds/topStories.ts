import { HNStory } from "../types";
import { getFeed } from "./feed";

export async function getTopStories(
  limit: number = 100,
  afterId: number = 0,
): Promise<HNStory[]> {
  return (await getFeed("topstories", limit, afterId)) as HNStory[];
}
