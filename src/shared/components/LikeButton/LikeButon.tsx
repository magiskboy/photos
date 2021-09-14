import React from 'react';
import { IconButton } from '@material-ui/core';
import { Favorite as FavoriteIcon } from '@material-ui/icons';
import useStyles from './styles';

interface LikeButtonButton {
  onClick: () => void;
  size?: string;
  liked: boolean;
}

const LikeButton: React.FC<LikeButtonButton> = ({ onClick, liked, size }) => {
  const classes = useStyles({ size: size || '32px' });
  const handleLikeClicked = () => {
    onClick?.();
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleLikeClicked}>
      <FavoriteIcon className={liked ? classes.liked : ''} />
    </IconButton>
  );
};

export default LikeButton;
