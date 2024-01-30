/* HomeContent holds the text for the content in projects */


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
    'Machine Learning sleep classifier': {
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
        'Made essentially a Gmail clone using a React.js frontend, Express.js server, and PostgreSQL database.',
        'Uses a custom RESTful Email API, as well as JWT authentication supporting any number of users.',
        'Can create, send, and receive emails across users.'
      ],
      link: 'https://github.com/adamhammond22/FullStackEmailProject',
      dates: ''
    },
    'Huffman Encoding Project': {
      bullets: [
        'Created a C program to compress and decompress files with the principles of Huffman Encoding.',
        "Computes a histogram of file's characters and uses a priority queue to make a huffman tree, and then a code table.",
        'Overall idea and structure of the project came from a class I took, but all implementation is my own work.',
        'Permission must be requested to view it unfortunately, as it is from tough a class with high rates of academic dishonesty',
      ],
      link: 'https://github.com/adamhammond22/C-Projects-CSE13/tree/main/EncoderDecoder',
      dates: ''
    },
  }


  export {allProjects};