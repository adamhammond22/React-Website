import React from 'react';

import {Typography, Box, IconButton, useTheme} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import {Link as MUILink} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import {leftContentBoxes, rightContentBoxes} from '../HomeContent';


const githubLink = 'https://github.com/adamhammond22';
const linkedInLink = 'https://www.linkedin.com/in/adamhammond22/';

/**
 * Home Component - this stores all the content on the Home Screen
 * @return {object} JSX
 */
function Home() {
  return (

      /* Home Content Containter */
      <Box name= 'HomeContentContainer' sx={{display: 'flex', alignItems: 'center',
        flexDirection: 'column'}}>

        {/* Greeting Container */}
        <Box backgroundColor = 'tertiary.main' name = 'GreetingContainer'
          sx={{display: 'flex',  width: `calc(90%)`,
            height: 'auto', mt: 5, flexDirection: {xs: 'column', md: 'row'},
            p: {xs: '8px', md:'16px'}, alignItems: 'center'}} >

          {/* Picture Box */}
          <Box component = 'img' src="adam2.jpg" name = 'PictureBox'
            sx = {{ display: 'flex', maxWidth: '100%', 
              flexShrink: 1, border: 15, borderColor: 'quaternary.main'}}/>
          
          {/* Text Container */}
          <Box sx = {{p: 5, flexShrink: 2}} name = 'TextContainer'>

            {/* Text */}
            <Typography variant = 'p1' color = 'tertiary.contrastText'>
              Hello There! <br />
            </Typography>
            <Typography variant = 'p2' color = 'tertiary.contrastText'>
              I'm Adam Hammond, <br />
              I am a 3rd year Computer Science student at
              University of California, Santa Cruz.
            </Typography>
            <br />
            {/* Github Icon */}
            <IconButton>
              <MUILink href= {githubLink} target="_blank">
                <GitHubIcon sx = {{height: 40, width: 40}}
                  color = 'welcomeBoxLinks'/>
              </MUILink>
            </IconButton>
            {/* LinkedIn Icon */}
            <IconButton>
              <MUILink href= {linkedInLink} target="_blank">
                <LinkedInIcon sx = {{height: 40, width: 40}}
                  color = 'welcomeBoxLinks'/>
              </MUILink>
            </IconButton>

          </Box>
  
        </Box>

        {/* Main Content Splitting Component */}
        <MainContentSplitter />

      </Box>
  );
}

/**
 * Main Content Splitter
 * Splits Content into 2 or 1 column based on breakpoint
 * @return {object} JSX
 */
function MainContentSplitter() {
  /* We render content 2 wide (default) or 1 wide (narrow) based on theme breakpoint */
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  /* If md or larger, return content in 2 columns */
  if (matches) {
    return (
      /* Contains the split boxes */
      <Box name= 'MainContentSplitter' sx={{display: 'flex', width: `calc(90%)`, mt: 2,
        justifyContent: 'space-between', flexDirection: 'row'}}>

        {/* Left Container */}
        <Box name= 'MainContentLeft' sx={{flexDirection: 'column', flexGrow: 5, maxWidth: 1000}}>
          {rightContentBoxes()}
        </Box>

        {/* Right Container */}
        <Box name = 'MainContentRight' sx={{flexDirection: 'column', flexGrow: 2, maxWidth: 400,
          ml: 2}}>
          {leftContentBoxes()}
        </Box>

      </Box>
    );

  /* If small, return content in 1 column */
  } else {
    return (
      <Box name= 'MainContentCenter' sx={{display: 'flex', justifyContent: 'center', width: `calc(90%)`, mt: 2,
        flexDirection: 'column'}}>
        {leftContentBoxes()}
        {rightContentBoxes()}
      </Box>);
  }
};

export default Home;
