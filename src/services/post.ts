import * as mock from './post.mock';

interface UserInteraction {
  username: string;
  id: string;
}

interface PostAuthor {
  id: string;
  username: string;
  profileUrl: string;
}

export interface PostCommentItem {
  userComment: UserInteraction;
  content: string;
  time: Date;
}

export interface PostLikeItem {
  userLiked: UserInteraction;
}

export interface PostImageItem {
  src: string;
}

export interface PostItem {
  id: string;
  author: PostAuthor;
  images: PostImageItem[];
  comments: PostCommentItem[];
  likes: PostLikeItem[];
  totalLikes: number;
  totalComments: number;
  createdAt: Date;
  content?: string;
}

export const fetchPostsForNewFeed = async (): Promise<PostItem[]> => {
  return mock.mockFetchPostsForNewFeed();
};
