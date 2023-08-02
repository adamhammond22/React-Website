/* HomeContent holds the panels for the content in home. They are split into 2 content boxes */

import React from 'react';

import {Typography, Box, Grid, IconButton} from '@mui/material';
import {Link as MuiLink} from '@mui/material';

import {Email as EmailIcon, LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon} from '@mui/icons-material';

import { allLinks } from './App';

/* ============================== Static Text ============================== */
const courses = [
  'Full Stack Web Development',
  'Natural Language Processing',
  'Applied Machine Learning',
  'Software Engineering',
  'Fundamentals of Compiler Design',
  'Comp. Systems & C Programming',
  'Computer Architecture',
  'Algorithm Analysis',
  'Data Structures and Algorithms',
  'Probability & Statistics',
  'Principles of Computer System Design',
  'Computer Networks',
];
const languagesKnown = {
  'C': 'Proficient',
  'C++': 'Competent',
  'Python': 'Proficient',
  'JS, React.js': 'Proficient',
  'HTML/CSS': 'Proficient',
  'PostGreSQL': 'Novice',
  
}
const technologiesKnown = [
  'Windows, Unix & Linux',
  'Command Line & Bash Scripting',
  'Make',
  'Docker',
  'LaTeX',
  'Git & Perforce',
  'Unreal Engine 4 & 5',
]

const frameworksKnown = [
  'React.js',
  'Node.js & Express',
  'Open API',
  'RESTful APIs',
]


/* ============================== Left Content Boxes ============================== */

