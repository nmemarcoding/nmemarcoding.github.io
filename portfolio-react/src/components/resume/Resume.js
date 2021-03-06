import React from 'react'
import './Resume.css'

export default function Resume() {
  return (
    <div className="resume">
        <div className="resume__btn">
          <a href="https://docs.google.com/document/d/1dTwYoWqewjB_n4aUqzRGXiaysHVzTFM8/edit?usp=sharing&ouid=101570304964485566712&rtpof=true&sd=true"><button>View Resume</button></a>
          <a href="/Nima Memarzadeh Resume (New).pdf" download><button className="resume__download">Download Resume</button> </a>
        </div>
        <h2>Front-end  Proficiencies</h2>
        <ul>
            <li>HTML5</li>
            <li>CSS</li> 
            <li>Bootstrap</li>     
            <li>Bulma CSS</li> 
            <li>APIs, including Web, Third-Party, and Servide-Side</li>
            <li>React</li> 
            <li>State</li> 
        </ul>   
        <br></br>
        <h2>Back-end Proficiencies</h2>
        <br></br>
        <ul>
            <li>Node</li>
            <li>Object-Oriented Programming</li> 
            <li>Express</li> 
            <li>MySQL</li> 
            <li>equelize</li> 
            <li>GraphQL</li> 
            <li>Object-Relational Mapping</li> 
            <li>Model-View-Controller</li> 
            <li>NoSQL</li> 
            <li>Mongoose</li> 
            <li>MongoDB</li> 
            <li>Progressive Web Applications</li> 
            <li>GraphQl</li>
            <li>Firebase</li>
        </ul>


    </div>
  )
}


