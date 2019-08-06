import { HNStory } from "../types";
import { getFeed } from "./feed";

export async function getAskStories(
  limit: number = 100,
  afterId: number = 0,
): Promise<HNStory[]> {
  return (await getFeed("askstories", limit, afterId)) as HNStory[];
}
