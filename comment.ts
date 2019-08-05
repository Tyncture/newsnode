import { getItem } from "./item";
import { HNComment } from "./types";

export async function getComment(id: number): Promise<HNComment> {
  const item = (await getItem(id)) as HNComment;
  return {
    ...item,
    // Coerce types
    descendants: Number(item.descendants),
    parent: item.parent,
    kids: item.kids ? item.kids.map(cid => Number(cid)) : [],
    text: item.text,
    getDescendants: (): Promise<HNComment[]> =>
      item.kids ? getDescendants(item.kids) : Promise.resolve([]),
  };
}


export async function getDescendants(
  childrenIds: number[],
): Promise<HNComment[]> {
  const requests = childrenIds.map(id => getItem(id));
  const descendants = (await Promise.all(requests)).map(item => {
    const comment = item as HNComment;
    return {
      ...comment,
      /// Coerce types
      descendants: Number(comment.descendants),
      parent: comment.parent ? Number(comment.parent) : [],
      kids: comment.kids ? comment.kids.map(cid => Number(cid)) : [],
      text: comment.text,
      getDescendants: () =>
        comment.kids ? getDescendants(comment.kids) : Promise.resolve([]),
    };
  }) as HNComment[];
  return descendants;
}
