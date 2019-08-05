import { getPost } from "./post";
import { HNStory } from "./types";

export async function getStory(id: number): Promise<HNStory> {
  const post = (await getPost(id)) as HNStory;
  return {
    ...post,
  };
}
