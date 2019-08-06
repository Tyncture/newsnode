import { HNAsk } from "../types";
import { getFeed } from "./feed";

export async function getAskStories(
  limit: number = 100,
  afterId: number = 0,
): Promise<HNAsk[]> {
  return (await getFeed("askstories", limit, afterId)) as HNAsk[];
}
