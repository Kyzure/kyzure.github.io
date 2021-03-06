import * as React from 'react';
import '../styles/Colors.scss'
import '../styles/Section.scss'
import Nature from '../assets/Nature.jpg'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Telegram from '@mui/icons-material/Telegram';
import Email from '@mui/icons-material/Email';

const Home = () => {
  // Functions

  // HTML
  return (
    <div style={{ backgroundImage: `url(${Nature})` }} className="background-image section-display">
      <Container fixed>
        <Box className="center-contents" sx={{ height: '100vh' }}>
          <Typography
            variant="h2"
            align="center"
            color="tertiary.main"
            sx={{ fontWeight: 'bold', padding: "10px" }}>
            <bdo sx={{ fontStyle: 'normal' }} className="primary-color">Timothy </bdo>
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
            <IconButton aria-label="Telegram" color="tertiary" sx={{ transform: 'scale(1.5)' }} href="https://t.me/kyzure">
              <Telegram />
            </IconButton>
            <IconButton aria-label="Email" color="primary" sx={{ transform: 'scale(1.5)' }} href="mailto:kyzurea@gmail.com">
              <Email />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
