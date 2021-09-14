import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    actionIcon: {
      color: theme.palette.text.secondary,
    },
  }),
);

export default useStyles;
