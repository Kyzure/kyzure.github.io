import * as React from 'react';
import '../styles/Colors.scss';
import '../styles/Section.scss';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/icons-material/Link';
import GitHub from '@mui/icons-material/GitHub';

const ProjectCard = (props) => {
  // Functions
  let title = props.title;
  let description = props.description;
  let image = props.image;
  let isColored = props.isColored;
  let githubLink = props.githubLink;
  let demoLink = props.demoLink;
  let trailerLink = props.trailerLink;

  let paperColor = 'secondary-background-color';

  if (isColored) {
    paperColor = 'tertiary-background-color';
  }

  // HTML
  return (
    <Card sx={{  }}>
      <Stack direction="row">
        <Paper sx={{ width: '400px', height: '400px' }}>
          <img src={ image } alt={ title } style={{ width: '400px', height: '300px' }}/>
        </Paper>
        <Box sx={{ width: '400px', height: '300px' }}>
          <Typography
            variant="h5"
            align="center"
            color="primary.main"
            sx={{ fontWeight: 'bold', paddingTop: '20px', paddingBottom: '10px' }}>
            { title.title }
          </Typography>
          <Typography
            variant="b1"
            align="center"
            color="tertiary.main"
            sx={{ paddingTop: '5px', paddingBottom: '5px' }}>
            { description }
          </Typography>
          <Stack direction="row">
            {githubLink !== null ? (
              <Button href={ githubLink }>
                <Link />
                <Typography
                  variant="b1"
                  align="center"
                  color="tertiary.main"
                  sx={{ paddingTop: '5px', paddingBottom: '5px' }}>
                  GitHub
                </Typography>
              </Button> 
            ):<div/>}
            {demoLink !== null ? (
              <Button href={ demoLink }>
                <Link />
                <Typography
                  variant="b1"
                  align="center"
                  color="tertiary.main"
                  sx={{ paddingTop: '5px', paddingBottom: '5px' }}>
                  Demo
                </Typography>
              </Button> 
            ):<div/>}
            {trailerLink !== null ? (
              <Button href={ trailerLink }>
                <Link />
                <Typography
                  variant="b1"
                  align="center"
                  color="tertiary.main"
                  sx={{ paddingTop: '5px', paddingBottom: '5px' }}>
                  Trailer
                </Typography>
              </Button> 
            ):<div/>}
          </Stack>
        </Box>
      </Stack>
    </Card>
  );
};

export default ProjectCard;
