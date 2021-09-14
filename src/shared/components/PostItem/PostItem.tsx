import React from 'react';
import { PostItem as PostItemModel } from 'state/post';
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
import { Favorite as FavoriteIcon, Share as ShareIcon } from '@material-ui/icons';
import useStyles from './styles';

interface PostItemProps {
  data: PostItemModel;
  onLikeClicked?: () => void;
  onShareClicked?: () => void;
  onComment?: () => void;
}

const PostItem: React.FC<PostItemProps> = ({ data }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        title={data.author.username}
        avatar={<Avatar src={data.author.profileUrl} className={classes.avatar} />}
        subheader={data.createdAt.toDateString()}
      />
      <CardMedia image={data.images[0].src} className={classes.media} />
      {!!data.content && (
        <CardContent>
          <Typography paragraph>{data.content}</Typography>
        </CardContent>
      )}
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PostItem;
