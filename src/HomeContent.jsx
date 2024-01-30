/* HomeContent holds the panels for the content in home. For now they're split into left and right,
  with the subcategory "education and languages" */

import React from 'react';

import {Typography, Box, Grid, IconButton} from '@mui/material';
import {Link as MuiLink} from '@mui/material';

import {Email as EmailIcon, LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon, Circle as CircleIcon} from '@mui/icons-material';

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

  'Python': 'Proficient',
  'JavaScript': 'Proficient',
  'C': 'Proficient',
  'C++': 'Competent',
  'SQL': 'Proficient',
  'HTML/CSS': 'Competent',
}

const conceptsKnown = [ 'Agile Development',  'RESTful APIs', 'Machine Learning', 'Responsive Web Design', 'Full Stack Development']

const technologiesAndTools = [
  'MongoDB', 'PostgreSQL', 'Git', 'Perforce', 'Docker', 'GDB/Valgrind/Make', 'Batch/Bash scripts'
]


const frameworksAndLibraries =  [
  'React', 'React Native', 'Node.js', 'Express.js', 'Flask', 'Pandas', 'PyTorch', 'Hugging Face', 'tkinter']


const markupAndFormatting = [
  'HTML',  'CSS', 'LaTeX',
  'Markdown']

/* ============================== Left Content Boxes ============================== */

