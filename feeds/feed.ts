import HNApi from "../api";
import { getPost } from "../models/post";
import { HNPost } from "../types";

export async function getFeed(
  feed: string,
  limit: number = 100,
  afterId: number = 0,
): Promise<HNPost[]> {
  const data = await HNApi.getPath(`/${feed}.json`);
  if (Array.isArray(data)) {
    const requests = [];
    // Requests can be slow, so allow for a limit to be set
    for (let i = 0; i < Math.min(data.length, limit); i++) {
      // And an ID offset to pickup from last query
      if (data[i] > afterId) {
        requests.push(getPost(data[i]));
      }
    }
    return Promise.all(requests);
  }
  return [];
}
