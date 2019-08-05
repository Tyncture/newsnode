import { HNJob } from "../types";
import { getPost } from "./post";

export async function getJob(id: number): Promise<HNJob> {
  const post = (await getPost(id)) as HNJob;
  return {
    ...post,
  };
}
