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

const timeline_items = [
  {
    title: "Computer Science Major",
    date: "August 2018 - May 2022",
    location: "National University of Singapore",
    description: [
    "• Major in Computer Science.",
    "• Minor in Interactive Media Development.",
    "• Expected Date of Graduation: May 2022",
    "• Current CAP: 4.13"
    ],
    isCurrent: true
  },
  {
    title: "Front-End Developer Intern",
    date: "January 2021 - July 2021",
    location: "DSO National Laboratories",
    description: [
    "• Internship under DSO National Labotories as Front-End Developer.",
    "• Design and developed visualization web-based toolkit using Vue.js framework.",
    "• Communicate with teammates that works on back-end to develop the toolkit.",
    "• Style the website using HTML, CSS, and Quasar libraries, making it responsive and elegant.",
    ],
    isCurrent: false
  },
  {
    title: "Transactional Specialist",
    date: "May 2018 - July 2018",
    location: "Arvato Digital Services",
    description: [
    "• Check documents against information provided and inputting data into Arvato’s system."
    ],
    isCurrent: false
  },
  {
    title: "Airdrop & Underslung Specialist",
    date: "April 2016 - Feburary 2018",
    location: "Singapore Armed Forces",
    description: [
    "• Achieved Airdrop Badge in Air Terminal Company.",
    "• Conducted specialize courses for officers, warrant offices and sergeants.",
    "• Managed Underslung documentation and stores."
    ],
    isCurrent: false
  }
]

const ExperienceTimeline = (props) => {
  // Functions

  // HTML
  return (
    <div>
      <Timeline position="right">
      {timeline_items.map((event) => (
        <TimelineItem key={event.title}>
            <TimelineOppositeContent>
              <Typography
                variant={props.breakpoint === "lg" ? "h5" : "h6"}
                color="secondary.main"
                sx={{ fontWeight: 'bold', padding: "5px" }}>
                { event.title }
              </Typography>
              <Typography
                variant="b1"
                color="text.main">
                { event.date }
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color={ event.isCurrent ? 'primary' : 'secondary' }>
                <WorkIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography
                variant={props.breakpoint === "lg" ? "h5" : "h6"}
                color="secondary.main"
                component="span"
                sx={{ fontWeight: 'bold'}}>
                { event.location }
              </Typography>
              <Box sx={{ width:100, height: 5, paddingTop: 1, paddingBottom: 1 }} className="center-contents">
                <Box sx={{ width:100, height: 5, margin: 'auto' }} className="primary-background-color" />
              </Box>
              {event.description.map((des) => (
                <Typography
                  key={des}
                  variant="b1"
                  color="text.main">
                  {des} <br/>
                </Typography>
              ))}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default ExperienceTimeline;
