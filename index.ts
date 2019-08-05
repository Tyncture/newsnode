import { getNewStories } from "./feeds/new";
import models from "./models";

getNewStories(10, 20619596).then(s => console.log(s));

const NewsNode = {
  ...models
}

export default NewsNode;
