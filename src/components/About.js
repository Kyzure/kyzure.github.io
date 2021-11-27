import * as React from 'react';
import '../styles/Colors.scss'
import '../styles/About.scss'
import Me from '../assets/Me.png';
import { ReactComponent as figma } from '../assets/figma_logo.svg';
import { ReactComponent as react } from '../assets/react_logo.svg';
import { ReactComponent as unity } from '../assets/unity_logo.svg';
import { ReactComponent as vsc } from '../assets/vsc_logo.svg';
import { ReactComponent as vue } from '../assets/vue_logo.svg';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import SvgIcon from '@mui/material/SvgIcon';

const About = () => {
  // Functions

  // HTML
  return (
    <div className="secondary-background-color">
      <Container fixed>
        <Box className="About-center">
          <Box sx={{ width: '1200px', margin: 'auto' }}>
            <Typography
              variant="h3"
              align="center"
              color="tertiary.main"
              sx={{ fontWeight: 'bold', padding: "20px" }}>
              <e className="primary-color">About</e> Me
            </Typography>
            <Stack direction="row" spacing={5} sx={{ width: '800px', padding: "20px", margin: 'auto' }}>
              <Box sx={{ margin: 'auto' }}>
                <Avatar alt="Timothy Yu Zhiwen" src={ Me } sx={{ width: '120px', height: '120px', border: '8px solid #252525', backgroundColor: 'tertiary.dark' }} />
              </Box>
              <Typography
                variant="body1"
                align="justified"
                color="tertiary.main"
                display="block"
                paragraph
                sx={{ padding: "5px" }}>
                Hello. I am Timothy Yu Zhiwen, an undergraduate of National University of Singapore 
                as a Computer Science Major and Interative Media Design Minor.
                My interest lies in Front-End design and development, as well as Game Development for User Interface.
                <br />
                <br />
                Presently, I am searching for a full-time position as a front-end developer or software developer. 
                If you believe I fit in your team, please contact me for said position.
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              sx={{ padding: "20px", width: '800px', margin: 'auto'}}
              divider={<Divider orientation="vertical" flexItem className="tertiary-background-color" />}>
              <Box sx={{ width: '400px', margin: 'auto' }}>
                <Typography
                  variant="h4"
                  align="center"
                  color="tertiary.main"
                  sx={{ fontWeight: 'bold', padding: "10px" }}>
                  Skills
                </Typography>
                <Grid container spacing={5}>
                  <Grid item xs={4}>
                    <SvgIcon 
                      component={ figma }
                      viewBox="100 0 100 300"
                      sx={{ fontSize: 100 }}/>
                  </Grid>
                  <Grid item xs={4}>
                  <SvgIcon 
                      component={ react }
                      viewBox="170 100 500 400"
                      sx={{ fontSize: 100 }}/>
                  </Grid>
                  <Grid item xs={4}>
                  <SvgIcon 
                      component={ vsc }
                      viewBox="0 0 100 100"
                      sx={{ fontSize: 100 }}/>
                  </Grid>
                  <Grid item xs={4}>
                  <SvgIcon 
                      component={ vue }
                      viewBox="0 0 250 250"
                      sx={{ fontSize: 100 }}/>
                  </Grid>
                  <Grid item xs={8}>
                  <SvgIcon 
                      component={ unity }
                      viewBox="0 10 280 80"
                      sx={{ fontSize: 200, height: 80 }}/>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ width: '400px', margin: 'auto' }}>
                <Typography
                  variant="h4"
                  align="center"
                  color="tertiary.main"
                  sx={{ fontWeight: 'bold', padding: "10px" }}>
                  Languages
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default About;
