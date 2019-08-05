export interface HNItem {
  /* Unique numerical ID */
  id: number;
  /* Username of user who submitted the item */
  by: string;
  /* Date object representing time of submission */
  time: Date;
  /* Type of "job", "story", "comment", "poll", or "pollopt" */
  type: "job" | "story" | "comment" | "poll" | "pollopt";
  /* Whether the item is dead */
  dead: boolean;
  /* Whether the item is deleted */
  deleted: boolean;
  /* Remaining properties */
  [k: string]: any;
}

export interface HNPost extends HNItem {
  /* Nymber of comments */
  descendants: number;
  /* IDs of top-level comments */
  kids: number[];
  /* Item title */
  title: string;
  /* Karma/score count */
  score: number;
  /* Get the comments */
  getDescendants: () => Promise<HNComment[]>;
}

export interface HNStory extends HNPost {
  /* URL submitted with this item */
  url: string;
}

export interface HNAsk extends HNPost {
  /* Item text */
  text: string;
}

export interface HNPoll extends HNPost {
  /* Item text */
  text: string;
}

export interface HNJob extends HNPost {
  /* Item text */
  text: string;
  /* URL submitted with this item */
  url: string;
}

export interface HNComment extends HNItem {
  /* Nymber of subcomments */
  descendants: number;
  /* Parent comment, if applicable */
  parent?: number;
  /* IDs of subcomments */
  kids: number[];
  /* Item text */
  text: string;
  /* Get the subcomments */
  getDescendants: () => Promise<HNComment[]>;
}

export interface HNPollOption extends HNItem {
  /* Poll ID */
  poll: number;
  /* Item text */
  text: string;
  /* Get the parent HNPoll */
  getPoll: () => Promise<HNPoll>; 
}

export interface HNUser {
  /* User's case sensitive name*/
  id: string;
  /* Delay between user's submissions and site visibility */
  delay: number; 
  /* Date object representing the time of the user's accoutn creation */
  created: Date;
  /* User's total karma count */
  karma: number;
  /* Optional self description added by the user */
  about?: string;
  /* IDs of HNItems submitted */
  submitted: number[];
}
