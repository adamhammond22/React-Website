import {createTheme} from '@mui/material/styles';

/* ============================== Shared Values============================== */

 /* Shared Breakpoint Values between themes */
 const breakpointValues = {
  values: {
    xs: 0,
    tiny: 430,
    sm: 600,
    md: 1030,
    lg: 1200,
    // kind of hack-ey way to break experience
    experiencebr: 1430,
    xl: 1536,
  },
}

/* nestedBreakpoints theme is used to create breakpoints within our main themes */
const nestedBreakpointsTheme = createTheme(
  {breakpoints: breakpointValues}
)

 /* Shared Typography between themes */
const typographyStyles = {
    // Top Name font
    h2: {
      fontSize: 55,
      [nestedBreakpointsTheme.breakpoints.only("tiny")]: {
        fontSize: 35,
      },
      [nestedBreakpointsTheme.breakpoints.down("tiny")]: {
        fontSize: 25,
      },
    },
    // Box headers
    h3: {
      fontSize: 30,
      [nestedBreakpointsTheme.breakpoints.down("tiny")]: {
        fontSize: 25,
      },
    },
    // Navbar Buttons
    h6: {
      fontSize: 16,
      fontWeight: 600,
    },
    // "Hello There"
    p1: {
      fontSize: 50,
      fontWeight: 10,
      [nestedBreakpointsTheme.breakpoints.down("sm")]: {
        fontSize: 30,
      },
    },
    // Greeting text
    p2: {
      fontSize: 30,
      fontWeight: 10,
      [nestedBreakpointsTheme.breakpoints.down("sm")]: {
        fontSize: 20,
      },
    },
    // Normal Text
    p3: {
      fontSize: 20,
      [nestedBreakpointsTheme.breakpoints.down("tiny")]: {
        fontSize: 16,
      },
    },
    // Tiny Text
    p4: {
      fontSize: 16,
      [nestedBreakpointsTheme.breakpoints.down("tiny")]: {
        fontSize: 12,
      },
    },
}


/* ============================== Dark Theme ============================== */
const darkTheme = {
  palette: {

    /* Navbar and Footer Colors */
    NavbarBackground: { // Handles Navbar and footer background
      main: '#1f1f1f', //dark grey
      contrastText: '#fff', //clean white
    },
    NavbarButtons: { // Handles Navbar and footer buttons
      main: '#fff', //clean white
      contrastText: '#121212', //black
    },
    NavbarFunctionalIcons: { //Handles settings and collpsedNB
      main: '#fbe49b', //yellow
      contrastText: '#121212', //black
    },
  
    /* Homepage Colors */
    HomeLeftPanel: {
      main: '#1F1F1F', //dark grey
      contrastText: '#fff', //clean white
    },
    HomeRightPanel: {
      main: '#1F1F1F', //dark grey
      contrastText: '#fff', //clean white
    },
    HomeFunctionalIcons: {
      main: '#BB86FC', //bright purple
    },

    HomeGreetingPanel: {
      main: '#444444', //light grey
      contrastText: '#fff', //clean white
      /* Image Border Color */
      dark: '#1F1F1F', //dark grey
    },
    HomeGreetingIcons: {
      main: '#fff', //clean white
    },

    /* Project Colors */
    ProjectMainContainer: {
      main: '#1f1f1f', //dark grey
    },
    ProjectLeftPanel: {
      main: '#1f1f1f', //dark grey
      contrastText: '#fff', //clean white
    },
    ProjectLeftIcon: {
      main: '#BB86FC', //bright purple
    },
    ProjectRightPanel: {
      main: '#444444', //light grey
      contrastText: '#fff', //clean white
    },    
    ProjectRightIcon: {
      main: '#BB86FC', //bright purple
    },

    /* Background Color */
    background: {
      default: '#121212',
    },

  },
  typography: typographyStyles,
  breakpoints: breakpointValues,
  /* Override Drawer Background for CollapsedNB */
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: '#1f1f1f', //dark grey,
        },
      },
    },
  },
};
// https://www.color-hex.com/color-palette/1022622




/* ============================== Light Theme ============================== */
const lightTheme = {
  palette: {

    /* Navbar and Footer Colors */
    NavbarBackground: { // Handles Navbar and footer background
      main: '#42394b',//less deep purple
      contrastText: '#fff', //clean white
    },
    NavbarButtons: { // Handles Navbar and footer buttons
      main: '#fff', //clean white
      contrastText: '#42394b',//less deep purple
    },
    NavbarFunctionalIcons: { //Handles settings and collpsedNB
      main: '#fbe49b', //yellow
    },

    /* Homepage Colors */
    HomeLeftPanel: {
      main: '#3a6860', //turquoise
      contrastText: '#fff', //clean white
    },
    HomeRightPanel: {
      main: '#42394b', //less deep purple
      contrastText: '#fff', //clean white
    },
    HomeFunctionalIcons: {
      main: '#fff', //clean white
    },

    HomeGreetingPanel: {
      main: '#fbe49b', // yellow
      contrastText: 'black',
      /* Image Border Color */
      dark: '#3a6860', //turquoise
    },
    HomeGreetingIcons: {
      main: '#3a6860', //turquoise
    },

    /* Project Colors */
    ProjectMainContainer: {
      main: '#3a6860', //turqoise
    },
    ProjectLeftPanel: {
      main: '#42394b', // less deep purple
      contrastText: '#fff', //clean white
    },
    ProjectLeftIcon: {
      main: '#fff', //clean white
    },
    ProjectRightPanel: {
      main: '#fbe49b', //yellow
      contrastText: 'black',
    },    
    ProjectRightIcon: {
      main: 'black',
    },

    /* Background Color */
    background: {
      default: '#faf4ec',
    },

  },
  typography: typographyStyles,
  breakpoints: breakpointValues,
  /* Override Drawer Background for CollapsedNB */
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: '#42394b',
        },
      },
    },
  },
};

export {lightTheme};
export {darkTheme};
