import React from 'react';
import CountUp from 'react-countup';
import { Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import FetchData from '../FetchData';
import { formatZonedDate } from '../utils';
import { OWNER_ACCOUNT, REPOS_URL } from '../constants';

const useStyles = makeStyles(theme => ({
  depositContext: {
    flex: 1,
    marginTop: theme.spacing(4),
  },
}));

export default function CalcRepos() {
  const classes = useStyles();
  const { data } = FetchData(REPOS_URL);
  data.sort((a, b) => {
    if (a.created_at < b.created_at) return 1;
    if (a.created_at > b.created_at) return -1;
    else return 0;
  });

  return (
    <React.Fragment>
      <Title>You have </Title>
      <Typography component="p" variant="h4">
        {<CountUp start={0} end={data.length} duration={2.75} />} public repository
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Last created at {data[0] !== undefined ? formatZonedDate(data[0].created_at) : null}
      </Typography>
      <div>
        <Link color="primary" href={OWNER_ACCOUNT}>
          View your account
        </Link>
      </div>
    </React.Fragment>
  );
}
