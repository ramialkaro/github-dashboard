import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography, FormControlLabel,  Checkbox } from '@material-ui/core';
import Title from './Title';
import FetchData from './FetchData';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { REPOS_URL } from '../constants';
import { formatZonedDate } from '../utils';

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
    cursor: 'pointer',
  },
}));

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

export default function Repos() {
  const classes = useStyles();
  const { data } = FetchData(REPOS_URL);
  const [repoAmount, setRepoAmount] = useState(5);

  data.sort((a, b) => {
    if (a.created_at < b.created_at) return 1;
    if (a.created_at > b.created_at) return -1;
    else return 0;
  });

  const cloneRepo = gitUrl => {
    navigator.clipboard.writeText(gitUrl);
  };

  const sliceReposeAmount = () => {
    setRepoAmount(repoAmount + 5);
  };

  return (
    <React.Fragment>
      <Title>5 Recent Repos</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Index</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Created Date</TableCell>
            <TableCell>Repo </TableCell>
            <TableCell>Branch</TableCell>
            <TableCell>Owner</TableCell>
            <TableCell>language</TableCell>
            <TableCell>Wiki</TableCell>
            <TableCell align="right">Clone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(0, repoAmount).map(({ id, created_at, name, default_branch, owner, language, has_wiki, git_url }, index) => (
            <TableRow key={id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{id}</TableCell>
              <TableCell>{formatZonedDate(created_at)}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{default_branch}</TableCell>
              <TableCell>{owner.login}</TableCell>
              <TableCell>{language}</TableCell>
              <TableCell>
                <FormControlLabel control={<GreenCheckbox checked={has_wiki} />} />
              </TableCell>
              <TableCell align="right">
                <IconButton aria-label="clone" onClick={() => cloneRepo(git_url)}>
                  <FileCopyIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography color="primary" className={classes.seeMore} onClick={() => sliceReposeAmount()}>
        load more reposteries
      </Typography>
    </React.Fragment>
  );
}
