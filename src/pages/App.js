import * as React from 'react';
import '../styles/App.scss';
import '../styles/Colors.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from '../components/Header.js';
import Home from '../components/Home.js';
import About from '../components/About.js';
import Experience from '../components/Experience.js';
import Projects from '../components/Projects.js';
import Contact from '../components/Contact.js';

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
    },
    text: {
      light: '#C8C8C8',
      main: '#888888'
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
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </ThemeProvider>
  );
}

export default App;
