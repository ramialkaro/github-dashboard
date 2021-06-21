import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { DEVELOPER_ACCOUNT } from '../constants';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href={DEVELOPER_ACCOUNT}>
        Rami Al-Karo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
