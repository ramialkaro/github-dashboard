import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import { Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FetchData from '../FetchData';
import { formatZonedDate } from '../utils';
import { BASE_URL, OWNER_ACCOUNT, REPOS_URL } from '../constants';
import { useState } from 'react';

const useStyles = makeStyles(theme => ({
  depositContext: {
    flex: 1,
    marginTop: theme.spacing(4),
  },
}));

export default function CalcRepos() {
  const classes = useStyles();
  const { data } = FetchData(REPOS_URL);
  const baseInfo = FetchData(BASE_URL);
  const [publicRepos, setPublicRepos] = useState(0)
  useEffect(() => {
    setPublicRepos(baseInfo.data['public_repos'])
  }, [baseInfo]);

data.sort((a, b) => {
  if (a.created_at < b.created_at) return 1;
  if (a.created_at > b.created_at) return -1;
  else return 0;
});

return (
  <React.Fragment>
    <Typography component="p" variant="h5">
      {publicRepos ? <CountUp start={0} end={publicRepos} duration={2.75} /> : null } public repository
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
