import { HNStory } from "../../types";
import { getFeed } from "../feed";

export async function getBestStories(
  limit: number = 100,
  afterId: number = 0,
): Promise<HNStory[]> {
  return (await getFeed("beststories", limit, afterId)) as HNStory[];
}
