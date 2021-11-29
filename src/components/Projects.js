import * as React from 'react';
import '../styles/Colors.scss'
import '../styles/Section.scss'

import HoroImage from '../assets/horo.png';
import AftershockImage from '../assets/aftershock_prototype.png';
import BoxKidImage from '../assets/boxkids_adventure.png';
import TruckImage from '../assets/truck.png';

import ProjectCard from './ProjectCard.js';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const Projects = () => {
  // Functions

  // HTML
  return (
    <div className="secondary-background-color center-contents">
      <Container fixed sx={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <Typography
          variant="h3"
          align="center"
          color="primary.main"
          sx={{ fontWeight: 'bold', paddingTop: '20px', paddingBottom: '20px' }}>
          Pro<bdo className="tertiary-color">jects</bdo>
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="tertiary.main"
          sx={{ paddingBottom: '40px' }}>
          Projects | School Work | Hobby.
        </Typography>
        <Stack spacing={4}>
          <ProjectCard 
            title={ `BoxKid's Adventure` }
            description={ [
              '• BoxKid’s Adventure is a roguelike auto-battler game where the player travels through dungeons and defeat enemies.',
              '• Created with a team of 6 members in Unity.',
              '• Designed and developed the project’s diegetic and meta user interface.']}
            image={ BoxKidImage }
            githubLink={ null }
            demoLink={ 'https://wingedevil.itch.io/boxkid-great-adventure' }
            trailerLink={ 'https://www.youtube.com/watch?v=jqmpduRItf4&feature=emb_title' }/>
          <ProjectCard 
            title={ 'Truck' }
            description={ [
              '• Truck is a Real-Time Strategy game where players defend a Truck from enemies.',
              '• Created with a team of 6 members in Unity.',
              '• Designed and developed truck’s user interface as well as its interaction.']}
            image={ TruckImage }
            githubLink={ 'https://github.com/TruckDefenseInstitute/Convoy' }
            demoLink={ null }
            trailerLink={ 'https://www.youtube.com/watch?v=hntkA06WXKE' }/>
          <ProjectCard 
            title={ 'Horo' }
            description={ [
            '• Horo is an offline calendar application developed that is capable of setting reminders, deadlines, and to-dos.',
            '• Collaborated in a team of 5 members using  Java libraries and JavaFX.',
            '• Designed and developed Horo’s user interface',
            '• Provided documentation for both User Guide and Developer Guide.']}
            image={ HoroImage }
            githubLink={ 'https://github.com/Kyzure/main' }
            demoLink={ null }
            trailerLink={ null }/>
          <ProjectCard 
            title={ 'Aftershock Prototype' }
            description={ [
              '• The project is a Figma Prototype to redesign the current Aftershock website.',
              '• Developed with a team of 5 members in Figma',
              '• Designed the Base Selection Page and Part Selection Page.' ]}
            image={ AftershockImage }
            githubLink={ null }
            demoLink={ 'https://www.figma.com/proto/gvfIzu7hBneCrXd2MiwQIU/Prototype_8-Afternoon-G3?node-id=583%3A12653&scaling=scale-down-width' }
            trailerLink={ null }/>
        </Stack>
      </Container>
    </div>
  );
};

export default Projects;
