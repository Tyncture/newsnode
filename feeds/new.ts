import HNApi from "../api";
import { getStory } from "../models/story";
import { HNStory } from "../types";

export async function getNewStories(
  limit: number = 100,
  afterId: number = 0,
): Promise<HNStory[]> {
  const data = await HNApi.getPath("/newstories.json");
  if (Array.isArray(data)) {
    const requests = [];
    // Requests can be slow, so allow for a limit to be set
    for (let i = 0; i < Math.min(data.length, limit); i++) {
      // And an ID offset to pickup from last query
      if (data[i] > afterId) {
        requests.push(getStory(data[i]));
      }
    }
    return Promise.all(requests);
  }
  return [];
}
