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
  createdAt: Date;
  author: PostAuthor;
  images: PostImageItem[];
  comments: PostCommentItem[];
  likes: PostLikeItem[];
  totalLikes: number;
  totalComments: number;
  content?: string;
}

export interface PostState {
  posts: PostItem[];
}
