import React from 'react';
import {useTheme} from '@material-ui/core/styles';
import {LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, CartesianGrid} from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return {time, amount};
}

const data = [
  createData('00:00', 0),
  createData('03:00', 3),
  createData('06:00', 7),
  createData('09:00', 15),
  createData('12:00', 11),
  createData('15:00', 19),
  createData('18:00', 20),
  createData('21:00', 27),
  createData('24:00', undefined),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>24 hours activity</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{textAnchor: 'middle', fill: theme.palette.text.primary}}
            >
              commits
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={true} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

/**
 * TODO: consider TS
 * TODO: unit testing
 * TODO: replace dummy data with actully commit history from github.
 * TODO: linechart, move inline margin object to own object.
 * TODO: remove inline styles
 * TOOD: make linechart more dynamic if there is no 24h commit, give other options such as 1w, 2w, 1m, 2m, 1y, or nothing.
 * TODO: remove React.Fragment.
 * TODO: rename data to something meanful.
 * TODO:
 */
