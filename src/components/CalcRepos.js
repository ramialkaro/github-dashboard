import React from 'react';
import CountUp from 'react-countup';
import {Link, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import FetchData from '../FetchData';
import {formatZonedDate} from '../utils/dateFormatter';
import {OWNER_ACCOUNT, REPOS_URL, OWNER} from '../constants';

const useStyles = makeStyles((theme) => ({
  depositContext: {
    flex: 1,
    marginTop: theme.spacing(4),
  },
}));

export default function CalcRepos() {
  const classes = useStyles();
  const {data} = FetchData(REPOS_URL);
  data.sort((a, b) => {
    if (a.created_at < b.created_at) return 1;
    if (a.created_at > b.created_at) return -1;
    else return 0;
  });

  return (
    <div>
      <Typography component="p" variant="h5">
        {<CountUp start={0} end={data.length} duration={2.75} />} public repository
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Last created at {data[0] !== undefined ? formatZonedDate(data[0].created_at) : null}
      </Typography>
      <div>
        <Link color="primary" href={OWNER_ACCOUNT}>
          View own account <span> @{OWNER}</span>
        </Link>
      </div>
    </div>
  );
}

/**
 * TODO: consider TS
 * TODO: unit testing
 * TODO: remove React.Fragment
 * TODO: p instead of Typography
 * TODO: give meaning name for the data variable
 */
