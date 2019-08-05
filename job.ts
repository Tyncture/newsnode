import { getPost } from "./post";
import { HNJob } from "./types";

export async function getJob(id: number): Promise<HNJob> {
  const post = (await getPost(id)) as HNJob;
  return {
    ...post,
  };
}
