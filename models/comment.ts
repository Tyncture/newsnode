import { HNComment, HNItem } from "../types";
import { getItem } from "./item";

export async function getComment(id: number): Promise<HNComment> {
  const item = await getItem(id);
  return coerceComment(item);
}

export async function getDescendants(
  childrenIds: number[],
): Promise<HNComment[]> {
  const requests = childrenIds.map(id => getItem(id));
  const descendants = (await Promise.all(requests)).map(item =>
    coerceComment(item),
  );
  return descendants;
}

function coerceComment(item: HNItem): HNComment {
  const comment = item as HNComment;
  const descendants = comment.kids ? comment.kids.map(cid => Number(cid)) : [];
  return {
    ...comment,
    /// Coerce types
    descendants: comment.kids ? comment.kids.reduce(prev => prev + 1, 0) : 0,
    parent: comment.parent ? Number(comment.parent) : undefined,
    kids: descendants,
    getDescendants: () => getDescendants(descendants),
  };
}
