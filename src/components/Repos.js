import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import FetchData from './FetchData'


// Generate Order Data
/* function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
} */

/* const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
]; */

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

  data.sort((a,b) => {
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
          {data.slice(0, 5).map((row, index) => (
            <TableRow key={row.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.created_at}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.default_branch}</TableCell>
              <TableCell>{row.owner.login}</TableCell>
              <TableCell align="right">{row.language}</TableCell>
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