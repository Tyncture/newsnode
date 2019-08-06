# NewsNode
![Repository Size](https://img.shields.io/github/repo-size/Tyncture/newsnode.svg?t&style=flat-square)
![License](https://img.shields.io/github/license/Tyncture/newsnode.svg?&style=flat-square)
![Top Language](https://img.shields.io/github/languages/top/Tyncture/newsnode.svg?&style=flat-square)

A client library/wrapper around the Hacker News API written for
Node.js with object mappings and TypeScript definitions. 
It should support anything that runs on the Node.js platform.

Bindings and models are designed to be as close as possible to the 
official API, while providing more predictability in terms of 
object properties.

## Usage

### Getting Started
Install the package using either npm or yarn, saving it to your project.
```sh
npm install newsnode --save
```

And then import the module into your project like so.
```js
// With ES2015/ES6
import { NewsNode } from "newsnode";
// With CommonJS
const NewsNode = require("newsnode");
```

All requests made by this package will be done asynchronously, so you should
use either `Promise.then()` or `async` and `await` to wait for the response to be
returned.

### Retreiving feed data
All methods below return an array of objects with the shape of the item type they're 
representing. You can find more by referring to [types.ts](types.ts) and 
the official [API docs](https://github.com/HackerNews/API).

```js
// Get all types of stories by ranking (up to 500)
NewsNode.feeds.getNewStories()
NewsNode.feeds.getTopStories()
NewsNode.feeds.getBestStories()

// Get the latest stories by type (up to 200)
NewsNode.feeds.getAskStories()
NewsNode.feeds.getJobStories()
NewsNode.feeds.getShowStories()

// Get only 10 items
NewsNode.feeds.getShowStories(10);

// Get only 10 items after item id 20619715
NewsNode.feeds.getShowStories(10, 20619715);
```

You can also get the latest item by calling `getMaxItem()`, which is a binding to
the `/maxitem.json` route. This only returns a single item.
```js
// Get single newest item
NewsNode.feeds.getMaxItem()
```

### Retreiving individual items
Functions found under the `items` property allow you to get indvidual items by ID.
```js
// Types of posts
NewsNode.items.getStory(20619715)
NewsNode.items.getAsk(20619715);
NewsNode.items.getJob(20619715)

// Polls
NewsNode.items.getPoll(20619715)
NewsNode.items.getPollOption(20619715)

// Comments
NewsNode.items.getComment(20619715)

// Get comment responses
const story = await NewsNode.items.getStory(20619715);
const comments = await story.getDescendants();
```

### Error handling
Request errors will be propogated to `Promise.catch()` and the `catch` block
under a `try` block in an `async`/`await` function.

## License
```
MIT License

Copyright (c) 2019 John Su

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
