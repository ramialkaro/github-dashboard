
import {createTheme} from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#ffb74d',
      main: '#ff79c6',
      dark: '#f57c00',
      contrastText: '#fff',
    },
    secondary: {
      light: '#bd93f9',
      main: '#bd93f9',
      dark: '#bd93f9',
      contrastText: '#000',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    background: {
      default: '#282a36',
    },

  },
  typography: {useNextVariants: true},
});

/**
 * TODO: consider TS
 * TODO: unit testing
 * TODO:
 */
