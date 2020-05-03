
import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

export const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            light: '#ffb74d',
            main: '#ff9800',
            dark: '#f57c00',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
        
    },
    typography: { useNextVariants: true },
});