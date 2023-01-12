"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[678],{3723:function(e,t,n){n.d(t,{L:function(){return d},M:function(){return J},P:function(){return y},S:function(){return O},_:function(){return l},a:function(){return r},b:function(){return c},g:function(){return u},h:function(){return s}});var a=n(7294),o=(n(2369),n(5697)),i=n.n(o);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t.indexOf(n=i[a])>=0||(o[n]=e[n]);return o}const s=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,n,a,o){return void 0===o&&(o={}),r({},n,{loading:a,shouldLoad:e,"data-main-image":"",style:r({},o,{opacity:t?1:0})})}function u(e,t,n,a,o,i,l,s){const c={};i&&(c.backgroundColor=i,"fixed"===n?(c.width=a,c.height=o,c.backgroundColor=i,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),s&&(c.objectPosition=s);const u=r({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:r({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const m=["children"],g=function(e){let{layout:t,width:n,height:o}=e;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:o/n*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:n,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+o+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},d=function(e){let{children:t}=e,n=l(e,m);return a.createElement(a.Fragment,null,a.createElement(g,r({},n)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],b=["fallback","sources","shouldLoad"],p=function(e){let{src:t,srcSet:n,loading:o,alt:i="",shouldLoad:s}=e,c=l(e,h);return a.createElement("img",r({},c,{decoding:"async",loading:o,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?n:void 0,"data-srcset":s?void 0:n,alt:i}))},f=function(e){let{fallback:t,sources:n=[],shouldLoad:o=!0}=e,i=l(e,b);const s=i.sizes||(null==t?void 0:t.sizes),c=a.createElement(p,r({},i,t,{sizes:s,shouldLoad:o}));return n.length?a.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:i}=e;return a.createElement("source",{key:t+"-"+i+"-"+n,type:i,media:t,srcSet:o?n:void 0,"data-srcset":o?void 0:n,sizes:s})})),c):c};var w;p.propTypes={src:o.string.isRequired,alt:o.string.isRequired,sizes:o.string,srcSet:o.string,shouldLoad:o.bool},f.displayName="Picture",f.propTypes={alt:o.string.isRequired,shouldLoad:o.bool,fallback:o.exact({src:o.string.isRequired,srcSet:o.string,sizes:o.string}),sources:o.arrayOf(o.oneOfType([o.exact({media:o.string.isRequired,type:o.string,sizes:o.string,srcSet:o.string.isRequired}),o.exact({media:o.string,type:o.string.isRequired,sizes:o.string,srcSet:o.string.isRequired})]))};const E=["fallback"],y=function(e){let{fallback:t}=e,n=l(e,E);return t?a.createElement(f,r({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",r({},n))};y.displayName="Placeholder",y.propTypes={fallback:o.string,sources:null==(w=f.propTypes)?void 0:w.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};const J=function(e){return a.createElement(a.Fragment,null,a.createElement(f,r({},e)),a.createElement("noscript",null,a.createElement(f,r({},e,{shouldLoad:!0}))))};J.displayName="MainImage",J.propTypes=f.propTypes;const v=function(e,t,n){for(var a=arguments.length,o=new Array(a>3?a-3:0),r=3;r<a;r++)o[r-3]=arguments[r];return e.alt||""===e.alt?i().string.apply(i(),[e,t,n].concat(o)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},k={image:i().object.isRequired,alt:v},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],_=new Set;let C,x;const I=function(e){let{as:t="div",image:o,style:i,backgroundColor:c,className:u,class:m,onStartLoad:g,onLoad:d,onError:h}=e,b=l(e,S);const{width:p,height:f,layout:w}=o,E=function(e,t,n){const a={};let o="gatsby-image-wrapper";return"fixed"===n?(a.width=e,a.height=t):"constrained"===n&&(o="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:o,"data-gatsby-image-wrapper":"",style:a}}(p,f,w),{style:y,className:J}=E,v=l(E,N),k=(0,a.useRef)(),I=(0,a.useMemo)((()=>JSON.stringify(o.images)),[o.images]);m&&(u=m);const L=function(e,t,n){let a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(w,p,f);return(0,a.useEffect)((()=>{C||(C=Promise.all([n.e(774),n.e(223)]).then(n.bind(n,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return x=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&s())return e.complete?(null==g||g({wasCached:!0}),null==d||d({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==d||d({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void _.add(I);if(x&&_.has(I))return;let t,a;return C.then((e=>{let{renderImageToString:n,swapPlaceholderImage:l}=e;k.current&&(k.current.innerHTML=n(r({isLoading:!0,isLoaded:_.has(I),image:o},b)),_.has(I)||(t=requestAnimationFrame((()=>{k.current&&(a=l(k.current,I,_,i,g,d,h))}))))})),()=>{t&&cancelAnimationFrame(t),a&&a()}}),[o]),(0,a.useLayoutEffect)((()=>{_.has(I)&&x&&(k.current.innerHTML=x(r({isLoading:_.has(I),isLoaded:_.has(I),image:o},b)),null==g||g({wasCached:!0}),null==d||d({wasCached:!0}))}),[o]),(0,a.createElement)(t,r({},v,{style:r({},y,i,{backgroundColor:c}),className:J+(u?" "+u:""),ref:k,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},L=(0,a.memo)((function(e){return e.image?(0,a.createElement)(I,e):null}));L.propTypes=k,L.displayName="GatsbyImage";const T=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],P=function(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),o=2;o<n;o++)a[o-2]=arguments[o];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},M=new Set(["fixed","fullWidth","constrained"]),A={src:i().string.isRequired,alt:v,width:P,height:P,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!M.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},O=(q=L,function(e){let{src:t,__imageData:n,__error:o}=e,i=l(e,T);return o&&console.warn(o),n?a.createElement(q,r({image:n},i)):(console.warn("Image not loaded",t),null)});var q;O.displayName="StaticImage",O.propTypes=A},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,n=!1,a=!1;for(let o=0;o<e.length;o++){const i=e[o];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,o)+"-"+e.slice(o),t=!1,a=n,n=!0,o++):n&&a&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,o-1)+"-"+e.slice(o-1),a=n,n=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,a=n,n=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),n=e,t.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n;var n};e.exports=t,e.exports.default=t},8445:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(7294);function o(){return a.createElement("section",{id:"About"},a.createElement("h3",{className:"headings"}," About Me"),a.createElement("p",null," I'm Jonathan Williams and this is my webpage."),a.createElement("p",null," I'm currently a STEM student at UNSW. I have one course remaining for a Bachelors of Engineering (Software) (Honours) & Science (Statistics). "),a.createElement("p",null," I'm currently working with Sydney-based medtech company IkkiWorks to develop the ikkiMoov system: a wearable motion tracker designed to monitor and coach patients undergoing musculoskeletal rehabilitation while they participate in home exercise programs. "),a.createElement("p",null," I am also participating in the UNSW Science Vacation Research Scholarship where I am conducting research related to extreme value forecasting via data augmentation techniques that utilise generative adversarial neural networks (GANs)."),a.createElement("h4",null," Experience"),a.createElement("p",null,"Software Engineering Intern at IkkiWorks ---- (Febuary 2022 - June 2022)"),a.createElement("p",null,"Software Engineering Consultant at IkkiWorks ---- (September 2022 - November 2022)"),a.createElement("h4",null," Education"),a.createElement("p",null,"UNSW Bachelor of Engineering (Software) (Honours) & Science (Statistics) ---- (expected May 2023)"),a.createElement("p",null,"UNSW Science Vacation Research Scholarship ---- (November 2022 - January 2023)"))}function i(){return a.createElement("section",{id:"Contact",className:"text-gray-400 bg-gray-900 body-font"},a.createElement("h3",{className:"headings"},"Contact"),a.createElement("p",null,"Email: jonathan.williams@student.unsw.edu.au"))}var r=n(3723);function l(){return a.createElement("div",{className:"sidebar"},a.createElement("a",{className:"sections active",href:"#Home"},"Home"),a.createElement("a",{className:"sections",href:"#About"},"About"),a.createElement("a",{className:"sections",href:"#Skills"},"Skills"),a.createElement("a",{className:"sections",href:"#Projects"},"Projects"),a.createElement("a",{className:"sections",href:"#Contact"},"Contact"),a.createElement("div",{className:"sections bottom"},a.createElement("div",{className:"reachout"},a.createElement("a",{className:"social",href:"https://www.linkedin.com/in/jonathan-williams-522181254"},a.createElement(r.S,{src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/linkedin_icon.png",alt:"linkedin icon",width:32,height:32,__imageData:n(5870)})),a.createElement("a",{className:"social",href:"https://github.com/Jon-bon-Jono"},a.createElement(r.S,{src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/github_icon.png",alt:"github icon",width:32,height:32,__imageData:n(5073)}))),a.createElement("div",{className:"credit"},"Powered by Gatsby")))}function s(){return a.createElement("section",{id:"Projects",className:"text-gray-400 bg-gray-900 body-font"},a.createElement("h3",{className:"headings"},"Current Projects"),a.createElement("details",{className:"collapsible"},a.createElement("summary",null,"Wearable Inertial-based Motion Tracking Application for Capturing Exercise Repetitions (January 2022 -)"),a.createElement("span",null,a.createElement("p",null,"I began working on a novel motion tracking application during my software engineering internship at IkkiWorks. The application is to be integrated into the ikkiMoov system, their latest product in development. The application serves to generate accurate and drift free estimates of a single MEMS IMU's POSE (position and orientation) and send this to a smartphone-based gesture recognition system in real time."),a.createElement("strong",null,"Position estimates fall within our error budget of less than 10cm accumulated error over 3-5s. "),a.createElement("p",null),a.createElement("iframe",{width:"1063",height:"480",src:"https://www.youtube.com/embed/jr9Yq0Gf_nY",title:"Inertial Motion Tracker for Exercise Repetitions - Intro/Demonstration 1",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))),a.createElement("br",null),a.createElement("details",{className:"collapsible"},a.createElement("summary",null,"Resampling techniques to address imbalanced time series data for regression problems (November 2022 -)"),a.createElement("p",null,"ToDo")),a.createElement("h3",{className:"headings"},"Past Projects"),a.createElement("details",{className:"collapsible"},a.createElement("summary",null,"Optimizing Inertial-based Sensor Fusion for Accurate Orientation Tracking (January 2021 - December 2021)"),a.createElement("p",null,"This was essentially my Software Engineering thesis. I completed this project in collaboration with IkkiWorks. They presented me with a problem where the orientation information generated from an IMU was inaccurate and slow to respond."),a.createElement("p",null,a.createElement("a",{href:"https://drive.google.com/file/d/1O3DPQPNuFrq1QDuoNBO9zluNS5Z1ES5F/view?usp=sharing"},"Link to thesis paper")),a.createElement("p",null,"I was able to complete the following project goals:"),a.createElement("ul",null,a.createElement("li",null,a.createElement("a",null,"Inovating a unique inertial sensor calibration technique which uses ellipsoid fitting and ellipsoidal affine transformations along with preprocessing techniques that use z-score outlier removal and spherical regularization "),a.createElement("br",null),a.createElement("a",{href:"https://github.com/Jon-bon-Jono/IMU-Sensor-Calibration"},"Link to Github repo")),a.createElement("li",null,a.createElement("a",null,"Performing highly accurate calibration of a magnetometer with hard iron ferromagnetic interference caused by a battery"),a.createElement("br",null),a.createElement("a",{href:"https://github.com/Jon-bon-Jono/IMU-Sensor-Calibration#readme"},"Link to results")),a.createElement("li",null,a.createElement("a",null,"Optimizing and tuning the hardware and Madgwick sensor fusion parameters on an Arduino Nano 33 BLE to compensate for ~0.5s delay"),a.createElement("br",null),a.createElement("a",{href:"https://drive.google.com/file/d/1O3DPQPNuFrq1QDuoNBO9zluNS5Z1ES5F/edit?disco=AAAAlfC5xUc"}," Linkt to thesis chapter"))),a.createElement("p",null,"By the end of the project I had managed to significantly reduce delay and eliminated noticeable drift from an IMU quaternion rotation signal "),a.createElement("iframe",{width:"1063",height:"480",src:"https://www.youtube.com/embed/meowvbAdjhs",title:"Thesis Demonstration",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})),a.createElement("br",null),a.createElement("details",{className:"collapsible"},a.createElement("summary",null,"Climate Model (July 2022 - August 2022)"),a.createElement("p",null,"Group project completed for the course MATH3041: Mathematical Modelling for Real World Systems."),a.createElement("p",null,"Built an interactive climate model using differential equations in Jupyter/Python."),a.createElement("p",null,"The model simulates the Earth's surface and deep ocean temperature anomalies (from the year 1850) with a mean absolute error of 0.154°C"),a.createElement("ul",null,a.createElement("li",null,a.createElement("a",{href:"https://colab.research.google.com/drive/1-nZWwWlL7LP2gufw53lPwOfqHAHtMM0D?usp=sharing"},"Try it yourself!")))),a.createElement("br",null),a.createElement("details",{className:"collapsible"},a.createElement("summary",null,"Inertial-based Gesture Classifier for Handwashing Techniques (November 2020 - December 2020)"),a.createElement("p",null,"ToDo")))}function c(){return a.createElement("section",{id:"Skills",className:"text-gray-400 bg-gray-900 body-font"},a.createElement("h2",{className:"headings"}," Skills"),a.createElement("h4",null," Programming Languages"),a.createElement("h5",null," Expert"),a.createElement("img",{width:"100",height:"100",src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/c%2B%2B_icon.PNG",alt:"C++"}),a.createElement("img",{src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/python_icon.png",alt:"Python"}),a.createElement("h5",null,"Proficient"),a.createElement("img",{src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/matlab_icon.png",alt:"Matlab"}),a.createElement("img",{src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/r_icon.png",alt:"R"}),a.createElement("img",{width:"100",height:"100",src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/c_icon.png",alt:"C"}),a.createElement("h4",null,"Libraries/Framework:"),a.createElement("img",{src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/pandas_icon.PNG",alt:"Pandas"}),a.createElement("img",{src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/numpy_icon.png",alt:"NumPy"}),a.createElement("img",{src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/matplotlib_logo.PNG",alt:"MatplotLib"}),a.createElement("img",{src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/sklearn_logo.png",alt:"Sklearn"}),a.createElement("img",{src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/pytorch_icon.png",alt:"PyTorch"}),a.createElement("img",{src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/keras_logo.png",alt:"Keras"}),a.createElement("img",{src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/processing_icon.png",alt:"Processing"}),a.createElement("img",{src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/unity_icon.png",alt:"Unity"}),a.createElement("h4",null,"Software:"),a.createElement("img",{width:"120",height:"100",src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/jupyter_logo.PNG",alt:"Jupyter"}),a.createElement("img",{src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/vsc_icon.png",alt:"VS"}),a.createElement("h4",null,"Knowledge:"),a.createElement("ul",null,a.createElement("li",null,"Data structures and algorithms"),a.createElement("li",null,"Quaternion based spatial rotations"),a.createElement("li",null,"Dead-reckoning and inertial motion sensing"),a.createElement("li",null,"Modelling with differential equations"),a.createElement("li",null,"Regression analysis"),a.createElement("li",null,"Machine learning"),a.createElement("li",null,"Neural networks")))}function u(){return a.createElement("section",{id:"Testimonials",className:"text-gray-400 bg-gray-900 body-font"})}function m(){return a.createElement("section",{id:"Footer"},"This website is powered by React + Gatsby.")}function g(){return a.createElement("main",{id:"Home",className:"main"},a.createElement("img",{className:"mepic",src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/me.PNG",alt:"Me",width:"288",height:"300"}),a.createElement("h1",{className:"name"},a.createElement("span",null,"Jonathan Williams")),a.createElement(l,null),a.createElement(o,null),a.createElement(s,null),a.createElement(c,null),a.createElement(u,null),a.createElement(i,null),a.createElement(m,null))}},5073:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#c8c8c8","images":{"fallback":{"src":"/Jon-bon-Jono.github.io/static/01a94ef6c67b5f1bbfc3a202848f8cd6/914ee/github_icon.png","srcSet":"/Jon-bon-Jono.github.io/static/01a94ef6c67b5f1bbfc3a202848f8cd6/22867/github_icon.png 8w,\\n/Jon-bon-Jono.github.io/static/01a94ef6c67b5f1bbfc3a202848f8cd6/fbc98/github_icon.png 16w,\\n/Jon-bon-Jono.github.io/static/01a94ef6c67b5f1bbfc3a202848f8cd6/914ee/github_icon.png 32w,\\n/Jon-bon-Jono.github.io/static/01a94ef6c67b5f1bbfc3a202848f8cd6/1c9ce/github_icon.png 64w","sizes":"(min-width: 32px) 32px, 100vw"},"sources":[{"srcSet":"/Jon-bon-Jono.github.io/static/01a94ef6c67b5f1bbfc3a202848f8cd6/5d252/github_icon.webp 8w,\\n/Jon-bon-Jono.github.io/static/01a94ef6c67b5f1bbfc3a202848f8cd6/e789a/github_icon.webp 16w,\\n/Jon-bon-Jono.github.io/static/01a94ef6c67b5f1bbfc3a202848f8cd6/ef6ff/github_icon.webp 32w,\\n/Jon-bon-Jono.github.io/static/01a94ef6c67b5f1bbfc3a202848f8cd6/8257c/github_icon.webp 64w","type":"image/webp","sizes":"(min-width: 32px) 32px, 100vw"}]},"width":32,"height":32}')},5870:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#0878b8","images":{"fallback":{"src":"/Jon-bon-Jono.github.io/static/30c453b7f5fbdb09ea0cb42a5dc7a6e5/914ee/linkedin_icon.png","srcSet":"/Jon-bon-Jono.github.io/static/30c453b7f5fbdb09ea0cb42a5dc7a6e5/22867/linkedin_icon.png 8w,\\n/Jon-bon-Jono.github.io/static/30c453b7f5fbdb09ea0cb42a5dc7a6e5/fbc98/linkedin_icon.png 16w,\\n/Jon-bon-Jono.github.io/static/30c453b7f5fbdb09ea0cb42a5dc7a6e5/914ee/linkedin_icon.png 32w,\\n/Jon-bon-Jono.github.io/static/30c453b7f5fbdb09ea0cb42a5dc7a6e5/1c9ce/linkedin_icon.png 64w","sizes":"(min-width: 32px) 32px, 100vw"},"sources":[{"srcSet":"/Jon-bon-Jono.github.io/static/30c453b7f5fbdb09ea0cb42a5dc7a6e5/5d252/linkedin_icon.webp 8w,\\n/Jon-bon-Jono.github.io/static/30c453b7f5fbdb09ea0cb42a5dc7a6e5/e789a/linkedin_icon.webp 16w,\\n/Jon-bon-Jono.github.io/static/30c453b7f5fbdb09ea0cb42a5dc7a6e5/ef6ff/linkedin_icon.webp 32w,\\n/Jon-bon-Jono.github.io/static/30c453b7f5fbdb09ea0cb42a5dc7a6e5/8257c/linkedin_icon.webp 64w","type":"image/webp","sizes":"(min-width: 32px) 32px, 100vw"}]},"width":32,"height":32}')}}]);
//# sourceMappingURL=component---src-pages-index-js-5760503b3902eb6c7d49.js.map