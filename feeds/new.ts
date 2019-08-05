import HNApi from "../api";
import { getStory } from "../models/story";
import { HNStory } from "../types";

export async function getNewStories(
  limit: number = 100,
  afterId?: number,
): Promise<HNStory[]> {
  const data = await HNApi.getPath("/newstories.json");
  if (Array.isArray(data)) {
    const requests = [];
    // Requests can be slow, so allow for a limit to be set
    for (let i = 0; i < Math.min(data.length, limit); i++) {
      // Explicitly check against null to account for when ID passed
      // in is zero. == operator should also match against undefined.
      if (afterId == null || data[i] > afterId) {
        requests.push(getStory(data[i]));
      }
    }
    return Promise.all(requests);
  }
  return [];
}
