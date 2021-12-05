import * as React from 'react';
import '../styles/Colors.scss'
import '../styles/Section.scss'
import '../styles/About.scss'
import Me from '../assets/Me.png';

import SkillImage from './SkillImage';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

const skills = ['javascript', 'html', 'css', 'sass', 'react', 'vue', 'csharp', 'python', 'java', 'unity', 'postgresql']
const description_1 = `
Hello. I am Timothy Yu Zhiwen, an undergraduate of National University of Singapore 
as a Computer Science Major and Interative Media Design Minor.
My interest lies in Front-End design and development, as well as Game Development for User Interface.
`
const description_2 = `
Presently, I am searching for a full-time position as a front-end developer or software developer. 
If you believe I fit in your team, please contact me for said position.
`

const About = (props) => {
  // Functions


  // HTML
  return (
    <div className="secondary-background-color center-contents section-display section-padding">
      <Container fixed>
        <Typography
          variant="h3"
          align="center"
          color="tertiary.main"
          sx={{ fontWeight: 'bold', padding: "20px" }}>
          <bdo className="primary-color">About</bdo> Me
        </Typography>
        <Stack 
          direction={props.breakpoint === "lg" ? "row" : "column"} 
          spacing={5} sx={{ padding: "20px", margin: "auto" }} 
          className={props.breakpoint === "lg" ? "stack-width" : null}>
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
            { description_1 }
            <br/>
            <br/>
            { description_2 }
          </Typography>
        </Stack>
        <Box 
          sx={{ margin: 'auto', padding: '40px'}}
          className={props.breakpoint === "lg" ? "stack-width" : null}>
          <Typography
            variant="h4"
            align="center"
            color="tertiary.main"
            sx={{ fontWeight: 'bold', padding: '10px', paddingBottom: '40px' }}>
            My Skills
          </Typography>
          <Grid 
            container
            rowSpacing={{ xs: 3, sm: 3, md: 4, lg: 5, xl: 5 }}
            columns={{ xs: 6, sm: 6, md: 8, lg: 10, xl: 10 }}
            alignItems="center"
            justifyContent="center" >
            {skills.map((skill) => (
              <Grid item xs={2} sm={2} md={2} lg={2} xl={2} key={skill}>
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
