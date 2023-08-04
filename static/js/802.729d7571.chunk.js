"use strict";(self.webpackChunkreact_deploy=self.webpackChunkreact_deploy||[]).push([[802],{7802:function(e,t,a){a.r(t),a.d(t,{default:function(){return D}});var n=a(2791),i=a(4554),o=a(1889),r=a(890),s=a(3400),d=a(533),c=a(493),l=a(4942),u=a(3366),m=a(7462),p=a(8182),h=a(4419),b=a(627),g=a(2065),v=a(7630),f=a(3736),y=a(7077);var x=function(e,t){return n.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)},Z=a(162),C=a(2071),S=a(6199),k=a(5878),P=a(1217);function j(e){return(0,P.Z)("MuiListItem",e)}var w=(0,k.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var I=(0,k.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function N(e){return(0,P.Z)("MuiListItemSecondaryAction",e)}(0,k.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var A=a(184),G=["className"],L=(0,v.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,m.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),M=n.forwardRef((function(e,t){var a=(0,f.Z)({props:e,name:"MuiListItemSecondaryAction"}),i=a.className,o=(0,u.Z)(a,G),r=n.useContext(S.Z),s=(0,m.Z)({},a,{disableGutters:r.disableGutters}),d=function(e){var t=e.disableGutters,a=e.classes,n={root:["root",t&&"disableGutters"]};return(0,h.Z)(n,N,a)}(s);return(0,A.jsx)(L,(0,m.Z)({className:(0,p.Z)(d.root,i),ownerState:s,ref:t},o))}));M.muiName="ListItemSecondaryAction";var R=M,O=["className"],E=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],T=(0,v.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters,!a.disablePadding&&t.padding,a.button&&t.button,a.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,a=e.theme,n=e.ownerState;return(0,m.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!n.disablePadding&&(0,m.Z)({paddingTop:8,paddingBottom:8},n.dense&&{paddingTop:4,paddingBottom:4},!n.disableGutters&&{paddingLeft:16,paddingRight:16},!!n.secondaryAction&&{paddingRight:48}),!!n.secondaryAction&&(0,l.Z)({},"& > .".concat(I.root),{paddingRight:48}),(t={},(0,l.Z)(t,"&.".concat(w.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),(0,l.Z)(t,"&.".concat(w.selected),(0,l.Z)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,g.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(w.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,g.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),(0,l.Z)(t,"&.".concat(w.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),t),"flex-start"===n.alignItems&&{alignItems:"flex-start"},n.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"},n.button&&(0,l.Z)({transition:a.transitions.create("background-color",{duration:a.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(w.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,g.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,g.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),n.hasSecondaryAction&&{paddingRight:48})})),F=(0,v.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),U=n.forwardRef((function(e,t){var a=(0,f.Z)({props:e,name:"MuiListItem"}),i=a.alignItems,o=void 0===i?"center":i,r=a.autoFocus,s=void 0!==r&&r,d=a.button,c=void 0!==d&&d,l=a.children,g=a.className,v=a.component,k=a.components,P=void 0===k?{}:k,I=a.componentsProps,N=void 0===I?{}:I,G=a.ContainerComponent,L=void 0===G?"li":G,M=a.ContainerProps,U=(void 0===M?{}:M).className,V=a.dense,z=void 0!==V&&V,B=a.disabled,q=void 0!==B&&B,H=a.disableGutters,_=void 0!==H&&H,D=a.disablePadding,W=void 0!==D&&D,K=a.divider,Q=void 0!==K&&K,J=a.focusVisibleClassName,Y=a.secondaryAction,X=a.selected,$=void 0!==X&&X,ee=a.slotProps,te=void 0===ee?{}:ee,ae=a.slots,ne=void 0===ae?{}:ae,ie=(0,u.Z)(a.ContainerProps,O),oe=(0,u.Z)(a,E),re=n.useContext(S.Z),se=n.useMemo((function(){return{dense:z||re.dense||!1,alignItems:o,disableGutters:_}}),[o,re.dense,z,_]),de=n.useRef(null);(0,Z.Z)((function(){s&&de.current&&de.current.focus()}),[s]);var ce=n.Children.toArray(l),le=ce.length&&x(ce[ce.length-1],["ListItemSecondaryAction"]),ue=(0,m.Z)({},a,{alignItems:o,autoFocus:s,button:c,dense:se.dense,disabled:q,disableGutters:_,disablePadding:W,divider:Q,hasSecondaryAction:le,selected:$}),me=function(e){var t=e.alignItems,a=e.button,n=e.classes,i=e.dense,o=e.disabled,r={root:["root",i&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",o&&"disabled",a&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,h.Z)(r,j,n)}(ue),pe=(0,C.Z)(de,t),he=ne.root||P.Root||T,be=te.root||N.root||{},ge=(0,m.Z)({className:(0,p.Z)(me.root,be.className,g),disabled:q},oe),ve=v||"li";return c&&(ge.component=v||"div",ge.focusVisibleClassName=(0,p.Z)(w.focusVisible,J),ve=y.Z),le?(ve=ge.component||v?ve:"div","li"===L&&("li"===ve?ve="div":"li"===ge.component&&(ge.component="div")),(0,A.jsx)(S.Z.Provider,{value:se,children:(0,A.jsxs)(F,(0,m.Z)({as:L,className:(0,p.Z)(me.container,U),ref:pe,ownerState:ue},ie,{children:[(0,A.jsx)(he,(0,m.Z)({},be,!(0,b.Z)(he)&&{as:ve,ownerState:(0,m.Z)({},ue,be.ownerState)},ge,{children:ce})),ce.pop()]}))})):(0,A.jsx)(S.Z.Provider,{value:se,children:(0,A.jsxs)(he,(0,m.Z)({},be,{as:ve,ref:pe},!(0,b.Z)(he)&&{ownerState:(0,m.Z)({},ue,be.ownerState)},ge,{children:[ce,Y&&(0,A.jsx)(R,{children:Y})]}))})})),V=a(9201),z=(0,V.Z)((0,A.jsx)("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}),"Link"),B=(0,V.Z)((0,A.jsx)("path",{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonChecked"),q=a(1131),H={"Personal Website":{bullets:["Used React.js and libraries like Material UI.","Utilized npm to manage and deploy the project to github pages.","Purchased a custom domain and set CNAME records to direct towards github pages."],link:"https://github.com/adamhammond22/adamhammond22.github.io"},"iCook Cookbook Application ":{bullets:["Worked in an agile team of 6 UCSC students, strictly adhering to the Scrum methodology.","The project contains our relevant Scrum documents: Release Planning, Sprint planning, Scrum board, burnup chart, and more","React Native application running on Android & iOS using SQLite for local storage."],link:"https://github.com/adamhammond22/meal_planner"},"Machine Learning sleep classifier application ":{bullets:["Built a RNN machine learning model and packaged it with a simple Python GUI","Built in Python, with support from libraries like Pandas, SkLearn, Tkinter, and more.","Worked closely with Neuroscience researchers to understand their needs and pitch a relevant application trained by their data.","Classifies long periods of mouse EEG and EMG data to assist UCSC Neuroscience researchers in processing data."],link:"https://github.com/audsostrom/mice-sleep-analysis"},"Neuroscience Excel Formatting":{bullets:["Formats raw data from BORIS behavior analysis software into usable excel spreadsheet for UCSC Neuroscience Lab","Utilized Python, and pandas library to modify, iterate over, and create new excel sheets.","Extremely extensive github documentation - designed for use by ordinary users."],link:"https://github.com/adamhammond22/Neurolab_Scripts"},"Multithreaded HTTP Server":{bullets:["Created a multithreaded HTTP Server in C.","Utilized pthread's file locks to safely serve PUT and GET requests on any number of threads.","Threadpool design, program can be executed with any number of worker threads which concurrently serve requests."],link:"https://github.com/adamhammond22/multithreadedHTTPserver"},"Full Stack Email Project":{bullets:["Made essentially a Gmail clone using a React.js frontend, Express.js server, and PostrgreSQL database.","Uses a custom RESTful Email API, as well as JWT authentication supporting any number of users.","Can create, send, and recieve emails across users."],link:"https://github.com/adamhammond22/FullStackEmailProject"},"Huffman Encoding Project":{bullets:["Created a C program to compress and decompress files with the principles of Huffman Encoding.","Computes a histogram of file's characters anduses a priority queue to make a huffman tree, and then a code table.","Overall idea and structure of the project came from a class I took, but all impementation is my own work.","Permission must be requested to view it unfortunately, as it is from tough a class with high rates of academic dishonesty"],link:"https://github.com/adamhammond22/C-Projects-CSE13/tree/main/EncoderDecoder"}},_=Object.keys(H);var D=function(){return(0,A.jsx)(i.Z,{name:"ProjectMainContainer",sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,A.jsx)(i.Z,{name:"GridContainer",sx:{height:"auto",width:"90%",mt:2,mb:2},children:(0,A.jsx)(o.ZP,{container:!0,spacing:2,name:"ProjectInnerContainer",children:_.map((function(e,t){return(0,A.jsx)(o.ZP,{item:!0,md:6,sx:{width:"100%"},children:(0,A.jsxs)(i.Z,{name:"GridBox",backgroundColor:(0,q.KL)(t,"main"),color:(0,q.KL)(t,"contrastText"),sx:{width:"100%",padding:2},children:[(0,A.jsxs)(i.Z,{name:"NameBox",sx:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[(0,A.jsx)(r.Z,{variant:"h3",align:"center",children:e}),(0,A.jsx)(s.Z,{sx:{alignItems:"center",height:45,width:45,ml:{xs:.5,sm:2}},children:(0,A.jsx)(d.Z,{href:H[e].link,target:"_blank",children:(0,A.jsx)(z,{color:(0,q.KL)(t,"icon"),sx:{height:35,width:35,mt:.5}})})})]}),(0,A.jsx)(c.Z,{children:H[e].bullets.map((function(e,t){return(0,A.jsxs)(U,{children:[(0,A.jsx)(B,{sx:{mr:1,height:15,width:15}}),(0,A.jsx)(r.Z,{variant:"p3",children:e})]},t)}))})]})},t)}))})})})}}}]);
//# sourceMappingURL=802.729d7571.chunk.js.map