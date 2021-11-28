import * as React from 'react';
import '../styles/Colors.scss'
import '../styles/Section.scss'
import { ReactComponent as figma } from '../assets/figma_logo.svg';
import { ReactComponent as react } from '../assets/react_logo.svg';
import { ReactComponent as unity } from '../assets/unity_logo.svg';
import { ReactComponent as vsc } from '../assets/vsc_logo.svg';
import { ReactComponent as vue } from '../assets/vue_logo.svg';
import { ReactComponent as csharp } from '../assets/csharp_logo.svg';
import { ReactComponent as css } from '../assets/css_logo.svg';
import { ReactComponent as html } from '../assets/html_logo.svg';
import { ReactComponent as javascript } from '../assets/javascript_logo.svg';
import { ReactComponent as java } from '../assets/java_logo.svg';
import { ReactComponent as python } from '../assets/python_logo.svg';
import { ReactComponent as nodejs } from '../assets/nodejs_logo.svg';
import { ReactComponent as sass } from '../assets/sass_logo.svg';
import { ReactComponent as git } from '../assets/git_logo.svg';
import { ReactComponent as postgresql } from '../assets/postgresql_logo.svg';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

const SkillImage = (props) => {
  // Functions
  let image = figma;
  let viewBox = '100 0 100 300';
  let iconName = props.icon;
  let size = 80;
  if (iconName === 'figma') {
    image = figma;
    viewBox = '50 0 100 300';
    size = 75;
  } else if (iconName === 'react') {
    image = react;
    viewBox = '170 100 500 400';
    size = 80;
    iconName = 'React JS'
  } else if (iconName === 'unity') {
    image = unity;
    viewBox = '0 0 500 500';
    size = 90;
  } else if (iconName === 'vsc') {
    image = vsc;
    viewBox = '0 0 100 100';
    size = 75;
    iconName = 'Visual Studio Code';
  } else if (iconName === 'vue') {
    image = vue;
    viewBox = '0 0 260 200';
    size = 80;
    iconName = "Vue JS";
  } else if (iconName === 'csharp') {
    image = csharp;
    viewBox = '0 0 250 290';
    size = 80;
    iconName = "C#";
  } else if (iconName === 'git') {
    image = git;
    viewBox = '0 0 260 200';
    size = 80;
    iconName = "Git";
  } else if (iconName === 'html') {
    image = html;
    viewBox = '0 0 135 140';
    size = 80;
    iconName = "HTML";
  } else if (iconName === 'javascript') {
    image = javascript;
    viewBox = '0 0 700 550';
    size = 80;
    iconName = "Javascript";
  } else if (iconName === 'java') {
    image = java;
    viewBox = '0 0 300 400';
    size = 90;
    iconName = "Java";
  } else if (iconName === 'css') {
    image = css;
    viewBox = '0 0 135 140';
    size = 80;
    iconName = "CSS";
  } else if (iconName === 'sass') {
    image = sass;
    viewBox = '0 0 500 400';
    size = 80;
    iconName = "SASS";
  } else if (iconName === 'nodejs') {
    image = nodejs;
    viewBox = '0 0 285 200';
    size = 80;
    iconName = "Node JS";
  } else if (iconName === 'python') {
    image = python;
    viewBox = '0 0 250 200';
    size = 80;
    iconName = "Python";
  } else {
    image = postgresql;
    viewBox = '0 0 260 200';
    size = 80;
    iconName = "Postgre SQL";
  }
  
  // HTML
  return (
    <Box sx={{ width: 150, height: 150 }}>
      <Stack>
        <Box sx={{ width: 90, height: 90, margin: 'auto' }} className="center-contents">
          <SvgIcon 
            component={ image }
            viewBox={ viewBox }
            sx={{ fontSize: size, margin: 'auto' }}/>
        </Box>
        <Typography
          variant="body1"
          align="center"
          color="tertiary.main"
          sx={{ padding: "10px", textTransform: 'capitalize', margin: 'auto' }}>
          { iconName }
        </Typography>
      </Stack>
    </Box>
  );
};

export default SkillImage;
