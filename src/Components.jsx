/* Components.jsx holds major jsx components like the Navbar and the Footer */

import React, {useContext} from 'react';

import {Box, Typography, Button, Drawer, Menu, IconButton, AppBar,
  MenuItem, Toolbar, FormGroup, FormControlLabel, Switch} from '@mui/material';

import {
  LinkedIn as LinkedInIcon, GitHub as GitHubIcon,
  Menu as MenuIcon, QuestionAnswer as QuestionAnswerIcon,
  WorkHistory as WorkHistoryIcon, Settings as SettingsIcon,
  ContactPage as ContactPageIcon, Home as HomeIcon,
} from '@mui/icons-material';

/* Distinguish between link types! */
import {Link as RouterLink} from 'react-router-dom';
import {Link as MuiLink} from '@mui/material';

import {ThemeStateContext} from './Contexts';
import { allLinks } from './App';


const resumeLink = 'AdamHammondResumeNov22-4.pdf';


/**
 * Navbar Drawer creator
 * @param {props} props for current page
 * @return {object} JSX
 */
function CustomNavbar(props) {
  /* Acquire themestate from parent's context */
  const {themeState, changeThemeState} = useContext(ThemeStateContext);

  /* State to track if collapsed navbar is open */
  const [CollapsedNBOpen, setCollapsedNBOpen] = React.useState(false);

  /* Handles a change in collapsed NB, setting it to usable boolean */
  const handleChangeCollapsed = (bool) => {
    if (CollapsedNBOpen) {
      setCollapsedNBOpen(false);
    } else {
      setCollapsedNBOpen(true);
    }
  };

  /* State to track anchor of contact */
  const [contactAnchor, setContactAnchor] = React.useState(null);

  const contactOpen = Boolean(contactAnchor);

  /* Handles opening and closing of  Contact */
  const handleContactClick = (event) => {
    setContactAnchor(event.currentTarget);
  };
  const handleContactClose = () => {
    setContactAnchor(null);
  };

  /* State to track anchor of settings */
  const [settingsAnchor, setsettingsAnchor] = React.useState(null);

  const settingsOpen = Boolean(settingsAnchor);

  /* Handles opening and closing settings */
  const handleSettingsClick = (event) => {
    setsettingsAnchor(event.currentTarget);
  };
  const handleSettingsClose = () => {
    setsettingsAnchor(null);
  };

  /* Handles theme change */
  const handleDarkModeChange = () => {
    if (themeState === 'dark') {
      changeThemeState('light');
    } else {
      changeThemeState('dark');
    }
  };

  /* Return all menu buttons of navbar*/
  const menuButtons = () => {
    return (
      <Box>
        <RouterLink to='/'>
          <Button
            sx = {{maxWidth: 120, ml: 2, mb: 1, mt: 1}}
            color = 'NavbarButtons'
            variant = 'contained'
            startIcon={<HomeIcon />}
            name = {'Home button'}
            key = 'Home'>
            <Typography variant = "h6">
              Home
            </Typography>
          </Button>
        </RouterLink>
        <RouterLink to='/Projects'>
          <Button
            sx = {{maxWidth: 120, ml: 2, mb: 1, mt: 1}}
            color = 'NavbarButtons'
            variant = 'contained'
            startIcon={<WorkHistoryIcon />}
            name = {'Projects button'}
            key = 'Projects'>
            <Typography variant = "h6">
              Projects
            </Typography>
          </Button>
        </RouterLink>
        <MuiLink href= {resumeLink} target="_blank">
          <Button
            sx = {{maxWidth: 120, ml: 2, mb: 1, mt: 1}}
            color = 'NavbarButtons'
            variant = 'contained'
            startIcon={<ContactPageIcon />}
            name = {'Resume button'}
            key = 'Resume'>
            <Typography variant = "h6">
              Resume
            </Typography>
          </Button>
        </MuiLink>
        <Button
          onClick = {handleContactClick}
          sx = {{maxWidth: 120, ml: 2, mb: 1, mt: 1}}
          color = 'NavbarButtons'
          variant = 'contained'
          startIcon={<QuestionAnswerIcon />}
          name = {'Contact button'}
          key = 'Contact'>
          <Typography variant = "h6">
            Contact
          </Typography>
        </Button>
        {/* Contact Menu */}
        <Menu
          anchorEl = {contactAnchor}
          open = {contactOpen}
          onClose = {handleContactClose}
          sx = {{minWidth:400}}>
            <Typography>abhammond22@gmail.com</Typography>
        </Menu>
      </Box>
    );
  };
  
  /* ==================================== Navbar Return ==================================== */
  return (
    <Box sx={{flexGrow: 1}}>
  
      {/* ================== Collapsed Navbar ================== */}
      <Drawer
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx = {{xs: 'block', md: 'none', minWidth: 100}}
        label = 'Main Navbar' anchor = 'left'
        name = 'left navbar' open = {CollapsedNBOpen}
        onClose = {handleChangeCollapsed}
        variant = 'temporary' PaperProps={{sx: {width: 160}}}>

        <IconButton />

        {menuButtons()}

      </Drawer>


      {/* ================== Top Navbar ================== */}
      <AppBar position="static"
        color = 'NavbarBackground' name = 'top navbar'>
        <Toolbar disableGutters={true}>

          {/* Collapsed Options */}
          <IconButton sx =
            {{display: {xs: 'flex', md: 'none', padding: 0, m:0},
              fontSize: 40, height: 60, width: 60}}
            name = 'navbar options' color = 'NavbarFunctionalIcons' size = 'large'
            onClick = {handleChangeCollapsed}>
            <MenuIcon sx = {{height: 40, width: 40}} />
          </IconButton>

          {/* Typography box */}
          <Box sx = {{display: 'flex', flexGrow: 1, ml:{xs: 0, md: 2},
            justifyContent: {xs:'center', md:'left'}, flexWrap: 'wrap'}} name = 'typography box'>
            <Typography variant='h2'>
              Adam Hammond
            </Typography>
          </Box>

          {/* Button Box */}
          <Box sx = {{flexGrow: 2, justifyContent: 'flex-end',
            display: {xs: 'none', md: 'flex'}}} name = 'button box'>
            {/* Buttons Box*/}
            {menuButtons()}
          </Box>
  
          {/* Settings Box*/}
          <Box sx = {{flexShrink: 1, mr: {xs:7, md:8},
            width: 0, justifyContent: 'flex-end'}}
            name = 'settings box'>
            <IconButton sx={{height: 60, width: 60 }}onClick = {handleSettingsClick}
              name = 'settings button'>
              <SettingsIcon sx = {{height: 30, width: 30}} color = 'NavbarFunctionalIcons'/>
            </IconButton>
            <Menu
              anchorEl = {settingsAnchor}
              open = {settingsOpen}
              onClose = {handleSettingsClose}>
              <MenuItem>
                <FormGroup>
                  <FormControlLabel control={<Switch
                    checked = {themeState === 'dark'}
                    onChange = {handleDarkModeChange}/>} label="Dark Mode" />
                </FormGroup>
              </MenuItem>
            </Menu>
          </Box>

        </Toolbar>
      </AppBar>

    </Box>
  );
};

/**
 * Custom Footer creator
 * @return {object} JSX
 */
function CustomFooter() {
  return (
    <Box sx = {{display: 'flex', backgroundColor: 'NavbarBackground.main'}}
      color = 'NavbarBackground.contrastText' name = 'footer'
      alignItems = 'center' justifyContent='center'>
      <Typography variant = "h3">
        Adam Hammond
      </Typography>
      <Box sx = {{width: 10}} />
      <IconButton>
        <MuiLink href= {allLinks.linkedin} target="_blank">
          <LinkedInIcon color = 'NavbarFunctionalIcons'
            sx = {{height: 30, width: 30}}/>
        </MuiLink>
      </IconButton>
      <Box sx = {{width: 10}} />
      <IconButton>
        <MuiLink href= {allLinks.github} target="_blank">
          <GitHubIcon color = 'NavbarFunctionalIcons'
            sx = {{height: 30, width: 30}}/>
        </MuiLink>
      </IconButton>
    </Box>
  );
};

/**
 * Routing Navbar creator
 * @return {object} JSX
 */
function routingNavbar() {
  return (
    <div>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/Projects">Projects</RouterLink>
    </div>
  );
};

export {routingNavbar};
export {CustomNavbar};
export {CustomFooter};

