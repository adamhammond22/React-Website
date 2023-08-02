/* Projects.jsx holds the function that returns the projects content */

import React from 'react';

import {Box, Typography, List, ListItem, IconButton, Link as MUILink,
  Grid} from '@mui/material';
import {RadioButtonChecked as RadioButtonCheckedIcon,
  Link as LinkIcon} from '@mui/icons-material';

import { leftOrRightColor } from '../helperFunctions';



/* ============================== Static Text ============================== */

const allProjects = {
  'Personal Website': {
    bullets: [
      'Used React.js and libraries like Material UI.',
      'Utilized npm to manage and deploy the project to github pages.',
      'Purchased a custom domain and set CNAME records to direct towards github pages.'],
    link: 'https://github.com/adamhammond22/adamhammond22.github.io'
  },
  'Neuroscience Excel Formatting': {
    bullets: [
      'Formats raw data from BORIS behavior analysis software into usable excel spreadsheet for UCSC Neuroscience Lab',
      'Utilized Python, and pandas library to modify, iterate over, and create new excel sheets.',
      'Extremely extensive github documentation - designed for use by ordinary users.'],
    link: 'https://github.com/adamhammond22/Neurolab_Scripts'
  },
  'Multithreaded HTTP Server': {
    bullets: [
      'Created a multithreaded HTTP Server in C.',
      "Utilized pthread's file locks to safely serve PUT and GET requests on any number of threads.",
      'Threadpool design, program can be executed with any number of worker threads which concurrently serve requests.'],
    link: 'https://github.com/adamhammond22/multithreadedHTTPserver'
  },
  'Full Stack Email Project': {
    bullets: [
      'Made essentially a Gmail clone using a React.js frontend, Express.js server, and PostrgreSQL database.',
      'Uses a custom RESTful Email API, as well as JWT authentication supporting any number of users.',
      'Can create, send, and recieve emails across users.'],
    link: 'https://github.com/adamhammond22/FullStackEmailProject'
  },
  'Huffman Encoding Project': {
    bullets: [
      'Created a C program to compress and decompress files with the principles of Huffman Encoding.',
      "Computes a histogram of file's characters anduses a priority queue to make a huffman tree, and then a code table.",
      'Overall idea and structure of the project came from a class I took, but all impementation is my own work.',
      'Permission must be requested to view it unfortunately, as it is from tough a class with high rates of academic dishonesty',
    ],
    link: 'https://github.com/adamhammond22/C-Projects-CSE13/tree/main/EncoderDecoder'
  },
}

/* ============================== Content Rendering ============================== */

const projectNames = Object.keys(allProjects)

/**
 * Projects Components
 * @return {object} JSX
 */
function Projects() {
  return (
      /* Main Container, fills whole screen */
      <Box name='ProjectMainContainer' sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

        {/* Inner conainer - takes up 90% */}
        <Box name='GridContainer' sx = {{height: 'auto', width: `90%`, mt: 2, mb: 2}}>
        
          {/* Grid conainer */}
          <Grid container spacing={2} name='ProjectInnerContainer'>

              {/* Map all project names to a grid box with a link and a list */}
              {projectNames.map((projectName, index) => (
                <Grid key={index} item md={6} sx={{width: '100%'}}>

                  <Box name='GridBox' backgroundColor = {leftOrRightColor(index, 'main')}
                    color = {leftOrRightColor(index, 'contrastText')} sx={{width: '100%', padding: 2}}>

                    <Box name='NameBox' sx={{display:'flex', flexDirection: 'row',
                      justifyContent:'center', alignItems:'center'}}>
                      <Typography variant = 'h3' align = 'center'>{projectName}</Typography>

                      <IconButton sx={{alignItems: 'center',
                        height: 45, width: 45, ml: {xs:0.5, sm:2}}}>
                        <MUILink href= {allProjects[projectName].link} target="_blank">
                          <LinkIcon color = {leftOrRightColor(index, 'icon')}
                            sx = {{height: 35, width: 35, mt:0.5}}/>
                        </MUILink>
                    </IconButton>
                    </Box>

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
                </Grid>

              ))}

          </Grid>

        </Box>  
          
      </Box>
  );
}

export default Projects;
