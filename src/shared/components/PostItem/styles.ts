import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '100%',
      marginBottom: theme.spacing(2),
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    postContent: {
      paddingBottom: 0,
    },
    avatar: {
      backgroundColor: red[500],
    },
    comment: {
      flex: 1,
      marginLeft: theme.spacing(2),
    },
  }),
);

export default useStyles;
