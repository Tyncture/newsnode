import { HNJob } from "../../types";
import { getFeed } from "../feed";

export async function getJobStories(
  limit: number = 100,
  afterId: number = 0,
): Promise<HNJob[]> {
  return (await getFeed("jobstories", limit, afterId)) as HNJob[];
}
