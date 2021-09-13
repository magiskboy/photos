import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      padding: theme.spacing(1),
    },
  }),
);
