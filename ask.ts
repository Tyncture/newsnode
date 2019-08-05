import { getPost } from "./post";
import { HNAsk } from "./types";

export async function getAsk(id: number): Promise<HNAsk> {
  const post = (await getPost(id)) as HNAsk;
  return {
    ...post,
  };
}
