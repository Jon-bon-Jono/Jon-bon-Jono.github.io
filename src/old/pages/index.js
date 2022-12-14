import * as React from "react"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      
      <div class="sidebar">
        <a class="sections active" href="#home">Home</a>
        <a class="sections" href="#About">About</a>
        <a class="sections" href="#Skills">Skills</a>
        <a class="sections" href="#Projects">Projects</a>
        <a class="sections" href="#Contact">Contact</a>
        <div class="sections bottom"><div class="reachout">
          <a class="social" href="https://www.linkedin.com/in/sean-luo-b4608a15b/">
          </a>
          <a class="social" href="https://github.com/lu0x1a0">
          </a>
        </div>
        <div class="credit">Powered by Gatsby</div>
      </div>
      </div>
      
      
      <h1 style={headingStyles}>
        <span style={headingAccentStyles}>Jonathan Williams</span>
      </h1>
      <img src="https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/me.PNG" alt="Me" width="288" height="300"></img>
      <h2 id = "About">About </h2>
      <p style={docLinkStyle}>I am one course away from completing a Bachelor of Engineering (Software) (Honours) & Science (Statistics) at UNSW Sydney. I am currently working with Sydney-based medtech company ikkiWorks to develop... I am also participating in the UNSW Science Vacation Research Scholarship where I am conducting research related to extreme value forecasting via data augmentation techniques that utilise generative adversarial neural networks (GANs). I am interested in ... </p>
      <h2 id = "Education">Education:</h2>
      <p style={codeStyles}>UNSW Bachelor of Engineering (Software) (Honours) &#x26; Science (Statistics) ---- (expected May 2023)</p>
      <p>UNSW Science Vacation Research Scholarship ---- (December 2022 - Febuary 2023)</p>
      <h2  id = "Skills"> Skills </h2>
      <h4>Programming Languages:</h4>
      <h5>Expert</h5>
      <img src="https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/c%2B%2B_icon.PNG" alt="C++"></img>
      <img src="https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/python_icon.png" alt="Python"></img>
      <h5>Proficient</h5>
      <img src="https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/matlab_icon.png" alt="Matlab"></img>
      <img src="https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/r_icon.png" alt="R"></img>
      <h4>Libraries/Framework:</h4>
      <img src="https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/pandas_icon.PNG" alt="Pandas"></img>
      <img src="https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/numpy_icon.png" alt="NumPy"></img>
      <img src="https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/matplotlib_logo.PNG" alt="MatplotLib"></img>
      <img src="https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/processing_icon.png" alt="Processing"></img>
      <img src="https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/unity_icon.png" alt="Unity"></img>
      <h4>Software:</h4>
      <img src="https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/jupyter_logo.PNG" alt="Jupyter"></img>
      <img src="https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/vsc_icon.png" alt="VS"></img>
      <h4>Knowledge:</h4>
      <h2 id = "Projects"> Projects </h2>
      <h3>Current Projects</h3>
      <ul>
        <li>
          <p><a href="https://lu0x1a0.github.io/EURUSDPriceAnalysis">Ikkiworks Internship: </a></p>
          <p>Goals:</p>
          <ul>
            <li><a href="https://lu0x1a0.github.io/EURUSDPriceAnalysis">Improving the accuracy of dead-reckoned estimates of position from a single IMU, managed to achieve less than 10cm error over 3-5s, albeit, with the reliance on some assumptions about the nature of the motion</a></li>
          </ul>
        </li>
      </ul>
      <h3>Past Projects</h3>
      <ul>
        <li>
          <p><a href="https://drive.google.com/file/d/1O3DPQPNuFrq1QDuoNBO9zluNS5Z1ES5F/view?usp=sharing">Software Engineering Thesis: Optimizing Inertial Based Sensor Fusion for Accurate Orientation Tracking</a></p>
          <p>Goals:</p>
          <ul>
            <li><a href="https://github.com/Jon-bon-Jono/IMU-Sensor-Calibration">Inovating a unique inertial sensor calibration technique which uses ellipsoid fitting and ellipsoidal affine transformations along with the preprocessing techniques of z-score outlier removal and spherical regularization</a></li>
            <li><a href="https://github.com/Jon-bon-Jono/IMU-Sensor-Calibration">Performing highly accurate calibration of a magnetometer with hard iron ferromagnetic interference caused by a battery</a></li>
            <li><a href="https://drive.google.com/file/d/1O3DPQPNuFrq1QDuoNBO9zluNS5Z1ES5F/edit?disco=AAAAlfC5xUc">Optimizing and tuning the hardware and Madgwick sensor fusion parameters on an Arduino Nano 33 BLE to compensate for ~0.5s delay</a></li>
          </ul>
        </li>
      </ul>
      <h2 id = "Contact"> Contact </h2>
      Email: jonathan.williams@student.unsw.edu.au
      
      <p></p>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

