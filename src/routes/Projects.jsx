/* Projects.jsx holds the function that returns the projects content */

import React from 'react';

import {Box, Typography, List, ListItem, IconButton, Link as MUILink,
  useTheme, useMediaQuery,} from '@mui/material';
import {RadioButtonChecked as RadioButtonCheckedIcon,
  Link as LinkIcon} from '@mui/icons-material';

import { leftOrRightColor } from '../helperFunctions';



/* ============================== Static Text ============================== */

const allProjects = {
  'Personal Website': {
    bullets: [
      'Portfolio website hosted on Github Pages with a custom domain name',
      'Designed and built a front-end in JavaScript and React.js, featuring multiple pages and dark mode',
    ],
    link: 'https://github.com/adamhammond22/adamhammond22.github.io',
    dates: 'Oct 2022 - present'
  },
  'Government Document Summarizer': {
    bullets: [
      'Coordinated with sponsor FlashGov to create a full stack web application prototype with a small team of students',
      'Scrapes, stores, and serves government documents with AI-generated summaries, as well as a searching interface',
      'Designed and built a RESTful backend API with Express to interface with database using the Mongoose library',
      'Created and managed MongoDB Atlas cluster holding data, as well as helped develop the React front-end'
    ],
    link: 'https://github.com/adamhammond22/flashGovProject',
    dates: 'Sept 2023 - Dec 2023'
  },
  'iCook Cookbook Application': {
    bullets: [
      'Collaborated an agile team of 6 UCSC students to create a mobile app',
      'Mobile cookbook application compatible with Android & iOS with searching, shopping cart, and local storage',
      'Built much of the front-end using React Native. Added search functionality, interfaced with SQLite via JavaScript',
      'Focused on adhering to Scrum methods: Daily Standup, Release Planning, Sprint planning, Scrum board'
    ],
    link: 'https://github.com/adamhammond22/meal_planner',
    dates: 'June 2023 - Aug 2023'
  },
  'Machine Learning sleep classifier application ': {
    bullets: [
      'Led and collaborated with 3 UCSC students in a machine learning research project for a UCSC neuroscience lab',
      'Built, trained, and fine tuned a complex CNN model in order to classify mouse sleep data for UCSC neuroscience',
      'Worked closely with the researchers to understand their needs and pitch a relevant project trained by their data',
      'Handled transformation of text data into classifiable periods, designed and implemented many hyper-parameters',
      'Managed the project as a whole, met with researchers biweekly, Debugged, researched, and co-designed CNN model'
    ],
    link: 'https://github.com/audsostrom/mice-sleep-analysis',
    dates: 'April 2023 - June 2023'
  },
  'Neuroscience Excel Formatting': {
    bullets: [
      'Formats raw data from BORIS behavior analysis software into usable excel spreadsheet for UCSC Neuroscience Lab',
      'Utilized Python, and pandas library to modify, iterate over, and create new excel sheets',
      'Lots of quality-of-life features like widows batch files to install prereqs and launch the application',
      'Extremely extensive github documentation - designed for use by ordinary users'
    ],
    link: 'https://github.com/adamhammond22/Neurolab_Scripts',
    dates: 'February 2023 - present'
  },
  'Multithreaded HTTP Server': {
    bullets: [
      'Created a multithreaded HTTP Server in C.',
      "Utilized pthread's file locks to safely serve PUT and GET requests on any number of threads.",
      'Threadpool design, program can be executed with any number of worker threads which concurrently serve requests.'
    ],
    link: 'https://github.com/adamhammond22/multithreadedHTTPserver',
    dates: ''
  },
  'Full Stack Email Project': {
    bullets: [
      'Made essentially a Gmail clone using a React.js frontend, Express.js server, and PostrgreSQL database.',
      'Uses a custom RESTful Email API, as well as JWT authentication supporting any number of users.',
      'Can create, send, and recieve emails across users.'
    ],
    link: 'https://github.com/adamhammond22/FullStackEmailProject',
    dates: ''
  },
  'Huffman Encoding Project': {
    bullets: [
      'Created a C program to compress and decompress files with the principles of Huffman Encoding.',
      "Computes a histogram of file's characters anduses a priority queue to make a huffman tree, and then a code table.",
      'Overall idea and structure of the project came from a class I took, but all impementation is my own work.',
      'Permission must be requested to view it unfortunately, as it is from tough a class with high rates of academic dishonesty',
    ],
    link: 'https://github.com/adamhammond22/C-Projects-CSE13/tree/main/EncoderDecoder',
    dates: ''
  },
}

/* ============================== Content Rendering ============================== */

const projectNames = Object.keys(allProjects)

function renderProject(projectName, index) {
  return(
    <Box name={projectName + 'Box'} backgroundColor = {leftOrRightColor(index, 'main')}
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
  )
}


/* Conditionally splits project content into 2 boxes */
function ProjectContentSplitter() {
  /* We render content 2 wide (default) or 1 wide (narrow) based on theme breakpoint */
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  /* If md or larger, return content in 2 columns */
  if (matches) {
    console.log("projNames:", projectNames)
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
              renderProject(projectName, index)
            ))}
        </Box>

        {/* Right Container */}
        <Box name = 'ProjectContentRight' sx={{flexDirection: 'column', flexGrow:1, ml: 2}}>
            {/* Map all project names to a box with a link and a list */}
            {projectNamesRight.map((projectName, index) => (
              renderProject(projectName, index)
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
              renderProject(projectName, index)
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



/*

Inner container - takes up 90%
        <Box name='GridContainer' sx = {{height: 'auto', width: `90%`, mt: 2, mb: 2}}>
        
          {/* Grid container */
          //<Grid container spacing={2} name='ProjectInnerContainer'>

              /* Map all project names to a grid box with a link and a list */
              //{projectNames.map((projectName, index) => (
                //<Grid key={index} item md={6} sx={{width: '100%'}}>

                  //<Box name='GridBox' backgroundColor = {leftOrRightColor(index, 'main')}
                    //color = {leftOrRightColor(index, 'contrastText')} sx={{width: '100%', padding: 2}}>

                    //<Box name='NameBox' sx={{display:'flex', flexDirection: 'row',
                     // justifyContent:'center', alignItems:'center'}}>
                      //<Typography variant = 'h3' align = 'center'>{projectName}</Typography>

                     // <IconButton sx={{alignItems: 'center',
                       // height: 45, width: 45, ml: {xs:0.5, sm:2}}}>
                        //<MUILink href= {allProjects[projectName].link} target="_blank">
                          //<LinkIcon color = {leftOrRightColor(index, 'icon')}
                            //sx = {{height: 35, width: 35, mt:0.5}}/>
//                        </MUILink>
 //                   </IconButton>
   //                 </Box>
//
  //                  <List>
    //////                  {/* Map all bullet points to list items*/}
          //            {allProjects[projectName].bullets.map((bulletPointText, index) => (
            //            <ListItem key={index}>
              //            <RadioButtonCheckedIcon sx = {{mr: 1, height: 15, width: 15}}/>
                //          <Typography variant = 'p3'>{bulletPointText}</Typography>
                  //      </ListItem> 
                    //  ))}  
      //              </List>
//
  //                </Box>
    //            </Grid>
//
  //            ))}
//
  //        </Grid>

   //     </Box>  