/* leftContentBoxes returns JSX rendering content boxes that appear on the right */
const leftContentBoxes = () => {
  return (
    <Box name='LeftContentContainer'>

      {/* About Me Box */}
      <Box color = 'HomeLeftPanel.contrastText' backgroundColor = 'HomeLeftPanel.main'
        sx = {{p: 3, mb: 2}} name = 'AboutMeBox'>
        <Typography variant = "h3">
        About Me
        </Typography>
        <Typography variant = "p3">
          I'm interested in Algorithems, Systems, Machine Learning,
          Networking, and more! I'm currently looking for a 2023
          Summer Internship, as well as opportunities after I
          graduate in June 2024!
        </Typography>
      </Box>

      {/* Experience Box */}
      <Box color = 'HomeLeftPanel.contrastText' backgroundColor = 'HomeLeftPanel.main'
        sx = {{p: 3, mb: 2}} name = 'ExperienceBox'>
        <Typography variant = "h3" sx = {{mb: 2}}>
        Experience
        </Typography>
        {/* Box holding the 2 halves */}
        <Box name='ExpSplitterBox' sx = {{display: 'flex',
          flexDirection: {xs: 'column', tiny: 'row'}, justifyContent: 'space-between'}}>

          {/* Left Half - Job Details further divided into 2
          border and margin at the bottom replace the divider between boxes
          so it looks likes it 'flips' when hitting breakpoint 'tiny */}
          <Box sx = {{flexGrow: 1, display: 'flex',
            flexWrap: 'wrap',
            minWidth: 170,
            borderBottom: {xs:5, tiny: 0},
            marginBottom: {xs:2, tiny: 0},
            paddingBottom: {xs:2, tiny: 0}}}>

            <Box sx = {{flexGrow: 1}} name='JobNameTitleBox'>
              <Typography variant = "p3">
                <i><b>Red Tide Games</b></i><br />
              </Typography>
              <Typography variant = 'p4'>
              Junior Programmer
              </Typography>
            </Box>

            <Box name='JobLocationDatesBox' sx = {{
              flexGrow: 1}}>
              <Box sx = {{mt: 2, justifyContent: 'flex-end', flexDirection:'column'}}>
                <Typography variant = "p4">
                  <Box sx={{textAlign: 'right'}}>
                    May 2021 - Sept 2022
                  </Box>
                  <Box sx={{textAlign: 'right'}}>
                    Santa Rosa, CA
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Box>
  
          {/* Spacing box between the halves, dissappears */}
          <Box backgroundColor = 'HomeLeftPanel.contrastText'
            sx = {{flexShrink: 1, minWidth: 5, ml: {xs:2, sm:4}, mr: {xs:2, sm:4},
              display:{xs: 'none', tiny: 'flex'}}}/>
          {/* right Half - Job Description */}
          <Box sx = {{flexGrow: 1, maxWidth: 400}}>
            <Typography variant = "p4">
              Worked Remotely with 2 other programmers on a cohesive
              game in Unreal Engine 5.<br />
              Used Perforce for source control and contributed
              with a  C++ and Unreal Engine 5.
            </Typography>
          </Box>
        </Box>
      </Box>


      {/* Contact Box */}
      <Box color = 'HomeLeftPanel.contrastText' backgroundColor = 'HomeLeftPanel.main'
        sx = {{p: 3, mb: 2, flexDirection: 'column'}} name = 'ContactBox'>
        <Typography variant = "h3">
        Contact Me!
        </Typography>
        <Box sx = {{minHeight: 50, display: 'flex', flexDirection: 'row'}}
          alignItems = 'center'>
          <EmailIcon color = 'HomeFunctionalIcons'/>
          <Typography variant = "p3" sx = {{pl: 2}}>
          abhammond22@gmail.com
          </Typography>
        </Box>
        <Box sx = {{minHeight: 50, display: 'flex', flexDirection: 'row'}}
          alignItems = 'center'>
          <IconButton sx = {{flexShrink: 1, p: 0}}>
            <MuiLink href= {allLinks.linkedin} target="_blank">
              <LinkedInIcon color = 'HomeFunctionalIcons'
                sx = {{p: 0, height: 30, width: 30}}/>
            </MuiLink>
          </IconButton>
          <Typography variant = "p3" sx = {{pl: 2}}>
            {allLinks.linkedin}
          </Typography>
        </Box>
        <Box sx = {{minHeight: 50, display: 'flex', flexDirection: 'row'}}
          alignItems = 'center'>
          <IconButton sx = {{p: 0}}>
            <MuiLink href= {allLinks.github} target="_blank">
              <GitHubIcon color = 'HomeFunctionalIcons'
                sx = {{p: 0, height: 30, width: 30}}/>
            </MuiLink>
          </IconButton>
          <Typography variant = "p3" sx = {{pl: 2}}>
            {allLinks.github}
          </Typography>
        </Box>
      </Box>


      {/* Coursework Box */}
      <Box color = 'HomeLeftPanel.contrastText' backgroundColor = 'HomeLeftPanel.main'
        sx = {{p: 3, mb: 2}} name = 'CourseworkBox'>
        <Typography variant = "h3" sx = {{mb: 3}}>
        Relevant Coursework
        </Typography>
        <Grid container spacing={{xs: 2, md: 3}}
          columns={{xs: 4, sm: 8, md: 8, xl: 12}}>
          {courses.map((course, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Box alignItems = 'center' justifyContent='center'
                sx = {{p: 1, display: 'flex', minHeight: 50, border: 2,
                  borderColor: 'HomeLeftPanel.contrastText', height: 'auto',
                  borderRadius: 4}}>
                <Typography variant = 'p4' align = 'center'>
                  <b>{course}</b>
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

    </Box>
  );
};


/* ============================== Right Content Boxes ============================== */

/* rightContentBoxes returns JSX rendering content boxes that appear on the left */
const rightContentBoxes = () => {
  return (
    <Box name='RightContentContainer'>

      {/* Education Box*/}
      <Box backgroundColor = 'HomeRightPanel.main' name = 'EducationBox'
        color = 'HomeRightPanel.contrastText' sx = {{p: 3, mb: 2}}>
        <Typography variant = "h3" >
        Education
        </Typography>
        <Box sx = {{mt: 2}}>
          <Box sx = {{border: 2, padding: 1, mb: 1}} >
          <Typography variant = "p3">
            <b>B.S. Computer Science</b><br />
            University of California Santa Cruz<br />
          </Typography>
          </Box>
          <Typography variant = "p4">
            Graduating December 2023 (expected)<br/>
            5x Dean’s Honors Awards<br/>
            Cumulative GPA: 3.75
          </Typography>
        </Box>
      </Box>

      {/* Languages Box */}
      <Box backgroundColor = 'HomeRightPanel.main' name = 'LanguagesBox'
        color = 'HomeRightPanel.contrastText' sx = {{p: 3, mb: 2}}>
        <Typography variant = "h3" sx = {{mb: 1}}>
        Languages
        </Typography>

        {/* Left and Right side boxes */}
        <Box sx = {{display: 'flex',
          flexDirection: 'row', justifyContent: 'space-between',
          lineHeight: 1.6, mt: 2}}>

          {/* Left side box */}
          <Box name = 'LangagesLeft'>
            <Typography variant = "p3">
              {(Object.keys(languagesKnown)).map((element, index)=> {
                return(
                  <div key={index}>
                    {element}
                  </div>
                )
              })}
            </Typography>
          </Box>

          {/* right side box */}
          <Box align = 'right' name = 'LanguagesRight'>
            <Typography variant = "p3">
            {(Object.values(languagesKnown)).map((element, index)=> {
                return(
                  <div key={index}>
                    {element}
                  </div>
                )
              })}
            </Typography>
          </Box>
        </Box>
      </Box>


      {/* Skills Box */}
      <Box backgroundColor = 'HomeRightPanel.main' name='SkillsBox'
        color = 'HomeRightPanel.contrastText' sx = {{p: 3, mb: 2}}>
        <Typography variant = "h3" name = 'technologies'
          sx = {{mb: 1}}>
          Technologies
        </Typography>
        <Box sx = {{lineHeight: 1.6, mt: 2}}>
          <Typography variant = "p3">
            {technologiesKnown.map((element, index)=> {
                return(
                  <div key={index}>
                    {element}
                  </div>
                )
              })}
          </Typography>
        </Box>
      </Box>


      {/* Frameworks and Specs Box */}
      <Box backgroundColor = 'HomeRightPanel.main' name = 'FrameworksSpecsBox'
        color = 'HomeRightPanel.contrastText' sx = {{p: 3, mb: 2}}>
        <Typography variant = "h3" >
          Frameworks & Specs
        </Typography>
        <Box sx = {{lineHeight: 1.6, mt: 2}}>
          <Typography variant = "p3">
            {frameworksKnown.map((element, index)=> {
                  return(
                    <div key={index}>
                      {element}
                    </div>
                  )
                })}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};


export {leftContentBoxes};
export {rightContentBoxes};
