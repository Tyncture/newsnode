import { HNStory } from "../types";
import { getPost } from "./post";

export async function getStory(id: number): Promise<HNStory> {
  const post = (await getPost(id)) as HNStory;
  return {
    ...post,
  };
}
