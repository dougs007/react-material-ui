import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import orange from '@material-ui/core/colors/orange'

const theme = createMuiTheme({
  palette: {
    primary: orange
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
  , document.getElementById('root'));
