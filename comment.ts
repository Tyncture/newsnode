import { getItem } from "./item";
import { HNComment, HNItem } from "./types";

export async function getComment(id: number): Promise<HNComment> {
  const item = await getItem(id);
  return coerceComment(item);
}

export async function getDescendants(childrenIds: number[]): Promise<HNComment[]> {
  const requests = childrenIds.map(id => getItem(id));
  const descendants = (await Promise.all(requests)).map(item =>
    coerceComment(item),
  );
  return descendants;
}

function coerceComment(item: HNItem): HNComment {
  const comment = item as HNComment;
  return {
    ...comment,
    /// Coerce types
    descendants: Number(comment.descendants),
    parent: comment.parent ? Number(comment.parent) : undefined,
    kids: comment.kids ? comment.kids.map(cid => Number(cid)) : [],
    text: comment.text,
    getDescendants: () =>
      comment.kids ? getDescendants(comment.kids) : Promise.resolve([]),
  };
}
