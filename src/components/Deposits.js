import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme)=>({
  depositContext: {
    flex: 1,
    marginTop:theme.spacing(4)
  },
}));

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>You have </Title>
      <Typography component="p" variant="h4">
        25 repo
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        last one on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View your account
        </Link>
      </div>
    </React.Fragment>
  );
}