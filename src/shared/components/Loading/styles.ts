import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    circle: {
      margin: '0 auto',
      alignSelf: 'center',
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);
