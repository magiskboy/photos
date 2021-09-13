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
  author: PostAuthor;
  images: PostImageItem[];
  comments: PostCommentItem[];
  likes: PostLikeItem[];
  totalLikes: number;
  totalComments: number;
}

export interface PostState {
  posts: PostItem[];
}
