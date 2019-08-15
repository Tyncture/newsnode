import HNApi from "../api";
import { getPost } from "../items/post";
import { HNPost } from "../types";

export async function getFeed(
  feed: string,
  limit: number = 100,
  afterId: number = 0,
): Promise<HNPost[]> {
  const posts = [] as HNPost[];
  const feedData = await HNApi.getPath(`/${feed}.json`);
  if (Array.isArray(feedData)) {
    const requests = [];
    // Requests can be slow, so allow for a limit to be set
    for (let i = 0; i < Math.min(feedData.length, limit); i++) {
      // And an ID offset to pickup from last query
      if (feedData[i] > afterId) {
        requests.push((async () => {
          // If the post is too recent, the API may return a 404,
          // so only push to array if not null/undefined
          const postData = await getPost(feedData[i]);
          if (postData) {
            posts.push(postData);
          }
        })());
        // Anonymous async functions do not immediately return
        // promises without giving them a call first
      }
    }
    // Wait for all requests to complete
    await Promise.all(requests);
    return posts;
  }
  return [];
}
