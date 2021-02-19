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


const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

const title = {
    fontSize: '1.5rem',
    fontWeight: 300,
    padding: '1rem',
    color: '#fff', 
    textAlign: 'left'

  }

function App() {
  return (
    <div className="App">
    <AppBar color="secondary" position="static" style={{background: '#10384F'}}>
    <Typography variant="title" style={title}>
        Redefinir Senha
      </Typography>

    </AppBar>
    <br />
      <Typography style={{fontSize: '1.4rem', padding: '1rem',fontWeight: '400'}}>
        Olá, para redefinição de senha preencha os 
        campos abaixo.
      </Typography>
      
      <FormPasswordReset />
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