/* leftContentBoxes returns JSX rendering content boxes that appear on the right */
const leftContentBoxes = () => {
  return (
    <Box name='LeftContentContainer'>

      {/* About Me Box */}
      <Box color = 'HomeLeftPanel.contrastText' backgroundColor = 'HomeLeftPanel.main'
        sx = {{p: 3, mb: 2}} name = 'AboutMeBox'>
        <Typography sx={{mb:2}}variant = "h3">
        About Me
        </Typography>
        <Typography variant = "p3" sx={{lineHeight: 2}}>
          I'm currently searching for a full-time job in Software Engineering, Full Stack Development, or Machine Learning!<br/>
         
          I am well acquainted with Agile Development, and I love working with a team or alone!
          I have a large repertoire of relevant projects publicly available on my GitHub, including this website. 
          <br/><br/>
          On a personal note: I enjoy rock climbing, hiking, surfing, music, and of course — coding!<br/>
          I've always loved solving problems in organized and creative ways, and I hope to find a job where I can do just that.<br/><br/>
          Feel free to reach out for any reason, you can find my contact information below!<br/><br/>
        </Typography>
      </Box>

      {/* Education Box*/}
      <Box backgroundColor = 'HomeLeftPanel.main' name = 'EducationBox'
        color = 'HomeLeftPanel.contrastText' sx = {{p: 3, mb: 2}}>
        <Typography variant = "h3" >
        Education
        </Typography>
        <Box sx = {{mt: 2}}>
          <Box sx = {{border: 2, padding: 1, mb: 1, borderColor: 'HomeLeftPanel.light', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Box align='left'>
              <Typography  variant = "p3" >
                <b>B.S. Computer Science</b><br />
                University of California Santa Cruz<br />
              </Typography>
            </Box>
            <Box align='right' sx={{ display:'flex', alignItems: 'center'}}> 
              <Typography  variant = "p3" >
                2020 - 2023
              </Typography>
            </Box>
          </Box>
          <Typography variant = "p4">
            5x Dean’s Honors Awards<br/>
            GPA: 3.75
          </Typography>
        </Box>
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
            ◆ Designed C++ classes and functions as backend parents for Unreal Engine 5 elements <br/>
            ◆ Learned and worked with many Unreal 5 systems like Behavior trees, Blueprints, UI plugins<br/>
            ◆ Developed main menu, keybinding design, UI, level generation, and AI behavior<br/>
            ◆ Used Perforce source control with continuous integration on a custom Jenkins server<br/>
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
          {allLinks.email}
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

    </Box>
  );
};


/* ============================== Right Content Boxes ============================== */

/* rightContentBoxes returns JSX rendering content boxes that appear on the left */
const rightContentBoxes = () => {
  return (
    <Box name='RightContentContainer'>

    {/* Languages Box */}
    <Box backgroundColor = 'HomeRightPanel.main' name = 'LanguagesBox'
      color = 'HomeRightPanel.contrastText' sx = {{p: 3, mb: 2}}>
      <Typography variant = "h4" sx = {{mb: 1}}>
      Languages
      </Typography>

      {/* Left and Right side boxes */}
      <Box sx = {{display: 'flex',
        flexDirection: 'row', justifyContent: 'space-between',
        lineHeight: 2, mt: 2}}>

        {/* Left side box */}
        <Box name = 'LangagesLeft'>
          <Typography variant = "p4">
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
          <Typography variant = "p4">
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

      {/* Concepts Box */}
      <Box backgroundColor = 'HomeRightPanel.main' name='SkillsBox'
        color = 'HomeRightPanel.contrastText' sx = {{p: 3, mb: 2}}>
        <Typography variant = "h4" name = 'Concepts'
          sx = {{mb: 1}}>
          Concepts
        </Typography>
        <Box sx = {{mt: 2}}>
          <Typography variant = "p4">
            {conceptsKnown.map((element, index)=> {
                return(
                  <div key={index}>
                    <CircleIcon sx={{width:13, height:13, mr:{xs:0.5, tiny:2}}} />{element}
                  </div>
                )
              })}
          </Typography>
        </Box>
      </Box>


      {/* Technologies & Tools Box */}
      <Box sx = {{flexGrow:1, p: 2, mb:2}} backgroundColor = 'HomeRightPanel.main'
        color = 'HomeRightPanel.contrastText'>
        <Typography variant = "h4" name = 'TechnologiesAndTools'
          sx = {{mb: 1}}>
          Technologies & Tools
        </Typography>
        <Box sx = {{}}>
          <Typography variant = "p4">
            {technologiesAndTools.map((element, index)=> {
                return(
                  <div key={index}>
                    <CircleIcon sx={{width:13, height:13, mr:{xs:0.5, tiny:2}}} />{element}
                  </div>
                )
              })}
          </Typography>
        </Box>
      </Box>


      {/* Frameworks & Libraries Box */}
      <Box sx = {{flexGrow:1, p: 2, mb: 2}} backgroundColor = 'HomeRightPanel.main'
        color = 'HomeRightPanel.contrastText'>
        <Typography variant = "h4" name = 'FrameworksAndLibraries'
          sx = {{mb: 1}}>
          Frameworks & Libraries
        </Typography>
        <Box sx = {{}}>
          <Typography variant = "p4">
            {frameworksAndLibraries.map((element, index)=> {
                return(
                  <div key={index}>
                    <CircleIcon sx={{width:13, height:13, mr:{xs:0.5, tiny:2}}} />{element}
                  </div>
                )
              })}
          </Typography>
        </Box>
      </Box>


      {/* Markup & Formatting Box */}
      <Box backgroundColor = 'HomeRightPanel.main' name='SkillsBox'
        color = 'HomeRightPanel.contrastText' sx = {{p: 3, mb: 2}}>
        <Typography variant = "h4" name = 'MarkupAndFormatting'
          sx = {{mb: 1}}>
          Markup & Formatting
        </Typography>
        <Box sx = {{mt: 2}}>
          <Typography variant = "p4">
            {markupAndFormatting.map((element, index)=> {
                return(
                  <div key={index}>
                    <CircleIcon sx={{width:13, height:13, mr:{xs:0.5, tiny:2}}} />{element}
                  </div>
                )
              })}
          </Typography>
        </Box>
      </Box>
  
    </Box>
  );
};

/* ============================== Relevant Coursework Boxes ============================== */
// Though these do go on the left side, they are broken out to be rendered lower on mobile since they're not important
const relevantCourseworkBoxes = () => {
  return (
  <Box>
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
)}

export {relevantCourseworkBoxes};
export {leftContentBoxes};
export {rightContentBoxes};
