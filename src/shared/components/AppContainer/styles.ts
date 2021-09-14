import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      top: 'auto',
      bottom: 0,
    },
    container: {
      marginBottom: theme.spacing(7),
    },
  }),
);
