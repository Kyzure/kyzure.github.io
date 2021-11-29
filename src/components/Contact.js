import * as React from 'react';
import '../styles/Colors.scss';
import '../styles/Section.scss';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

import LinkedIn from '@mui/icons-material/LinkedIn';
import Telegram from '@mui/icons-material/Telegram';
import Email from '@mui/icons-material/Email';

const Contact = () => {
  // Functions
  let useStyles = makeStyles(theme => ({
    paperRoot: {
      backgroundColor: theme.palette.tertiary.main
    }
  }));
  const classes = useStyles();
  
  // HTML
  return (
    <div className="tertiary-background-color center-contents" style={{ height: "500px" }}>
      <Container fixed>
        <Typography
          variant="h3"
          align="center"
          color="primary.main"
          sx={{ fontWeight: 'bold', paddingTop: '20px', paddingBottom: '10px' }}>
          <bdo className="secondary-color">Contact</bdo> Me
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="secondary.main"
          sx={{ paddingBottom: '40px' }}>
          Want to connect? Here's my contact details!
        </Typography>
        <Stack direction="row" spacing={16} className="center-contents">
          <Paper className={ `center-contents ${classes.paperRoot}` } sx={{ height: '200px', width: '180px', }}>
            <Box sx={{ margin: 'auto' }} className="center-contents">
              <Telegram color="primary" sx={{ height: '70px', width: '70px', margin: 'auto' }}/>
              <Typography
                variant="h6"
                align="center"
                color="secondary.main">
                Telegram<br/><br/>
              </Typography>
              <Link href="https://t.me/kyzure" variant="body2">
                Telegram Link
              </Link>
            </Box>
          </Paper>
          <Paper className={ `center-contents ${classes.paperRoot}` } sx={{ height: '200px', width: '180px', }}>
            <Box sx={{ margin: 'auto' }} className="center-contents">
              <Email color="primary" sx={{ height: '70px', width: '70px', margin: 'auto' }}/>
              <Typography
                variant="h6"
                align="center"
                color="secondary.main">
                E-mail<br/><br/>
              </Typography>
              <Link href="mailto:kyzurea@gmail.com" variant="body2">
                Kyzurea@gmail.com
              </Link>
            </Box>
          </Paper>
          <Paper className={ `center-contents ${classes.paperRoot}` } sx={{ height: '200px', width: '180px', }}>
            <Box sx={{ margin: 'auto' }} className="center-contents">
              <LinkedIn color="primary" sx={{ height: '70px', width: '70px', margin: 'auto' }}/>
              <Typography
                variant="h6"
                align="center"
                color="secondary.main">
                LinkedIn<br/><br/>
              </Typography>
              <Link href="https://www.linkedin.com/in/timothy-yu-a2c4d5e8/" variant="body2">
              LinkedIn Profile
              </Link>
            </Box>
          </Paper>
        </Stack>
      </Container>
    </div>
  );
};

export default Contact;
