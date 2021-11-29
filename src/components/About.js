import * as React from 'react';
import '../styles/Colors.scss'
import '../styles/Section.scss'
import Me from '../assets/Me.png';

import SkillImage from './SkillImage';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

const skills = ['javascript', 'html', 'css', 'sass', 'react', 'vue', 'csharp', 'python', 'java', 'unity', 'postgresql']

const About = () => {
  // Functions

  // HTML
  return (
    <div className="secondary-background-color center-contents" style={{ height: 1100 }}>
      <Container fixed>
        <Typography
          variant="h3"
          align="center"
          color="tertiary.main"
          sx={{ fontWeight: 'bold', padding: "20px" }}>
          <bdo className="primary-color">About</bdo> Me
        </Typography>
        <Stack direction="row" spacing={5} sx={{ width: '800px', padding: "20px", margin: 'auto' }}>
          <Box sx={{ margin: 'auto' }}>
            <Avatar alt="Timothy Yu Zhiwen" src={ Me } sx={{ width: '120px', height: '120px', border: '8px solid #252525', backgroundColor: 'tertiary.dark' }} />
          </Box>
          <Typography
            variant="body1"
            align="justify"
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
        <Box sx={{ width: '800px', margin: 'auto', padding: '40px'}}>
          <Typography
            variant="h4"
            align="center"
            color="tertiary.main"
            sx={{ fontWeight: 'bold', padding: '10px', paddingBottom: '40px' }}>
            My Skills
          </Typography>
          <Grid container rowSpacing={4} alignItems="center" justifyContent="center" >
            {skills.map((skill) => (
              <Grid item xs={2.4} key={skill}>
                <SkillImage icon={ skill } />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default About;
