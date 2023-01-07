"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[678],{3723:function(e,t,n){n.d(t,{L:function(){return g},M:function(){return J},P:function(){return y},S:function(){return A},_:function(){return s},a:function(){return r},b:function(){return c},g:function(){return u},h:function(){return l}});var a=n(7294),i=(n(2369),n(5697)),o=n.n(i);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t.indexOf(n=o[a])>=0||(i[n]=e[n]);return i}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,n,a,i){return void 0===i&&(i={}),r({},n,{loading:a,shouldLoad:e,"data-main-image":"",style:r({},i,{opacity:t?1:0})})}function u(e,t,n,a,i,o,s,l){const c={};o&&(c.backgroundColor=o,"fixed"===n?(c.width=a,c.height=i,c.backgroundColor=o,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);const u=r({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:r({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const m=["children"],d=function(e){let{layout:t,width:n,height:i}=e;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/n*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:n,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+i+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,n=s(e,m);return a.createElement(a.Fragment,null,a.createElement(d,r({},n)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],b=["fallback","sources","shouldLoad"],p=function(e){let{src:t,srcSet:n,loading:i,alt:o="",shouldLoad:l}=e,c=s(e,h);return a.createElement("img",r({},c,{decoding:"async",loading:i,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?n:void 0,"data-srcset":l?void 0:n,alt:o}))},f=function(e){let{fallback:t,sources:n=[],shouldLoad:i=!0}=e,o=s(e,b);const l=o.sizes||(null==t?void 0:t.sizes),c=a.createElement(p,r({},o,t,{sizes:l,shouldLoad:i}));return n.length?a.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:o}=e;return a.createElement("source",{key:t+"-"+o+"-"+n,type:o,media:t,srcSet:i?n:void 0,"data-srcset":i?void 0:n,sizes:l})})),c):c};var w;p.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},f.displayName="Picture",f.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};const E=["fallback"],y=function(e){let{fallback:t}=e,n=s(e,E);return t?a.createElement(f,r({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",r({},n))};y.displayName="Placeholder",y.propTypes={fallback:i.string,sources:null==(w=f.propTypes)?void 0:w.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};const J=function(e){return a.createElement(a.Fragment,null,a.createElement(f,r({},e)),a.createElement("noscript",null,a.createElement(f,r({},e,{shouldLoad:!0}))))};J.displayName="MainImage",J.propTypes=f.propTypes;const v=function(e,t,n){for(var a=arguments.length,i=new Array(a>3?a-3:0),r=3;r<a;r++)i[r-3]=arguments[r];return e.alt||""===e.alt?o().string.apply(o(),[e,t,n].concat(i)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},k={image:o().object.isRequired,alt:v},N=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],_=new Set;let C,x;const L=function(e){let{as:t="div",image:i,style:o,backgroundColor:c,className:u,class:m,onStartLoad:d,onLoad:g,onError:h}=e,b=s(e,N);const{width:p,height:f,layout:w}=i,E=function(e,t,n){const a={};let i="gatsby-image-wrapper";return"fixed"===n?(a.width=e,a.height=t):"constrained"===n&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:a}}(p,f,w),{style:y,className:J}=E,v=s(E,S),k=(0,a.useRef)(),L=(0,a.useMemo)((()=>JSON.stringify(i.images)),[i.images]);m&&(u=m);const I=function(e,t,n){let a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(w,p,f);return(0,a.useEffect)((()=>{C||(C=Promise.all([n.e(774),n.e(223)]).then(n.bind(n,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return x=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==d||d({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==d||d({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void _.add(L);if(x&&_.has(L))return;let t,a;return C.then((e=>{let{renderImageToString:n,swapPlaceholderImage:s}=e;k.current&&(k.current.innerHTML=n(r({isLoading:!0,isLoaded:_.has(L),image:i},b)),_.has(L)||(t=requestAnimationFrame((()=>{k.current&&(a=s(k.current,L,_,o,d,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),a&&a()}}),[i]),(0,a.useLayoutEffect)((()=>{_.has(L)&&x&&(k.current.innerHTML=x(r({isLoading:_.has(L),isLoaded:_.has(L),image:i},b)),null==d||d({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,a.createElement)(t,r({},v,{style:r({},y,o,{backgroundColor:c}),className:J+(u?" "+u:""),ref:k,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},I=(0,a.memo)((function(e){return e.image?(0,a.createElement)(L,e):null}));I.propTypes=k,I.displayName="GatsbyImage";const P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],T=function(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),i=2;i<n;i++)a[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},O=new Set(["fixed","fullWidth","constrained"]),M={src:o().string.isRequired,alt:v,width:T,height:T,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!O.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},A=(q=I,function(e){let{src:t,__imageData:n,__error:i}=e,o=s(e,P);return i&&console.warn(i),n?a.createElement(q,r({image:n},o)):(console.warn("Image not loaded",t),null)});var q;A.displayName="StaticImage",A.propTypes=M},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,n=!1,a=!1;for(let i=0;i<e.length;i++){const o=e[i];t&&/[a-zA-Z]/.test(o)&&o.toUpperCase()===o?(e=e.slice(0,i)+"-"+e.slice(i),t=!1,a=n,n=!0,i++):n&&a&&/[a-zA-Z]/.test(o)&&o.toLowerCase()===o?(e=e.slice(0,i-1)+"-"+e.slice(i-1),a=n,n=!1,t=!0):(t=o.toLowerCase()===o&&o.toUpperCase()!==o,a=n,n=o.toUpperCase()===o&&o.toLowerCase()!==o)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),n=e,t.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n;var n};e.exports=t,e.exports.default=t},8445:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(7294);function i(){return a.createElement("section",{id:"About"},a.createElement("h3",{className:"headings"}," About Me"),a.createElement("p",null," I am one course away from completing a Bachelor of Engineering (Software) (Honours) & Science (Statistics) at UNSW Sydney. "),a.createElement("p",null,"I am currently working with Sydney-based medtech company IkkiWorks to develop the ikkiMoov system: a wearable motion tracker designed to monitor and coach users throughout home rehabilitation programs. I am also participating in the UNSW Science Vacation Research Scholarship where I am conducting research related to extreme value forecasting via data augmentation techniques that utilise generative adversarial neural networks (GANs)."),a.createElement("p",null," I am interested in ..."),a.createElement("h4",null," Experience"),a.createElement("p",null,"Software Engineering internship at IkkiWorks ---- (Febuary 2022 - June 2022)"),a.createElement("h4",null," Education"),a.createElement("p",null,"UNSW Bachelor of Engineering (Software) (Honours) & Science (Statistics) ---- (expected May 2023)"),a.createElement("p",null,"UNSW Science Vacation Research Scholarship ---- (December 2022 - Febuary 2023)"))}function o(){return a.createElement("section",{id:"Contact",className:"text-gray-400 bg-gray-900 body-font"},a.createElement("h3",{className:"headings"},"Contact"),a.createElement("p",null,"Email: jonathan.williams@student.unsw.edu.au"))}var r=n(3723);function s(){return a.createElement("div",{className:"sidebar"},a.createElement("a",{className:"sections active",href:"#Home"},"Home"),a.createElement("a",{className:"sections",href:"#About"},"About"),a.createElement("a",{className:"sections",href:"#Skills"},"Skills"),a.createElement("a",{className:"sections",href:"#Projects"},"Projects"),a.createElement("a",{className:"sections",href:"#Contact"},"Contact"),a.createElement("div",{className:"sections bottom"},a.createElement("div",{className:"reachout"},a.createElement("a",{className:"social",href:"https://www.linkedin.com/in/jonathan-williams-522181254"},a.createElement(r.S,{src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/linkedin_icon.png",alt:"linkedin icon",width:32,height:32,__imageData:n(5870)})),a.createElement("a",{className:"social",href:"https://github.com/Jon-bon-Jono"},a.createElement(r.S,{src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/github_icon.png",alt:"github icon",width:32,height:32,__imageData:n(5073)}))),a.createElement("div",{className:"credit"},"Powered by Gatsby")))}function l(){return a.createElement("section",{id:"Projects",className:"text-gray-400 bg-gray-900 body-font"},a.createElement("h3",{className:"headings"},"Current Projects"),a.createElement("details",{className:"collapsible"},a.createElement("summary",null,"Wearable Inertial-based Motion Tracking Application for Capturing Exercise Repetitions (January 2022 -)"),a.createElement("span",null,a.createElement("p",null,"I began working on a novel motion tracking application during my software engineering internship at IkkiWorks. The application is to be integrated into the ikkiMoov system, their latest product in development. The application serves to generate accurate and drift free estimates of a single MEMS IMU's POSE (position and orientation) and send this to a smartphone-based gesture recognition system in real time."),a.createElement("strong",null,"Position estimates fall within our error budget of less than 10cm accumulated error over 3-5s. "),a.createElement("p",null),a.createElement("iframe",{width:"1063",height:"480",src:"https://www.youtube.com/embed/jr9Yq0Gf_nY",title:"Inertial Motion Tracker for Exercise Repetitions - Intro/Demonstration 1",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))),a.createElement("br",null),a.createElement("details",{className:"collapsible"},a.createElement("summary",null,"Resampling techniques to address imbalanced time series data for regression problems (November 2022 -)"),a.createElement("p",null,"TODO")),a.createElement("h3",{className:"headings"},"Past Projects"),a.createElement("details",{className:"collapsible"},a.createElement("summary",null,"Optimizing Inertial-based Sensor Fusion for Accurate Orientation Tracking (January 2021 - December 2021)"),a.createElement("p",null,"This was essentially my Software Engineering thesis. I completed this project in collaboration with IkkiWorks. They presented me with a problem where the orientation information generated from an IMU was inaccurate and slow to respond."),a.createElement("p",null,a.createElement("a",{href:"https://drive.google.com/file/d/1O3DPQPNuFrq1QDuoNBO9zluNS5Z1ES5F/view?usp=sharing"},"Link to thesis paper")),a.createElement("p",null,"I was able to complete the following project goals:"),a.createElement("ul",null,a.createElement("li",null,a.createElement("a",null,"Inovating a unique inertial sensor calibration technique which uses ellipsoid fitting and ellipsoidal affine transformations along with preprocessing techniques that use z-score outlier removal and spherical regularization "),a.createElement("br",null),a.createElement("a",{href:"https://github.com/Jon-bon-Jono/IMU-Sensor-Calibration"},"Link to Github repo")),a.createElement("li",null,a.createElement("a",null,"Performing highly accurate calibration of a magnetometer with hard iron ferromagnetic interference caused by a battery"),a.createElement("br",null),a.createElement("a",{href:"https://github.com/Jon-bon-Jono/IMU-Sensor-Calibration#readme"},"Link to results")),a.createElement("li",null,a.createElement("a",null,"Optimizing and tuning the hardware and Madgwick sensor fusion parameters on an Arduino Nano 33 BLE to compensate for ~0.5s delay"),a.createElement("br",null),a.createElement("a",{href:"https://drive.google.com/file/d/1O3DPQPNuFrq1QDuoNBO9zluNS5Z1ES5F/edit?disco=AAAAlfC5xUc"}," Linkt to thesis chapter")))),a.createElement("br",null),a.createElement("details",{className:"collapsible"},a.createElement("summary",null,"Climate Model ()"),a.createElement("p",null,"TODO")),a.createElement("br",null),a.createElement("details",{className:"collapsible"},a.createElement("summary",null,"Inertial-based Gesture Classifier for Handwashing Techniques (- December 2020)"),a.createElement("p",null,"TODO")))}function c(){return a.createElement("section",{id:"Skills",className:"text-gray-400 bg-gray-900 body-font"},a.createElement("h2",{className:"headings"}," Skills"),a.createElement("h4",{className:"headings"}," Programming Languages"),a.createElement("h5",{className:"headings"}," Expert"),a.createElement("img",{width:"100",height:"100",src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/c%2B%2B_icon.PNG",alt:"C++"}),a.createElement("img",{src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/python_icon.png",alt:"Python"}),a.createElement("h5",{className:"headings"},"Proficient"),a.createElement("img",{src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/matlab_icon.png",alt:"Matlab"}),a.createElement("img",{src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/r_icon.png",alt:"R"}),a.createElement("h4",{className:"headings"},"Libraries/Framework:"),a.createElement("img",{src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/pandas_icon.PNG",alt:"Pandas"}),a.createElement("img",{src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/numpy_icon.png",alt:"NumPy"}),a.createElement("img",{src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/matplotlib_logo.PNG",alt:"MatplotLib"}),a.createElement("img",{src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/processing_icon.png",alt:"Processing"}),a.createElement("img",{src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/unity_icon.png",alt:"Unity"}),a.createElement("h4",{className:"headings"},"Software:"),a.createElement("img",{width:"120",height:"100",src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/jupyter_logo.PNG",alt:"Jupyter"}),a.createElement("img",{src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/vsc_icon.png",alt:"VS"}),a.createElement("h4",{className:"headings"},"Knowledge:"),a.createElement("ul",null,a.createElement("li",null,"Quaternion based spatial rotations"),a.createElement("li",null,"Dead-reckoning and inertial navigation"),a.createElement("li",null,"Modelling with differential equations"),a.createElement("li",null,"Regression analysis")))}function u(){return a.createElement("section",{id:"Testimonials",className:"text-gray-400 bg-gray-900 body-font"})}function m(){return a.createElement("section",{id:"Footer"},"This website is powered by React + Gatsby.")}function d(){return a.createElement("main",{id:"Home",className:"headings"},a.createElement("img",{className:"mepic",src:"https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/me.PNG",alt:"Me",width:"288",height:"300"}),a.createElement("h1",{className:"name"},a.createElement("span",null,"Jonathan Williams")),a.createElement(s,null),a.createElement(i,null),a.createElement(l,null),a.createElement(c,null),a.createElement(u,null),a.createElement(o,null),a.createElement(m,null))}},5073:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#c8c8c8","images":{"fallback":{"src":"/Jon-bon-Jono.github.io/static/01a94ef6c67b5f1bbfc3a202848f8cd6/914ee/github_icon.png","srcSet":"/Jon-bon-Jono.github.io/static/01a94ef6c67b5f1bbfc3a202848f8cd6/22867/github_icon.png 8w,\\n/Jon-bon-Jono.github.io/static/01a94ef6c67b5f1bbfc3a202848f8cd6/fbc98/github_icon.png 16w,\\n/Jon-bon-Jono.github.io/static/01a94ef6c67b5f1bbfc3a202848f8cd6/914ee/github_icon.png 32w,\\n/Jon-bon-Jono.github.io/static/01a94ef6c67b5f1bbfc3a202848f8cd6/1c9ce/github_icon.png 64w","sizes":"(min-width: 32px) 32px, 100vw"},"sources":[{"srcSet":"/Jon-bon-Jono.github.io/static/01a94ef6c67b5f1bbfc3a202848f8cd6/5d252/github_icon.webp 8w,\\n/Jon-bon-Jono.github.io/static/01a94ef6c67b5f1bbfc3a202848f8cd6/e789a/github_icon.webp 16w,\\n/Jon-bon-Jono.github.io/static/01a94ef6c67b5f1bbfc3a202848f8cd6/ef6ff/github_icon.webp 32w,\\n/Jon-bon-Jono.github.io/static/01a94ef6c67b5f1bbfc3a202848f8cd6/8257c/github_icon.webp 64w","type":"image/webp","sizes":"(min-width: 32px) 32px, 100vw"}]},"width":32,"height":32}')},5870:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#0878b8","images":{"fallback":{"src":"/Jon-bon-Jono.github.io/static/30c453b7f5fbdb09ea0cb42a5dc7a6e5/914ee/linkedin_icon.png","srcSet":"/Jon-bon-Jono.github.io/static/30c453b7f5fbdb09ea0cb42a5dc7a6e5/22867/linkedin_icon.png 8w,\\n/Jon-bon-Jono.github.io/static/30c453b7f5fbdb09ea0cb42a5dc7a6e5/fbc98/linkedin_icon.png 16w,\\n/Jon-bon-Jono.github.io/static/30c453b7f5fbdb09ea0cb42a5dc7a6e5/914ee/linkedin_icon.png 32w,\\n/Jon-bon-Jono.github.io/static/30c453b7f5fbdb09ea0cb42a5dc7a6e5/1c9ce/linkedin_icon.png 64w","sizes":"(min-width: 32px) 32px, 100vw"},"sources":[{"srcSet":"/Jon-bon-Jono.github.io/static/30c453b7f5fbdb09ea0cb42a5dc7a6e5/5d252/linkedin_icon.webp 8w,\\n/Jon-bon-Jono.github.io/static/30c453b7f5fbdb09ea0cb42a5dc7a6e5/e789a/linkedin_icon.webp 16w,\\n/Jon-bon-Jono.github.io/static/30c453b7f5fbdb09ea0cb42a5dc7a6e5/ef6ff/linkedin_icon.webp 32w,\\n/Jon-bon-Jono.github.io/static/30c453b7f5fbdb09ea0cb42a5dc7a6e5/8257c/linkedin_icon.webp 64w","type":"image/webp","sizes":"(min-width: 32px) 32px, 100vw"}]},"width":32,"height":32}')}}]);
//# sourceMappingURL=component---src-pages-index-js-5d1ecf2cd3bfaffdd1a1.js.map