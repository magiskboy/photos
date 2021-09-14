import React from 'react';
import { useHistory } from 'react-router-dom';
import { PostItem as PostItemModel } from 'state/post';
import { CurrentUser } from 'state/user';
import {
  Card,
  CardMedia,
  CardHeader,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  IconButton,
} from '@material-ui/core';
import { Share as ShareIcon } from '@material-ui/icons';
import { LikeButton } from 'shared/components';
import useStyles from './styles';

interface PostItemProps {
  data: PostItemModel;
  currentUser?: CurrentUser;
  onLikeClicked?: () => void;
  onShareClicked?: () => void;
  onComment?: () => void;
}

const PostItem: React.FC<PostItemProps> = ({ data, onLikeClicked, currentUser }) => {
  const classes = useStyles();
  const browserHistory = useHistory();

  const handleShareClick = () => {
    navigator.share({
      text: data.content,
      title: data.author.username,
      url: data.images[0].src,
    });
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={data.author.username}
        titleTypographyProps={{ variant: 'subtitle2' }}
        avatar={
          <Avatar
            src={data.author.profileUrl}
            className={classes.avatar}
            onClick={() => browserHistory.push('/user')}
          />
        }
        subheader={data.createdAt.toDateString()}
      />
      <CardMedia image={data.images[0].src} className={classes.media} />
      {!!data.content && (
        <CardContent classes={{ root: classes.postContent }}>
          <Typography paragraph>{data.content}</Typography>
          <Typography variant="subtitle2">
            {data.totalLikes.toLocaleString('vi-VN', { useGrouping: true })} likes
          </Typography>
        </CardContent>
      )}
      <CardActions disableSpacing>
        <LikeButton
          liked={!!data.likes.find((item) => item.userLiked.id === currentUser?.id)}
          onClick={() => onLikeClicked?.()}
        />
        <IconButton aria-label="share">
          {!!navigator.share && <ShareIcon onClick={handleShareClick} />}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PostItem;
