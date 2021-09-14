import React from 'react';
import { useHistory } from 'react-router-dom';
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
  TextField,
} from '@material-ui/core';
import { Share as ShareIcon, Send as SendIcon } from '@material-ui/icons';
import { CurrentUser } from 'state/user';
import { LikeButton } from 'shared/components';
import useStyles from './styles';

interface CommentInputProps {
  className?: string;
  onSend?: (value: string) => void;
}

const CommentInput: React.FC<CommentInputProps> = ({ className, onSend }) => {
  const [value, setValue] = React.useState('');
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = ev.target.value;
    setValue(newValue);
  };

  return (
    <TextField
      className={className}
      placeholder="Typing comment..."
      fullWidth
      value={value}
      InputProps={{
        'aria-label': 'comment',
        endAdornment: (
          <div
            onClick={() => {
              onSend?.(value);
              setValue('');
            }}
          >
            <SendIcon />
          </div>
        ),
      }}
      multiline
      onChange={handleChange}
    />
  );
};

interface PostItemProps {
  data: PostItemModel;
  currentUser?: CurrentUser;
  onLikeClicked?: () => void;
  onComment?: (value: string) => void;
}

const PostItem: React.FC<PostItemProps> = ({ data, onLikeClicked, onComment, currentUser }) => {
  const classes = useStyles();
  const browserHistory = useHistory();

  const handleShareClick = () => {
    navigator.share({
      text: data.content,
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
      <CardMedia className={classes.media} image={data.images[0].src} />
      {!!data.content && (
        <CardContent classes={{ root: classes.postContent }}>
          <Typography paragraph>{data.content}</Typography>
          <Typography variant="subtitle2">
            {data.totalLikes.toLocaleString(undefined, { useGrouping: true })} likes
          </Typography>
        </CardContent>
      )}
      <CardActions disableSpacing style={{ display: 'flex', alignItems: 'center' }}>
        <LikeButton
          liked={!!data.likes.find((item) => item.userLiked.id === currentUser?.id)}
          onClick={() => onLikeClicked?.()}
        />
        {!!navigator.share && (
          <IconButton aria-label="share">
            <ShareIcon onClick={handleShareClick} />
          </IconButton>
        )}
        <CommentInput className={classes.comment} onSend={onComment} />
      </CardActions>
    </Card>
  );
};

export default PostItem;
