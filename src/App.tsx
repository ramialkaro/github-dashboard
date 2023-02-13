import React from 'react';
import './App.css';
import Routes from './routes';
import { MuiThemeProvider } from '@material-ui/core/styles';
import {theme} from './global-style'
function App() {


  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Routes />
      </div>
    </MuiThemeProvider>
  );
}

export default App;

/**
 * TODO: consider TS
 * TODO: unit testing
 * TODO: consider state managment instead of props passing
 * FIXME:
 * HACK:
 */