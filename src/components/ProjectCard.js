import * as React from 'react';
import '../styles/Colors.scss';
import '../styles/Section.scss';

import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/icons-material/Link';
import GitHub from '@mui/icons-material/GitHub';
import YouTube from '@mui/icons-material/YouTube';

const ProjectCard = (props) => {
  // Functions
  let title = props.title;
  let description = props.description;
  let image = props.image;
  let githubLink = props.githubLink;
  let demoLink = props.demoLink;
  let trailerLink = props.trailerLink;

  let useStyles = makeStyles(theme => ({
    paperRoot: {
      backgroundColor: theme.palette.secondary.main
    }
  }));
  const classes = useStyles();
  

  // HTML
  return (
    <Paper className={ classes.paperRoot } sx={{ padding: "30px 20px 30px 20px" }} variant="elevation" elevation={4}>
      <Stack direction={ props.breakpoint === "lg" ? "row" : "column" } spacing={4}>
        {props.breakpoint !== "sm" ? (
          <Paper sx={{ width: '440px', height: '247.5px' }} variant="elevation" elevation="4">
            <img src={ image } alt={ title } style={{ width: '440px', height: '247.5px' }} />
          </Paper>
        ):(
          <Paper sx={{ width: "85vw", height: "70vw / 16 * 9" }} variant="elevation" elevation="4">
            <img src={ image } alt={ title } style={{ width: "100%", height: "100%" }} />
          </Paper>
        )}
        <Box sx={{ width: props.breakpoint === "lg" ? "500px" : "100%"}}>
          <Typography
            variant="h5"
            color="tertiary.main"
            sx={{ fontWeight: 'bold', paddingBottom: '10px' }}>
            { title }
          </Typography>
          <Box sx={{ width:100, height: 5, paddingBottom: '20px' }} className="center-contents">
            <Box sx={{ width:100, height: 5, margin: 'auto' }} className="primary-background-color" />
          </Box>
          {description.map((des) => (
            <Typography
              variant="b1"
              align="center"
              key={des}
              color="tertiary.main"
              sx={{ paddingTop: '5px', paddingBottom: '5px' }}>
              { des } <br/>
            </Typography>
            ))}
          <Stack direction="row" spacing={1} sx={{ paddingTop: '20px' }}>
            {githubLink !== null ? (
              <Button href={ githubLink } variant="outlined">
                <GitHub />
                <Typography
                  variant="b1"
                  align="center"
                  color="tertiary.main"
                  sx={{ paddingTop: '5px', paddingBottom: '5px', paddingLeft: '10px' }}>
                  GitHub
                </Typography>
              </Button> 
            ):<div/>}
            {demoLink !== null ? (
              <Button href={ demoLink } variant="outlined">
                <Link />
                <Typography
                  variant="b1"
                  align="center"
                  color="tertiary.main"
                  sx={{ paddingTop: '5px', paddingBottom: '5px', paddingLeft: '10px' }}>
                  Link
                </Typography>
              </Button> 
            ):<div/>}
            {trailerLink !== null ? (
              <Button href={ trailerLink } variant="outlined">
                <YouTube />
                <Typography
                  variant="b1"
                  align="center"
                  color="tertiary.main"
                  sx={{ paddingTop: '5px', paddingBottom: '5px', paddingLeft: '10px' }}>
                  Trailer
                </Typography>
              </Button> 
            ):<div/>}
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
};

export default ProjectCard;
