import { HNStory } from "../../types";
import { getFeed } from "../feed";

export async function getNewStories(
  limit: number = 100,
  afterId: number = 0,
): Promise<HNStory[]> {
  return await getFeed("newstories", limit, afterId) as HNStory[];
}
