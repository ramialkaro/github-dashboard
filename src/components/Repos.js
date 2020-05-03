import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableHead, TableRow  } from '@material-ui/core';
import Title from './Title';
import FetchData from './FetchData'


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Repos() {
  const classes = useStyles();
  const { data } = FetchData('https://api.github.com/users/ramialkaro/repos')

  data.sort((a, b) => {
    if (a.created_at < b.created_at) return 1
    if (a.created_at > b.created_at) return -1
    else return 0
  })
  console.log(data)

  return (
    <React.Fragment>
      <Title>5 Recent Repos</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Index</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Repo </TableCell>
            <TableCell>Branch</TableCell>
            <TableCell>Owner</TableCell>
            <TableCell align="right">language</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(0, 5).map(({ id, created_at, name, default_branch, owner, language }, index) => (
            <TableRow key={id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{id}</TableCell>
              <TableCell>{created_at}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{default_branch}</TableCell>
              <TableCell>{owner.login}</TableCell>
              <TableCell align="right">{language}</TableCell>
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