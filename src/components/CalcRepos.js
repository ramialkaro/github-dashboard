import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import FetchData from './FetchData'
import CountUp from 'react-countup';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  depositContext: {
    flex: 1,
    marginTop: theme.spacing(4)
  },
}));

export default function CalcRepos() {
  const classes = useStyles();
  const { data } = FetchData('https://api.github.com/users/ramialkaro/repos')
  data.sort((a, b) => {
    if (a.created_at < b.created_at) return 1
    if (a.created_at > b.created_at) return -1
    else return 0
  })

  return (
    <React.Fragment>
      <Title>You have </Title>
      <Typography component="p" variant="h4">
        {<CountUp start={0} end={data.length} duration={2.75} />} public repo
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        last created repo on {data[0] !== undefined ? data[0].created_at : null}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View your account
        </Link>
      </div>
    </React.Fragment>
  );
}
