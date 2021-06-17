
import { createMuiTheme } from '@material-ui/core/styles';

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
            light: '#33eb91',
            main: '#00e676',
            dark: '#00a152',
            contrastText: '#000',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
        
    },
    typography: { useNextVariants: true },
});
