import * as React from 'react';
import '../styles/App.scss';
import '../styles/Colors.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from '../components/Header.js';
import Home from '../components/Home.js';
import Experience from '../components/Experience.js';
import About from '../components/About.js';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F25A52'
    },
    secondary: {
      light: '#404040',
      main: '#343434',
      dark: '#2A2A2A'
    },
    tertiary: {
      main: '#F4F4F4',
      dark: '#EFEFEF'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header/>
      </div>
      <div className="secondary-background-color-light">
        <Home/>
        <Experience/>
        <About/>
      </div>
    </ThemeProvider>
  );
}

export default App;
