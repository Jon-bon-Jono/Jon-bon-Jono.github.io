import React from "react";
import { StaticImage } from "gatsby-plugin-image"


export default function SideNavBar(){
    return (
      <div className="sidebar">
        <a className="sections active" href="#Home">Home</a>
        <a className= 'sections' href="#About">About</a>
        <a className= 'sections' href="#Skills">Skills</a>
        <a className= 'sections' href="#Projects">Projects</a>
        <a className= 'sections' href="#Contact">Contact</a>
        <div className = 'sections bottom' >
          <div className = 'reachout'>
                
            <a className = "social" href = 'https://www.linkedin.com/in/jonathan-williams-522181254'>
              <img 
                src="https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/linkedin_icon.png" 
                alt="linkedin icon" 
                width={32}
                height={32}
              />
            </a>
            
            <a className = "social" href = 'https://github.com/Jon-bon-Jono'>
              <img 
                src="https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/github_icon.png" 
                alt="github icon" 
                width={32}
                height={32}
              />
            </a>
  
          </div>
          <div className = 'credit'>
            Powered by Gatsby
          </div>
        </div>
      </div>
    )
}