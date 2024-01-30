/* Projects.jsx holds the function that returns the projects content */

import React from 'react';

import {Box, Typography, List, ListItem, IconButton, Link as MUILink,
  useTheme, useMediaQuery,} from '@mui/material';
import {RadioButtonChecked as RadioButtonCheckedIcon,
  Link as LinkIcon} from '@mui/icons-material';

import { leftOrRightColor } from '../helperFunctions';
import { allProjects } from '../ProjectsContent';

/* ============================== Content Rendering ============================== */

// All project names
const projectNames = Object.keys(allProjects)

/* Function to render a single project given their name */
// Note: we have to call indexOf in order to properly color-split when left and right boxes are involved
// Split boolean used to determine color pattern in leftOrRightColor helper function
function renderProject(projectName, split) {
  const projectNameIndex = projectNames.indexOf(projectName)
  return(
    <Box name={projectName + 'Box'} backgroundColor = {leftOrRightColor(projectNameIndex, 'main', split)}
    color = {leftOrRightColor(projectNameIndex, 'contrastText', split)} sx={{width: '100%', padding: 2, mb: 2}}
    key = {projectNameIndex}>
      {/* Box containing name, link dates */}
      <Box name='NameBox' sx={{display:'flex', flexDirection: 'row',
        justifyContent:'space-between', alignItems:'center'}}>
        
        {/* Icon Box */}
        <Box>
          <IconButton sx={{alignItems: 'center', height: 45, width: 45}}>
            <MUILink href= {allProjects[projectName].link} target="_blank">
              <LinkIcon color = {leftOrRightColor(projectNameIndex, 'icon', split)}
                sx = {{height: 35, width: 35, mt:0.5}}/>
            </MUILink>
          </IconButton>
        </Box>
        
        {/* Name Box */}
        <Box>
          <Typography variant = 'h3' align = 'center'>{projectName}</Typography>
        </Box>

        {/* Date Box */}
        <Box sx={{mr: 2}}>
          <Typography variant = 'h6' align = 'center'>{allProjects[projectName].dates}</Typography>
        </Box>

      </Box>
      {/* List containing bullets about project*/}
      <List>
        {/* Map all bullet points to list items*/}
        {allProjects[projectName].bullets.map((bulletPointText, index) => (
          <ListItem key={index}>
            <RadioButtonCheckedIcon sx = {{mr: 1, height: 15, width: 15}}/>
            <Typography variant = 'p3'>{bulletPointText}</Typography>
          </ListItem> 
        ))}  
      </List>
    </Box>
  )
}


/* Conditionally splits project content into 2 boxes */
function ProjectContentSplitter() {
  /* We render content 2 wide (default) or 1 wide (narrow) based on theme breakpoint */
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  /* If md or larger, return content in 2 columns */
  if (matches) {
    const projectNamesLeft = projectNames.filter((_, index) => !(index%2))
    const projectNamesRight = projectNames.filter((_, index) => index%2)
    return (
      /* Contains the split boxes */
      <Box name= 'ProjectContentSplitter' sx={{display: 'flex', width: `90%`, mt: 2, mb:2, height:'auto',
        justifyContent: 'space-between', flexDirection: 'row'}}>

        {/* Left Container */}
        <Box name= 'ProjectContentLeft' sx={{flexDirection: 'column', flexGrow: 1}}>
            {/* Map all project names to a box with a link and a list */}
            {projectNamesLeft.map((projectName, index) => (
              renderProject(projectName, true)
            ))}
        </Box>

        {/* Right Container */}
        <Box name = 'ProjectContentRight' sx={{flexDirection: 'column', flexGrow:1, ml: 2}}>
            {/* Map all project names to a box with a link and a list */}
            {projectNamesRight.map((projectName, index) => (
              renderProject(projectName,  true)
            ))}
        </Box>

      </Box>
    );

  /* If small, return content in 1 column */
  } else {
    return (
      <Box name= 'ProjectContentCenter' sx={{display: 'flex', justifyContent: 'center', width: `calc(90%)`, mt: 2,
        flexDirection: 'column'}}>

            {/* Map all project names to a box with a link and a list */}
            {projectNames.map((projectName, index) => (
              renderProject(projectName, false)
            ))}
        </Box>
    );   
  }
};
/**
 * Projects Components
 * @return {object} JSX
 */
function Projects() {
  return (
      /* Main Container, fills whole screen */
      <Box name='ProjectMainContainer' sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <ProjectContentSplitter />
      </Box>
  );
}

export default Projects;