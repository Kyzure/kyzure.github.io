import * as React from 'react';
import '../styles/Colors.scss'
import '../styles/Home.scss'
import Nature from '../assets/Nature.jpg'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Email from '@mui/icons-material/Email';

const Home = () => {
  // Functions

  // HTML
  return (
    <div style={{ backgroundImage: `url(${Nature})` }} className="background-image">
      <Container fixed>
        <Box className="Home-center">
          <Typography
            variant="h2"
            align="center"
            color="tertiary.main"
            sx={{ fontWeight: 'bold', padding: "10px" }}>
            <e className="primary-color">Timothy </e>
            Yu Zhiwen
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="tertiary.main"
            sx={{ padding: "5px" }}>
            Front-End Designer & Developer | Software Engineer
          </Typography>
          <Stack
            sx={{ pt: 2 }}
            direction="row"
            spacing={4}
            justifyContent="center">
            <IconButton aria-label="GitHub" color="tertiary" sx={{ transform: 'scale(1.5)' }} href="https://github.com/Kyzure">
              <GitHub />
            </IconButton>
            <IconButton aria-label="LinkedIn" color="primary" sx={{ transform: 'scale(1.5)' }} href="https://www.linkedin.com/in/timothy-yu-a2c4d5e8/">
              <LinkedIn />
            </IconButton>
            <IconButton aria-label="LinkedIn" color="tertiary" sx={{ transform: 'scale(1.5)' }} href="mailto:kyzurea@gmail.com">
              <Email />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
