import * as React from 'react';
import '../styles/Colors.scss'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const sections = ['Home', 'About', 'Experiences', 'Projects', 'Contact'];

const Header = (props) => {
  // Functions

  // HTML
  return (
    <AppBar
      position="fixed"
      color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense">
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }} className="Header-menu">
            {sections.map((section) => (
              <Button
                disableRipple={true}
                variant="dense"
                size="small"
                key={section}
                onClick={(e) => props.scrollToSection(e, section)}
                sx={{ 'paddingLeft': '10px', 'paddingRight': '10px', 'paddingTop': '5px', 'paddingBottom': '5px',}}
                color="tertiary">
                {section}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
