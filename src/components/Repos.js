import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import Title from './Title';
import FetchData from './FetchData';
import { formatZonedDate } from '../utils';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
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
  const { data } = FetchData('https://api.github.com/users/ramialkaro/repos');

  data.sort((a, b) => {
    if (a.created_at < b.created_at) return 1;
    if (a.created_at > b.created_at) return -1;
    else return 0;
  });
  console.log(data);

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
            <TableCell align="right">Wiki</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(0, 5).map(({ id, created_at, name, default_branch, owner, language, has_wiki }, index) => (
            <TableRow key={id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{id}</TableCell>
              <TableCell>{formatZonedDate(created_at)}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{default_branch}</TableCell>
              <TableCell>{owner.login}</TableCell>
              <TableCell>{language}</TableCell>
              <TableCell align="right">
                <FormControlLabel control={<GreenCheckbox checked={has_wiki} />} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
