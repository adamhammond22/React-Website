import React from 'react';
import {CustomFooter} from '../Components';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Typography, List, ListItem, IconButton, Link as MUILink} from '@mui/material';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

/**
 * Projects Components
 * @return {object} JSX
 */
function Projects() {
  return (
    <Box>
      <Box name= 'content' sx={{display: 'flex', alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'}}>
        {/* Projects */}
        <Box backgroundColor = 'quaternary.main'
          sx = {{height: 'auto', width: `calc(90%)`,
            mt: 2, mb: 2, p: 2, flexDirection: 'column', alignItems: 'center'}} >
          {/* projects line 1*/}
          <Box sx = {{display: 'flex', alignItems: 'center',
            justifyContent: 'center',
            flexDirection: {xs: 'column', md: 'row'}}}>
            {/* project 1*/}
            <Box backgroundColor = 'primary.main' color = 'primary.contrastText' alignItems = 'center'
              sx = {{width: `100%`, m: 2, p: 2, border: 5, borderColor: 'secondary.main'}}>
            <Typography variant = 'h3' align = 'center'>Personal Website</Typography>
            <List>
              <ListItem>
                <RadioButtonCheckedIcon sx = {{mr: 1, height: 15, width: 15}}/>
                <Typography variant = 'p3'>Used React.js and libraries like Material UI. </Typography>
              </ListItem>
              <ListItem>
                <RadioButtonCheckedIcon sx = {{mr: 1, height: 15, width: 15}}/>
                <Typography variant = 'p3'> Utilized npm to manage and deploy the project to github pages.</Typography>
              </ListItem>
              <ListItem>
                <RadioButtonCheckedIcon sx = {{mr: 1, height: 15, width: 15}}/>
                <Typography variant = 'p3'> Purchased a custom domain and set CNAME records to direct towards github pages.</Typography>
              </ListItem>            
            </List>
            <IconButton>
              <MUILink href= "https://github.com/adamhammond22/adamhammond22.github.io" target="_blank">
                <GitHubIcon color = 'nbButtons'
                  sx = {{height: 30, width: 30}}/>
              </MUILink>
            </IconButton>
            </Box>
            {/* project 2*/}
            <Box backgroundColor = 'blue'
              sx = {{height: 300, width: `100%`, m: 2}}/>
          </Box>
          {/* projects line 2*/}
          <Box sx = {{display: 'flex', alignItems: 'center',
            justifyContent: 'center',
            flexDirection: {xs: 'column', md: 'row'}}}>
            {/* project 3*/}
            <Box backgroundColor = 'yellow'
              sx = {{height: 300, width: `100%`, m: 2}}/>
            {/* project 4*/}
            <Box backgroundColor = 'green'
              sx = {{height: 300, width: `100%`, m: 2}}/>
          </Box>
        </Box>
      </Box>
      {/* Footer */}
      <CustomFooter />
    </Box>
  );
}

export default Projects;
