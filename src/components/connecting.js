import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Connecting() {
  const classes = useStyles();

  return (
    <Grid style={{display: 'flex', height: '100vh', alignItems: 'center'}} justify="center" container>
      <div className={classes.root}>
        <CircularProgress />
        <h5>Connecting...</h5>
      </div>
    </Grid>
  );
}