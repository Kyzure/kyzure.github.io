import * as React from 'react';
import '../styles/Colors.scss'
import '../styles/Section.scss'
import ExperienceTimeline from './ExperienceTimeline.js'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const Experience = () => {
  // Functions

  // HTML
  return (
    <div className="tertiary-background-color center-contents" style={{ height: 1100 }}>
      <Container fixed>
        <Typography
          variant="h3"
          align="center"
          color="secondary.main"
          sx={{ fontWeight: 'bold', paddingTop: '20px', paddingBottom: '20px' }}>
          My <bdo className="primary-color">Experience</bdo>
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="secondary.main"
          sx={{ paddingBottom: '25px' }}>
          Here's a little bit more about my work and education experience.
        </Typography>
        <ExperienceTimeline />
      </Container>
    </div>
  );
};

export default Experience;
