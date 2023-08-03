/* Home.jsx holds the function that returns the home content */

import React from 'react';

import {Typography, Box, IconButton, useTheme, useMediaQuery, Link as MUILink} from '@mui/material';

import {LinkedIn as LinkedInIcon, GitHub as GitHubIcon} from '@mui/icons-material';

import {relevantCourseworkBoxes, leftContentBoxes, rightContentBoxes} from '../HomeContent';
import { allLinks } from '../App';

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
        <Box backgroundColor = 'HomeGreetingPanel.main' name = 'GreetingContainer'
          sx={{display: 'flex',  width: `calc(90%)`,
            height: 'auto', mt: 5, flexDirection: {xs: 'column', md: 'row'},
            p: {xs: '8px', md:'16px'}, alignItems: 'center'}} >

          {/* Picture Box */}
          <Box component = 'img' src="adam2.jpg" name = 'PictureBox'
            sx = {{ display: 'flex', maxWidth: '100%', 
              flexShrink: 1, border: 15, borderColor: 'HomeGreetingPanel.dark'}}/>
          
          {/* Text Container */}
          <Box sx = {{p: 5, flexShrink: 2}} name = 'TextContainer'>

            {/* Text */}
            <Typography variant = 'p1' color = 'HomeGreetingPanel.contrastText'>
              Hello There! <br />
            </Typography>
            <Typography variant = 'p2' color = 'HomeGreetingPanel.contrastText'>
              I'm Adam Hammond, <br />
              I am a 4th year Computer Science student at the
              University of California, Santa Cruz. <br/>
            </Typography>
            <br />
            {/* Github Icon */}
            <IconButton>
              <MUILink href= {allLinks.github} target="_blank">
                <GitHubIcon sx = {{height: 40, width: 40}}
                  color='HomeGreetingIcons'/>
              </MUILink>
            </IconButton>
            {/* LinkedIn Icon */}
            <IconButton>
              <MUILink href= {allLinks.linkedin} target="_blank">
                <LinkedInIcon sx = {{height: 40, width: 40}}
                  color = 'HomeGreetingIcons'/>
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
        <Box name= 'MainContentLeft' sx={{flexDirection: 'column', flexGrow: 6, maxWidth: 1000}}>
          {leftContentBoxes()}
          {relevantCourseworkBoxes()}
        </Box>

        {/* Right Container */}
        <Box name = 'MainContentRight' sx={{flexDirection: 'column', flexGrow:3, maxWidth: 500,
          ml: 2}}>
          {rightContentBoxes()}
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
        {relevantCourseworkBoxes()}
      </Box>);
  }
};

export default Home;
