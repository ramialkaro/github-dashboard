import React from 'react';
import './App.css';
import DashBoard from './components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import {theme} from './global-style'
function App() {


  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <DashBoard />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
