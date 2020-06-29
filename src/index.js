import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import { red, amber } from '@material-ui/core/colors';
import { light } from '@material-ui/core/styles/createPalette';

const theme = createMuiTheme({

  palette: {
    primary: red,
    secondary: {
      main: '#fafafa',
      
    }
    
  }

})

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
    <App />
    </MuiThemeProvider>
    ,
  document.getElementById('root')
);

