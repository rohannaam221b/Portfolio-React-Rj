(this["webpackJsonpPortfolio-React-Rj"]=this["webpackJsonpPortfolio-React-Rj"]||[]).push([[0],Array(27).concat([function(e,t,a){e.exports=a.p+"static/media/react.4009eef3.svg"},,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/html-5.676e8188.svg"},function(e,t,a){e.exports=a.p+"static/media/css3.3707da3c.svg"},function(e,t,a){e.exports=a.p+"static/media/bootstrap-4.ffded238.svg"},function(e,t,a){e.exports=a.p+"static/media/redux.aa0a3376.svg"},function(e,t,a){e.exports=a.p+"static/media/nodejs.a1231528.svg"},function(e,t,a){e.exports=a.p+"static/media/express.c6bab64b.svg"},function(e,t,a){e.exports=a.p+"static/media/postgresql.d7c985e7.svg"},,,,,function(e,t,a){e.exports=a.p+"static/media/slide1.8bce7aef.webp"},function(e,t,a){e.exports=a.p+"static/media/javascript.2d2e31cc.svg"},,,,,,function(e,t,a){e.exports=a.p+"static/media/unnamed.c6959aa0.png"},,,,function(e,t,a){e.exports=a.p+"static/media/slide2.7256f309.webp"},function(e,t,a){e.exports=a.p+"static/media/slide3.8e5b87b6.webp"},,function(e,t,a){e.exports=a.p+"static/media/rohannaam.040c9ced.webp"},function(e,t,a){e.exports=a.p+"static/media/react-router.02419671.svg"},function(e,t,a){e.exports=a.p+"static/media/react-bootstrap.ef194ddf.svg"},function(e,t,a){e.exports=a.p+"static/media/styled-components.9ceedb83.svg"},function(e,t,a){e.exports=a.p+"static/media/github.0ff1a6f0.svg"},,function(e,t,a){e.exports=a.p+"static/media/brain.db3c445b.webp"},function(e,t,a){e.exports=a.p+"static/media/Robofriends.9730fefc.webp"},,,,function(e,t,a){e.exports=a(96)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/background.bf989778.webp"},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(25),c=a.n(r),s=(a(77),a(26)),m=a(24),i=a(5),o=a(30),u=a(12),d=a(54),E=a.n(d);a(78);function p(){var e=Object(m.a)(["\n  .active {\n    visibility: visible;\n    transition: all 200ms ease-in;\n  }\n  .hidden {\n    visibility: hidden;\n    transition: all 200ms ease-out;\n    transform: translate(0, -100%);\n  }\n"]);return p=function(){return e},e}var f=i.b.div(p()),g=function(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(0),m=Object(s.a)(c,2),i=m[0],d=m[1],p=function(){d(document.body.getBoundingClientRect().top),r(document.body.getBoundingClientRect().top>i)},g=a?"active":"hidden";return Object(n.useEffect)((function(){return window.addEventListener("scroll",p),function(){window.removeEventListener("scroll",p)}})),l.a.createElement(f,null,l.a.createElement(o.a,{className:"nav-theme justify-content-between ".concat(g),fixed:"top",variant:"dark",expand:"md"},l.a.createElement("div",null,l.a.createElement(o.a.Brand,{href:"#home"},l.a.createElement("img",{className:"logo",src:E.a,alt:""}))),l.a.createElement("div",null,l.a.createElement(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(o.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(u.a,{className:"mr-auto "},l.a.createElement(u.a.Link,{href:"#home"},"Home"),l.a.createElement(u.a.Link,{href:"#about"},"About"),l.a.createElement(u.a.Link,{href:"#skills"},"Skills"),l.a.createElement(u.a.Link,{href:"#projects"},"Projects"),l.a.createElement(u.a.Link,{href:"#contact"},"Contact"))))))},b=a(29),h=a(47),x=a.n(h),N=a(58),v=a.n(N),k=a(59),y=a.n(k);function w(){var e=Object(m.a)(["\n  position: relative;\n  z-index: 1000000;\n  bottom: 5.5em;\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  background-color: transparent;\n  font-weight: 800;\n  text-shadow: 1px 1px #45a29e;\n  color: #fff;\n  animation: MoveUpDown 2s linear infinite;\n\n  .turn {\n    cursor: pointer;\n    transform: rotate(90deg);\n    color:black\n    \n\n  }\n  @keyframes MoveUpDown {\n       0%, 100% {\n         bottom: 100;\n       }\n       50% {\n         bottom:  50px;\n       }\n     }\n"]);return w=function(){return e},e}var S=i.b.div(w()),j=function(){},T=function(){return l.a.createElement(S,null,l.a.createElement("div",{onClick:j},l.a.createElement(u.a.Link,{href:"#about",className:"turn"}," >>> ")))},R=(a(86),function(e){var t=e.shouldApplyparticles;return l.a.createElement("div",{id:"home"},t?l.a.createElement("img",{className:"d-block w-100 custom-img",src:x.a,alt:"Third slide"}):l.a.createElement(b.a,{controls:!1,indicators:!0,interval:100,pause:!1},l.a.createElement(b.a.Item,null,l.a.createElement("img",{className:"d-block w-100 custom-img",src:x.a,alt:"Second slide"})),l.a.createElement(b.a.Item,null,l.a.createElement("img",{className:"d-block w-100 custom-img",src:v.a,alt:"Third slide"})),l.a.createElement(b.a.Item,null,l.a.createElement("img",{className:"d-block w-100 custom-img",src:y.a,alt:"First slide"}))),l.a.createElement(T,null))}),A=a(60),L=a.n(A);function _(){var e=Object(m.a)(["\n  position: absolute;\n  width: 100%;\n  top: 22rem;\n  z-index: 1;\n  margin-top: -125px;\n  text-align: center;\n\n  strong {\n    font-size: 1.25em;\n  }\n  div {\n    color: ",";\n\n    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);\n    font-weight: 100;\n    letter-spacing: 7px;\n\n    .main {\n      font-size: 50px;\n    }\n\n    .sub {\n      font-size: 27px;\n      letter-spacing: 2px;\n    }\n  }\n"]);return _=function(){return e},e}var C=i.b.h1(_(),(function(e){return e.theme.textColor})),O=function(){return l.a.createElement(C,null,l.a.createElement("div",{className:"titleMessage"},l.a.createElement("div",{className:"heading"},l.a.createElement("div",{className:"main text-center mb-3"},"Hi, I am",l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("strong",null,"Rohan Janardhan Rao"))),l.a.createElement("div",{className:"sub"},l.a.createElement(L.a,{options:{strings:["Front End Engineer","Learner"],autoStart:!0,loop:!0,delay:50}})))))},B=a(22),I=a(16),P=a(11),H=(a(87),a(61)),J=a.n(H),D=a(8),M=a(18),z=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"about"},l.a.createElement("h1",{className:"pt-3 text-center font-details pb-3"},"ABOUT ME"),l.a.createElement(B.a,null,l.a.createElement(I.a,{className:"pt-3 pb-5 align-items-center"},l.a.createElement(P.a,{xs:12,md:6},l.a.createElement(I.a,{className:"justify-content-center mr-2 mb-2"},l.a.createElement(D.a,{className:"profile justify-content-end",alt:"profile",src:J.a,thumbnail:!0,fluid:!0}))),l.a.createElement(P.a,{xs:12,md:6},l.a.createElement(I.a,{className:" align-items-start p-2 my-details rounded"},"Hi there! I am ",l.a.createElement("strong",null,"\xa0Rohan J Rao"),l.a.createElement("br",null),"A Engineer and a Learner, born and brought up in India. I am a Junior Web Developer with React.js, Redux, Express.js, Node.js and PostgreSQL as my tech stack.",l.a.createElement("br",null),"In 2020, I successfully completed my Engineering with specialization in 'Electronics and Telecommunication'.",l.a.createElement("br",null),"Working with Websites, Adding new features, Playing with CSS and JavaScript is what i do.",l.a.createElement("br",null),"My Goal is to be an Expert in JavaScript.",l.a.createElement("br",null),"Being a Self Taught Programmer I have encountered thousands of errors which ultimately taught me how to Survive in this World of Programming.",l.a.createElement("br",null),l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement(P.a,{className:"d-flex justify-content-center flex-wrap"},l.a.createElement("div",null,l.a.createElement("a",{href:"#contact"},l.a.createElement(M.a,{className:"m-2",variant:"outline-primary"},"Lets talk"))),l.a.createElement("div",null,l.a.createElement("a",{href:"https://github.com/rohannaam221b",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(M.a,{className:"m-2",variant:"outline-dark"},"GitHub"))),l.a.createElement("div",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/rohan-rao-3a78b7188/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(M.a,{className:"m-2",variant:"outline-info"},"LinkedIn"))))))))))},F=a(7),U=a(66),K=a(36),W=a.n(K),G=a(37),Q=a.n(G),q=a(38),V=a.n(q),Y=a(27),X=a.n(Y),Z=a(39),$=a.n(Z),ee=a(62),te=a.n(ee),ae=a(63),ne=a.n(ae),le=a(64),re=a.n(le),ce=a(40),se=a.n(ce),me=a(41),ie=a.n(me),oe=a(42),ue=a.n(oe),de=a(65),Ee=a.n(de),pe=a(48),fe=a.n(pe),ge={frontend:[{link:"https://en.wikipedia.org/wiki/HTML5",imgAltText:"HTML 5",imgSrc:W.a,skillName:"HTML5"},{link:"https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",imgAltText:"CSS 3",imgSrc:Q.a,skillName:"CSS3"},{link:"https://www.javascript.com/",imgAltText:"JavaScript",imgSrc:fe.a,skillName:"JavaScript"},{link:"https://getbootstrap.com/",imgAltText:"Bootstrap",imgSrc:V.a,skillName:"Bootstrap"},{link:"https://reactjs.org/",imgAltText:"React JS",imgSrc:X.a,skillName:"React JS"},{link:"https://redux.js.org/",imgAltText:"Redux",imgSrc:$.a,skillName:"Redux"},{link:"https://reacttraining.com/react-router/",imgAltText:"React Router",imgSrc:te.a,skillName:"React Router"},{link:"https://react-bootstrap.github.io/",imgAltText:"React Bootstrap",imgSrc:ne.a,skillName:"React Bootstrap"},{link:"https://styled-components.com/",imgAltText:"styled-components",imgSrc:re.a,skillName:"styled-components"}],backend:[{link:"https://nodejs.org/en/",imgAltText:"Node.js",imgSrc:se.a,skillName:"Node.js"},{link:"https://expressjs.com/",imgAltText:"Express",imgSrc:ie.a,skillName:"Express"}],hostingPlatforms:[{link:"https://pages.github.com/",imgAltText:"GitHub Pages",imgSrc:Ee.a,skillName:"GitHub Pages"}],programmingLanguages:[{link:"https://www.javascript.com/",imgAltText:"JavaScript",imgSrc:fe.a,skillName:"JavaScript"}],databases:[{link:"https://www.postgresql.org/",imgAltText:"PostgreSQL",imgSrc:ue.a,skillName:"PostgreSQL"}]},be=(a(88),function(){return l.a.createElement("div",{className:"pt-3 pb-3"},l.a.createElement("h1",{className:"text-center font-details-b pb-4"},"TECH SKILLS"),l.a.createElement(U.a,null,l.a.createElement(I.a,{className:"d-flex justify-content-around"},l.a.createElement(P.a,{md:4},l.a.createElement(F.a,{className:"focus mt-2 mb-2"},l.a.createElement(F.a.Body,null,l.a.createElement(F.a.Title,{className:"text-center  card-title"},"Frontend"),l.a.createElement("hr",null),l.a.createElement(F.a.Text,{className:"card-text d-flex justify-content-start flex-column"},ge.frontend.map((function(e,t){return l.a.createElement("span",{className:"p-2",key:t},l.a.createElement("a",{className:"text-dark text-decoration-none",href:e.link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(D.a,{src:e.imgSrc,alt:e.imgAltText,rounded:!0,className:"image-style m-1"})," ",e.skillName))})))))),l.a.createElement(P.a,{md:4},l.a.createElement(F.a,{className:"focus mt-2 mb-2"},l.a.createElement(F.a.Body,null,l.a.createElement(F.a.Title,{className:"text-center  card-title"},"Backend"),l.a.createElement("hr",null),l.a.createElement(F.a.Text,{className:"card-text d-flex justify-content-start flex-column"},ge.backend.map((function(e,t){return l.a.createElement("span",{className:"p-2",key:t},l.a.createElement("a",{className:"text-dark text-decoration-none",href:e.link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(D.a,{src:e.imgSrc,alt:e.imgAltText,rounded:!0,className:"image-style m-1"})," ",e.skillName))}))))),l.a.createElement(F.a,{className:"focus mt-2 mb-2 "},l.a.createElement(F.a.Body,null,l.a.createElement(F.a.Title,{className:"text-center  card-title"},"Hosting Platforms"),l.a.createElement("hr",null),l.a.createElement(F.a.Text,{className:"card-text d-flex justify-content-start flex-column"},ge.hostingPlatforms.map((function(e,t){return l.a.createElement("span",{className:"p-2",key:t},l.a.createElement("a",{className:"text-dark text-decoration-none",href:e.link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(D.a,{src:e.imgSrc,alt:e.imgAltText,rounded:!0,className:"image-style m-1"})," ",e.skillName))})))))),l.a.createElement(P.a,{md:4},l.a.createElement(F.a,{className:"focus mt-2 mb-2"},l.a.createElement(F.a.Body,null,l.a.createElement(F.a.Title,{className:"text-center  card-title"},"Programming Languages"),l.a.createElement("hr",null),l.a.createElement(F.a.Text,{className:"card-text d-flex justify-content-start flex-column"},ge.programmingLanguages.map((function(e,t){return l.a.createElement("span",{className:"p-2",key:t},l.a.createElement("a",{className:"text-dark text-decoration-none",href:e.link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(D.a,{src:e.imgSrc,alt:e.imgAltText,rounded:!0,className:"image-style m-1"})," ",e.skillName))}))))),l.a.createElement(F.a,{className:"focus mt-2 mb-2"},l.a.createElement(F.a.Body,null,l.a.createElement(F.a.Title,{className:"text-center  card-title"},"Database"),l.a.createElement("hr",null),l.a.createElement(F.a.Text,{className:"card-text d-flex justify-content-start flex-column"},ge.databases.map((function(e,t){return l.a.createElement("span",{className:"p-2",key:t},l.a.createElement("a",{className:"text-dark text-decoration-none",href:e.link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(D.a,{src:e.imgSrc,alt:e.imgAltText,rounded:!0,className:"image-style m-1"})," ",e.skillName))})))))))))}),he=a(13),xe=a(67),Ne=a.n(xe),ve=a(68),ke=a.n(ve),ye=a(23),we=(a(90),function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"pt-3 text-center font-details-b pb-3"},"PROJECTS"),l.a.createElement(he.c,null,l.a.createElement(he.a,null,l.a.createElement(he.b,{date:"07/2021",className:"text-center",text:"Smart Brain Face Detect app",src:Ne.a,alt:"Smart Brain Face Detect"},l.a.createElement("div",{className:"d-flex justify-content-between flex-column mt-1"},l.a.createElement("div",null,l.a.createElement(ye.a,null,l.a.createElement(F.a,null,l.a.createElement(ye.a.Toggle,{as:F.a.Header,eventKey:"0",className:"p-2 text-center accordian-main"},"PROJECT DETAILS"),l.a.createElement(ye.a.Collapse,{eventKey:"0",className:"text-left"},l.a.createElement(F.a.Body,null,l.a.createElement("strong",null,"Description:")," An app that detects face in a picture.",l.a.createElement("hr",null),l.a.createElement("strong",null,"Features:"),l.a.createElement("ul",{className:"list-styles pt-1"},l.a.createElement("li",null,"Register new user"),l.a.createElement("li",null,"Signin exiting user"),l.a.createElement("li",null,"Keep tracks of entries for each user")),l.a.createElement("hr",null),l.a.createElement("strong",null,"Tech used:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",{className:"p-2"},l.a.createElement(D.a,{src:X.a,alt:"React",rounded:!0,className:"image-style1 m-1"})," ","React")),l.a.createElement("li",null,l.a.createElement("span",{className:"p-2"},l.a.createElement(D.a,{src:se.a,alt:"Node.js",rounded:!0,className:"image-style1 m-1"})," ","Node.js")),l.a.createElement("li",null,l.a.createElement("span",{className:"p-2"},l.a.createElement(D.a,{src:ie.a,alt:"Express",rounded:!0,className:"image-style1 m-1"})," ","Express")),l.a.createElement("li",null,l.a.createElement("span",{className:"p-2"},l.a.createElement(D.a,{src:ue.a,alt:"PostgreSQL",rounded:!0,className:"image-style1 m-1"})," ","PostgreSQL"))),l.a.createElement("hr",null),l.a.createElement("em",null,l.a.createElement("strong",null,"SignUp/ Signin:"),l.a.createElement("br",null),l.a.createElement("br",null),"You can ",l.a.createElement("strong",null,"register")," as new user or"," ",l.a.createElement("strong",null,"log in")," using the demo account below.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("strong",null,"Demo Account Details:"),l.a.createElement("br",null),"email: demo@demo.com",l.a.createElement("br",null),"password: demo")))))),l.a.createElement("div",{className:"d-flex justify-content-between flex-nowrap text-center"},l.a.createElement(he.d,{href:"https://smart-brain-rohan.netlify.app/",target:"_blank"},"SEE LIVE"),l.a.createElement(he.d,{href:"https://github.com/rohannaam221b/smart-Brain",target:"_blank"},"SOURCE CODE")))),l.a.createElement(he.b,{date:"06/2021",className:"text-center",text:"RoboFriends",src:ke.a,alt:"Robo Friends"},l.a.createElement("div",{className:"d-flex justify-content-between flex-column mt-1"},l.a.createElement("div",null,l.a.createElement(ye.a,null,l.a.createElement(F.a,null,l.a.createElement(ye.a.Toggle,{as:F.a.Header,eventKey:"0",className:"p-2 text-center accordian-main"},"PROJECT DETAILS"),l.a.createElement(ye.a.Collapse,{eventKey:"0",className:"text-left"},l.a.createElement(F.a.Body,null,l.a.createElement("strong",null,"Description:")," An app that allows to search through robots fetched in real-time with users.",l.a.createElement("hr",null),l.a.createElement("strong",null,"Features:"),l.a.createElement("ul",{className:"list-styles pt-1"},l.a.createElement("li",null,"Search through Robots"),l.a.createElement("li",null,"Users and Robots being fetched via API call"),l.a.createElement("li",null,"Usage of Redux store")),l.a.createElement("hr",null),l.a.createElement("strong",null,"Tech used:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",{className:"p-2"},l.a.createElement(D.a,{src:W.a,alt:"HTML 5",rounded:!0,className:"image-style m-1"})," ","HTML5")),l.a.createElement("li",null,l.a.createElement("span",{className:"p-2"},l.a.createElement(D.a,{src:Q.a,alt:"CSS 3",rounded:!0,className:"image-style m-1"})," ","CSS3")),l.a.createElement("li",null,l.a.createElement("span",{className:"p-2"},l.a.createElement(D.a,{src:V.a,alt:"Bootstrap 4",rounded:!0,className:"image-style m-1"})," ","Bootstrap 4")),l.a.createElement("li",null,l.a.createElement("span",{className:"p-2"},l.a.createElement(D.a,{src:X.a,alt:"React",rounded:!0,className:"image-style1 m-1"})," ","React")),l.a.createElement("li",null,l.a.createElement("span",{className:"p-2"},l.a.createElement(D.a,{src:$.a,alt:"Redux",rounded:!0,className:"image-style m-1"})," ","Redux")))))))),l.a.createElement("div",{className:"d-flex justify-content-between flex-nowrap text-center"},l.a.createElement(he.d,{href:"https://rohannaam221b.github.io/Robofriends/",target:"_blank"},"SEE LIVE"),l.a.createElement(he.d,{href:"https://github.com/rohannaam221b/Robofriends",target:"_blank"},"SOURCE CODE")))))))}),Se=a(49),je=a.n(Se),Te=a(50),Re=a.n(Te),Ae=a(69),Le=(a(92),function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"pt-3 text-center font-details-b pb-3"},"CONTACT ME"),l.a.createElement(Ae.a,{className:"contact-jumbotron"},l.a.createElement(I.a,{className:"d-flex justify-content-center"},l.a.createElement(P.a,{className:"d-flex justify-content-center align-self-center flex-wrap"},l.a.createElement("div",{className:"m-2"},l.a.createElement("a",{href:"mailto:rohanrao221b@gmail.com",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(M.a,{variant:"outline-danger",title:"rohanrao221b@gmail.com"},l.a.createElement("i",{className:"fas fa-envelope-square"})," Email Me"))),l.a.createElement("div",{className:"m-2"},l.a.createElement("a",{href:"https://www.linkedin.com/in/rohan-rao-3a78b7188/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(M.a,{variant:"outline-primary",title:"Visit my LinkenIn"},l.a.createElement("i",{className:"fab fa-linkedin"})," LinkedIn"))),l.a.createElement("div",{className:"m-2"},l.a.createElement("a",{href:"https://github.com/rohannaam221b",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(M.a,{variant:"outline-dark",title:"My other projects"},l.a.createElement("i",{className:"fab fa-github-square"})," GitHub")))))))}),_e=a(70),Ce=a(71),Oe=a.n(Ce),Be={particles:{number:{value:400,density:{enable:!0,value_area:2e3}},color:{value:"#ffffff"},shape:{type:"polygon",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:20,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:10,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},Ie=(a(93),function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"py-2 text-center footer-style"},"\xa9 ROHAN JANARDHAN RAO \xa0 ",(new Date).getFullYear()))}),Pe=(a(94),function(){var e=Object(n.useState)(window.innerWidth),t=Object(s.a)(e,2),r=t[0],c=t[1],m=Object(n.useState)(r>=900),i=Object(s.a)(m,2),o=i[0],u=i[1];return Object(n.useEffect)((function(){var e=function(){c(window.innerWidth),u(r>=900)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[o,r]),l.a.createElement("div",{className:"App",style:{position:"relative"}},l.a.createElement(g,null),l.a.createElement(R,{shouldApplyparticles:o}),l.a.createElement(O,null),o?l.a.createElement(Oe.a,{className:"particles particles-box",params:Be}):null,l.a.createElement("div",{id:"about"},l.a.createElement(_e.Parallax,{blur:{min:-30,max:30},bgImage:a(95),bgImageAlt:"",strength:-200},l.a.createElement("div",null,l.a.createElement(B.a,{className:"container-box rounded"},l.a.createElement(je.a,{duration:500},l.a.createElement(z,null)))))),l.a.createElement("div",{id:"skills"},l.a.createElement(B.a,{className:"container-box rounded"},l.a.createElement(Re.a,{bottom:!0,duration:500},l.a.createElement("hr",null),l.a.createElement(be,null)))),l.a.createElement("div",{id:"projects"},l.a.createElement(B.a,{className:"container-box rounded"},l.a.createElement(Re.a,{bottom:!0,duration:500},l.a.createElement("hr",null),l.a.createElement(we,null)))),l.a.createElement("div",{id:"contact"},l.a.createElement(B.a,{className:"container-box rounded"},l.a.createElement(je.a,{duration:500},l.a.createElement("hr",null),l.a.createElement(Le,null)))),l.a.createElement("hr",null),l.a.createElement(Ie,null))});c.a.render(l.a.createElement(i.a,{theme:{primary:"#0b0c10",textColor:"#66fcf1"}},l.a.createElement(Pe,null)),document.getElementById("root"))}]),[[72,1,2]]]);
//# sourceMappingURL=main.f288a3d7.chunk.js.map