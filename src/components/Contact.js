import * as React from 'react';
import '../styles/Colors.scss';
import '../styles/Section.scss';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const Contact = () => {
  // Functions

  // HTML
  return (
    <div className="tertiary-background-color center-contents" style={{ height: 500 }}>
      <Container fixed>
        <Typography
          variant="h3"
          align="center"
          color="primary.main"
          sx={{ fontWeight: 'bold', paddingTop: '20px', paddingBottom: '10px' }}>
          <bdo className="secondary-color">Contact</bdo> Me
        </Typography>
      </Container>
    </div>
  );
};

export default Contact;
