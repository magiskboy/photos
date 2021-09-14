import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingBottom: '56.25%', // 16:9
      display: 'flex',
      justifyContent: 'center',
    },
    item: {
      position: 'absolute',
      maxWidth: '100%',
    },
  }),
);

export default useStyles;
