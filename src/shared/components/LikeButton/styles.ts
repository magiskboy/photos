import { createStyles, makeStyles } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

export interface LikeButtonStyleProps {
  size: string;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      fontSize: (props: LikeButtonStyleProps) => props.size,
    },
    liked: {
      color: red[500],
    },
  }),
);

export default useStyles;
