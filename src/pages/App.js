import * as React from 'react';
import { useRef } from 'react';
import '../styles/App.scss';
import '../styles/Colors.scss';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';

import Header from '../components/Header.js';
import Home from '../components/Home.js';
import About from '../components/About.js';
import Experience from '../components/Experience.js';
import Projects from '../components/Projects.js';
import Contact from '../components/Contact.js';
import Footer from '../components/Footer.js';

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
      main: '#888888',
      dark: '#606060'
    }
  }
});

function App() {

  let homeRef = useRef(null)
  let aboutRef = useRef(null)
  let expRef = useRef(null)
  let projectsRef = useRef(null)
  let contactRef = useRef(null)
  let type = "xl"
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  if (isMobile) {
    type = "sm"
  } else if (isTablet) {
    type = "md"
  } else {
    type = "lg"
  }
   
  const scrollToSection = (e, section) => {
    if (section === 'Home') {
      homeRef.current.scrollIntoView({behavior: 'smooth'});
    } else if (section === 'About') {
      aboutRef.current.scrollIntoView({behavior: 'smooth'});
    } else if (section === 'Experiences') {
      expRef.current.scrollIntoView({behavior: 'smooth'});
    } else if (section === 'Projects') {
      projectsRef.current.scrollIntoView({behavior: 'smooth'});
    } else {
      contactRef.current.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <ScopedCssBaseline enableColorScheme={true}>
        {!isMobile ? (
          <div>
            <Header scrollToSection={ scrollToSection }/>
          </div>
        ):<div/>}
        <div className="secondary-background-color-light">
          <div ref={homeRef}>
            <Home breakpoint={type}/>
          </div>
          <div ref={aboutRef}>
            <About breakpoint={type}/>
          </div>
          <div ref={expRef}>
            <Experience breakpoint={type}/>
          </div>
          <div ref={projectsRef}>
            <Projects breakpoint={type}/>
          </div>
          <div ref={contactRef}>
            <Contact/>
          </div>
        </div>
        <Footer/>
      </ScopedCssBaseline>
    </ThemeProvider>
  );
}

export default App;
