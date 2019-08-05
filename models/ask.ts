import { HNAsk } from "../types";
import { getPost } from "./post";

export async function getAsk(id: number): Promise<HNAsk> {
  const post = (await getPost(id)) as HNAsk;
  return {
    ...post,
  };
}
