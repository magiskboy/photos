import { PostItem } from './post';

export const mockFetchPostsForNewFeed = (): PostItem[] => {
  return [
    {
      author: {
        id: '001',
        username: 'thanh.nk',
        profileUrl:
          'https://lh3.googleusercontent.com/a-/AOh14GiOiLUW-E3sVAQsj46HsH1l9AevQsiztJrD6UP9vg=s288-p-rw-no',
      },
      comments: [],
      likes: [],
      images: [],
      totalLikes: 0,
      totalComments: 0,
    },
    {
      author: {
        id: '002',
        username: 'tramytrang.1',
        profileUrl:
          'https://lh3.googleusercontent.com/a-/AOh14GjzdaUpGmj2IKciv7ptDWp9YWZyJ5haJIDyqlNk=s317-p-rw-no',
      },
      comments: [],
      likes: [],
      images: [],
      totalLikes: 0,
      totalComments: 0,
    },
  ];
};
