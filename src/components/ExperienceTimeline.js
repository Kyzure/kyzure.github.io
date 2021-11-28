import * as React from 'react';
import '../styles/Colors.scss'
import '../styles/Section.scss'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import WorkIcon from '@mui/icons-material/Work';

const ExperienceTimeline = () => {
  // Functions

  // HTML
  return (
    <div>
      <Timeline position="right">
      <TimelineItem>
          <TimelineOppositeContent>
            <Typography
              variant="h5"
              color="secondary.main"
              sx={{ fontWeight: 'bold', padding: "5px" }}>
              Computer Science Major
            </Typography>
            <Typography
              variant="b1"
              color="text.main">
              August 2018 - May 2022
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" color="secondary.main" component="span" sx={{ fontWeight: 'bold'}}>
              National University of Singapore <br/>
            </Typography>
            <Box sx={{ width:100, height: 5, paddingTop: 1, paddingBottom: 1 }} className="center-contents">
              <Box sx={{ width:100, height: 5, margin: 'auto' }} className="primary-background-color" />
            </Box>
            <Typography
              variant="b1"
              color="text.main">
              • Major in Computer Science. <br/>
              • Minor in Interactive Media Development. <br/>
              • Expected Date of Graduation: May 2022 <br/>
              • Current CAP: 4.13 
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography
              variant="h5"
              color="secondary.main"
              sx={{ fontWeight: 'bold', padding: "5px" }}>
              Front-End Developer Intern
            </Typography>
            <Typography
              variant="b1"
              color="text.main">
              January 2021 - July 2021
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary">
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" color="secondary.main" component="span" sx={{ fontWeight: 'bold'}}>
              DSO National Laboratories <br/>
            </Typography>
            <Box sx={{ width:100, height: 5, paddingTop: 1, paddingBottom: 1 }} className="center-contents">
              <Box sx={{ width:100, height: 5, margin: 'auto' }} className="primary-background-color" />
            </Box>
            <Typography
              variant="b1"
              color="text.main">
              • Internship under DSO National Labotories as Front-End Developer. <br />
              • Design and developed visualization web-based toolkit using Vue.js framework. <br/>
              • Communicate with teammates that works on back-end to develop the toolkit. <br/>
              • Style the website using HTML, CSS, and Quasar libraries, making it responsive and elegant.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography
              variant="h5"
              color="secondary.main"
              sx={{ fontWeight: 'bold', padding: "5px" }}>
              Transactional Specialist
            </Typography>
            <Typography
              variant="b1"
              color="text.main">
              May 2018 - July 2018
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary">
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" color="secondary.main" component="span" sx={{ fontWeight: 'bold' }}>
              Arvato Digital Services <br/>
            </Typography>
            <Box sx={{ width:100, height: 5, paddingTop: 1, paddingBottom: 1 }} className="center-contents">
              <Box sx={{ width:100, height: 5, margin: 'auto' }} className="primary-background-color" />
            </Box>
            <Typography
              variant="b1"
              color="text.main">
              • Check documents against information provided and inputting data into Arvato’s system. 
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography
              variant="h5"
              color="secondary.main"
              sx={{ fontWeight: 'bold', padding: "5px" }}>
              Airdrop & Underslung Specialist
            </Typography>
            <Typography
              variant="b1"
              color="text.main">
              April 2016 - Feburary 2018
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary">
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" color="secondary.main" component="span" sx={{ fontWeight: 'bold' }}>
              Singapore Armed Forces <br/>
            </Typography>
            <Box sx={{ width:100, height: 5, paddingTop: 1, paddingBottom: 1 }} className="center-contents">
              <Box sx={{ width:100, height: 5, margin: 'auto' }} className="primary-background-color" />
            </Box>
            <Typography
              variant="b1"
              color="text.main">
                • Achieved Airdrop Badge in Air Terminal Company. <br/>
                • Conducted specialize courses for officers, warrant offices and sergeants. <br/>
                • Managed Underslung documentation and stores.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default ExperienceTimeline;
