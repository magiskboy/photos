import { PostItem } from './post';

export const mockFetchPostsForNewFeed = (): PostItem[] => {
  return [
    {
      id: '1',
      createdAt: new Date(),
      author: {
        id: '001',
        username: 'thanh.nk',
        profileUrl:
          'https://lh3.googleusercontent.com/a-/AOh14GiOiLUW-E3sVAQsj46HsH1l9AevQsiztJrD6UP9vg=s288-p-rw-no',
      },
      comments: [
        { userComment: { id: '002', username: 'tramytrang.1' }, time: new Date(), content: 'Lmao' },
        { userComment: { id: '002', username: 'tramytrang.1' }, time: new Date(), content: 'Lmao' },
        { userComment: { id: '002', username: 'tramytrang.1' }, time: new Date(), content: 'Lmao' },
        { userComment: { id: '002', username: 'tramytrang.1' }, time: new Date(), content: 'Lmao' },
        { userComment: { id: '002', username: 'tramytrang.1' }, time: new Date(), content: 'Lmao' },
      ],
      likes: [
        { userLiked: { id: '002', username: 'tramytrang.1' } },
        { userLiked: { id: '002', username: 'tramytrang.1' } },
        { userLiked: { id: '002', username: 'tramytrang.1' } },
        { userLiked: { id: '002', username: 'tramytrang.1' } },
      ],
      images: [
        { src: 'https://genk.mediacdn.vn/2017/1-1504600589828.jpg' },
        {
          src: 'https://gamek.mediacdn.vn/133514250583805952/2021/2/4/ds4-16124293172251883710034.png',
        },
      ],
      totalLikes: 21,
      totalComments: 23,
      content:
        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    },
    {
      id: '1',
      createdAt: new Date(),
      author: {
        id: '002',
        username: 'tramytrang.1',
        profileUrl:
          'https://lh3.googleusercontent.com/a-/AOh14GjzdaUpGmj2IKciv7ptDWp9YWZyJ5haJIDyqlNk=s317-p-rw-no',
      },
      comments: [
        { userComment: { id: '002', username: 'tramytrang.1' }, time: new Date(), content: 'Lmao' },
        { userComment: { id: '002', username: 'tramytrang.1' }, time: new Date(), content: 'Lmao' },
        { userComment: { id: '002', username: 'tramytrang.1' }, time: new Date(), content: 'Lmao' },
        { userComment: { id: '002', username: 'tramytrang.1' }, time: new Date(), content: 'Lmao' },
        { userComment: { id: '002', username: 'tramytrang.1' }, time: new Date(), content: 'Lmao' },
      ],
      likes: [
        { userLiked: { id: '002', username: 'tramytrang.1' } },
        { userLiked: { id: '002', username: 'tramytrang.1' } },
        { userLiked: { id: '002', username: 'tramytrang.1' } },
        { userLiked: { id: '002', username: 'tramytrang.1' } },
      ],
      images: [
        { src: 'https://genk.mediacdn.vn/2017/1-1504600589828.jpg' },
        {
          src: 'https://gamek.mediacdn.vn/133514250583805952/2021/2/4/ds4-16124293172251883710034.png',
        },
      ],
      totalLikes: 21,
      totalComments: 23,
    },
  ];
};
