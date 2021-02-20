import React from 'react'
import ReactDOM from 'react-dom'
// import { ReactSVG } from 'react-svg'
import AppBar from '@material-ui/core/AppBar';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import 'typeface-roboto'
import Typography from '@material-ui/core/Typography'

import FormPasswordReset from './components/FormPasswordReset/FormPasswordReset'
import './styles.css'
import logo from './LogoBayer.svg'

const theme = createMuiTheme({
  palette: {
    type: 'light'
   
  },
});


function App() {
  return (
    <div className="App">
    <AppBar color="colorPrimary-1" position="static" >
      <Typography variant="title">
        <img src={logo} className="bayer-logo" alt="logo" />
          Redefinir Senha
        </Typography>
    </AppBar>
    
      <Typography>
        Olá, para redefinição de senha preencha os 
        campos abaixo.
      </Typography>
      <FormPasswordReset />
      <div className="bayer__bottom"></div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline>
      <App />
    </CssBaseline>
  </MuiThemeProvider>,
  rootElement
)
