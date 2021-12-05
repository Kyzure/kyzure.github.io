import * as React from 'react';
import '../styles/Colors.scss';
import '../styles/Section.scss';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

import LinkedIn from '@mui/icons-material/LinkedIn';
import Telegram from '@mui/icons-material/Telegram';
import Email from '@mui/icons-material/Email';

const contacts = [
  {
    title: "Telegram",
    image: Telegram,
    link: "https://t.me/kyzure",
    linkName: "Telegram Link"
  },
  {
    title: "E-mail",
    image: Email,
    link: "mailto:kyzurea@gmail.com",
    linkName: "Kyzurea@gmail.com"
  },
  {
    title: "LinkedIn",
    image: LinkedIn,
    link: "https://www.linkedin.com/in/timothy-yu-a2c4d5e8/",
    linkName: "LinkedIn Profile"
  }
]

const Contact = (props) => {
  // Functions
  let useStyles = makeStyles(theme => ({
    paperRoot: {
      backgroundColor: theme.palette.tertiary.main
    }
  }));

  const classes = useStyles();
  
  // HTML
  return (
    <div className="tertiary-background-color center-contents section-display section-padding">
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
        <Grid 
          container
          rowSpacing={{ xs: 3, sm: 3, md: 4, lg: 5, xl: 5 }}
          columns={{ xs: 2, sm: 2, md: 3, lg: 3, xl: 3 }}
          alignItems="center"
          justifyContent="center" >
          {contacts.map((contact) => (
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1} key={contact.title} sx={{ margin: "auto" }}>
              <Paper className={ `center-contents ${classes.paperRoot}` } sx={{ height: '190px', width: '150px', margin: "auto"}}>
                <Box sx={{ margin: 'auto' }} className="center-contents">
                  <contact.image color="primary" sx={{ height: '70px', width: '70px', margin: 'auto' }}/>
                  <Typography
                    variant="h6"
                    align="center"
                    color="secondary.main">
                    {contact.title}<br/><br/>
                  </Typography>
                  <Link href={contact.link} variant="body2">
                    {contact.linkName}
                  </Link>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
