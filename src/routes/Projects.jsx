/* Projects.jsx holds the function that returns the projects content */

import React from 'react';


import {Box, Typography, List, ListItem, IconButton, Link as MUILink} from '@mui/material';

import {GitHub as GitHubIcon, RadioButtonChecked as RadioButtonCheckedIcon} from '@mui/icons-material';


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
          <Box sx = {{display: 'flex', alignItems: {xs: 'center', md: 'start'},
            justifyContent: 'center',
            flexDirection: {xs: 'column', md: 'row'}}}>
            {/* Personal Website*/}
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
            {/* Neuroscience Lab*/}
            <Box backgroundColor = 'tertiary.main' color = 'tertiary.contrastText' alignItems = 'center'
              sx = {{width: `100%`, m: 2, p: 2, border: 5, borderColor: 'secondary.main'}}>
              <Typography variant = 'h3' align = 'center'>Neuroscience Excel Formatting</Typography>
              <List>
                <ListItem>
                  <RadioButtonCheckedIcon sx = {{mr: 1, height: 15, width: 15}}/>
                  <Typography variant = 'p3'>Formats raw data from BORIS behavior analysis software into usable excel spreadsheet for UCSC Neuroscience Lab</Typography>
                </ListItem>
                <ListItem>
                  <RadioButtonCheckedIcon sx = {{mr: 1, height: 15, width: 15}}/>
                  <Typography variant = 'p3'> Utilized Python, and pandas library to modify, iterate over, and create new excel sheets.</Typography>
                </ListItem>
                <ListItem>
                  <RadioButtonCheckedIcon sx = {{mr: 1, height: 15, width: 15}}/>
                  <Typography variant = 'p3'> Extremely extensive github documentation - designed for use by ordinary users.</Typography>
                </ListItem>            
              </List>
              <IconButton>
                <MUILink href= "https://github.com/adamhammond22/Neurolab_Scripts" target="_blank">
                  <GitHubIcon color = 'nbButtonsALT'
                    sx = {{height: 30, width: 30}}/>
                </MUILink>
              </IconButton>
            </Box>
          </Box>
          {/* projects line 2*/}
          <Box sx = {{display: 'flex', alignItems: 'center',
            justifyContent: 'center',
            flexDirection: {xs: 'column', md: 'row'}}}>
            {/*Multithreaded HTTP Server*/}
            <Box backgroundColor = 'primary.main' color = 'primary.contrastText' alignItems = 'center'
              sx = {{width: `100%`, m: 2, p: 2, border: 5, borderColor: 'secondary.main'}}>
              <Typography variant = 'h3' align = 'center'>Multithreaded HTTP Server</Typography>
              <List>
                <ListItem>
                  <RadioButtonCheckedIcon sx = {{mr: 1, height: 15, width: 15}}/>
                  <Typography variant = 'p3'>Created a multithreaded HTTP Server in C. </Typography>
                </ListItem>
                <ListItem>
                  <RadioButtonCheckedIcon sx = {{mr: 1, height: 15, width: 15}}/>
                  <Typography variant = 'p3'> Utilized pthread's file locks to safely serve PUT and GET requests on any number of threads.</Typography>
                </ListItem>
                <ListItem>
                  <RadioButtonCheckedIcon sx = {{mr: 1, height: 15, width: 15}}/>
                  <Typography variant = 'p3'> Threadpool design, program can be executed with any number of worker threads which concurrently serve requests.</Typography>
                </ListItem>
                <ListItem>
                  <RadioButtonCheckedIcon sx = {{mr: 1, height: 15, width: 15}}/>
                  <Typography variant = 'p3'> Disclaimer: This was a class project with some given functions for socket programming / connection recieving.</Typography>
                </ListItem>              
              </List>
              <IconButton>
                <MUILink href= "https://github.com/adamhammond22/multithreadedHTTPserver" target="_blank">
                  <GitHubIcon color = 'nbButtons'
                    sx = {{height: 30, width: 30}}/>
                </MUILink>
              </IconButton>
            </Box>
            {/*Full Stack Email Project*/}
            <Box backgroundColor = 'tertiary.main' color = 'tertiary.contrastText' alignItems = 'center'
              sx = {{width: `100%`, m: 2, p: 2, border: 5, borderColor: 'secondary.main'}}>
              <Typography variant = 'h3' align = 'center'>Full Stack Email Project</Typography>
              <List>
                <ListItem>
                  <RadioButtonCheckedIcon sx = {{mr: 1, height: 15, width: 15}}/>
                  <Typography variant = 'p3'>Made essentially a Gmail clone using a React.js frontend, Express.js server, and PostrgreSQL database.</Typography>
                </ListItem>
                <ListItem>
                  <RadioButtonCheckedIcon sx = {{mr: 1, height: 15, width: 15}}/>
                  <Typography variant = 'p3'> Uses a custom RESTful Email API, as well as JWT authentication supporting any number of users.</Typography>
                </ListItem>
                <ListItem>
                  <RadioButtonCheckedIcon sx = {{mr: 1, height: 15, width: 15}}/>
                  <Typography variant = 'p3'> Can create, send, and recieve emails across users.</Typography>
                </ListItem>            
              </List>
              <IconButton>
                <MUILink href= "https://github.com/adamhammond22/FullStackEmailProject" target="_blank">
                  <GitHubIcon color = 'nbButtonsALT'
                    sx = {{height: 30, width: 30}}/>
                </MUILink>
              </IconButton>
            </Box>
          </Box>
          {/* projects line 2*/}
          <Box sx = {{display: 'flex', alignItems: 'center',
            justifyContent: 'center',
            flexDirection: {xs: 'column', md: 'row'}}}>
            {/*Huffman Encoding Project*/}
            <Box backgroundColor = 'primary.main' color = 'primary.contrastText' alignItems = 'center'
              sx = {{width: `100%`, m: 2, p: 2, border: 5, borderColor: 'secondary.main'}}>
              <Typography variant = 'h3' align = 'center'>Huffman Encoding Project</Typography>
              <List>
                <ListItem>
                  <RadioButtonCheckedIcon sx = {{mr: 1, height: 15, width: 15}}/>
                  <Typography variant = 'p3'>Created a C program to compress and decompress files with the principles of Huffman Encoding. </Typography>
                </ListItem>
                <ListItem>
                  <RadioButtonCheckedIcon sx = {{mr: 1, height: 15, width: 15}}/>
                  <Typography variant = 'p3'> Computes a histogram of file's characters anduses a priority queue to make a huffman tree, and then a code table.</Typography>
                </ListItem>
                <ListItem>
                  <RadioButtonCheckedIcon sx = {{mr: 1, height: 15, width: 15}}/>
                  <Typography variant = 'p3'> Overall idea and structure of the project came from a class I took, but all impementation is my own work.</Typography>
                </ListItem>
                <ListItem>
                  <RadioButtonCheckedIcon sx = {{mr: 1, height: 15, width: 15}}/>
                  <Typography variant = 'p3'> Permission must be requested to view it unfortunately, as it is from tough a class with high rates of academic dishonesty.</Typography>
                </ListItem>          
              </List>
              <IconButton>
                <MUILink href= "https://github.com/adamhammond22/C-Projects-CSE13/tree/main/EncoderDecoder" target="_blank">
                  <GitHubIcon color = 'nbButtons'
                    sx = {{height: 30, width: 30}}/>
                </MUILink>
              </IconButton>
            </Box>
            {/* project 5*/}
            <Box backgroundColor = 'tertiary.main' color = 'tertiary.contrastText'
              sx = {{height: 300, width: `100%`, m: 2}}/>
            </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Projects;
