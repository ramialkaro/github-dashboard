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
