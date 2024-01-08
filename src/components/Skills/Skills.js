import React from 'react'
import './Skills.css'
import uiDesign from '../../assets/uidesign.png'
import webDesign from '../../assets/webDesign.png'
import ReactDesign from '../../assets/ReactDesign.png'
import TechDesign from '../../assets/TechDesign.png'

function Skills() {
  return (
    <section className="skills">
        <span className="skillTitle">What I Do</span>
        <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am Proficientin HTML5,CSS3,Javascript and Bootstrap5, as well as javascript library React-Js.</span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={uiDesign} alt="UIdesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>UI DESIGN</h2>
              <p>UI design focuses on creating visually appealing and seamless user experiences in digital products.</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={webDesign} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>WEB DESIGN</h2>
              <p>As a web designer, my passion lies in blending creativity with functionality to deliver visually stunning and user-friendly websites.I am Proficient in HTML5,CSS3,Javascript and Bootstrap5.</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={ReactDesign} alt="ReactDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>REACT DEVELOPMENT</h2>
              <p>Proficient in industry-standard tools and technologies. Whether it's a personal blog, an <br/>e-commerce platform, or a corporate website, my goal is to create digital spaces that leave a lasting impression. Each project is an opportunity to turn ideas into visually arresting and functionally robust online realities.</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={TechDesign} alt="ReactDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>TECHNICAL SKILLS</h2>
              <ul className='skillBarTextList'>
               <li><p>HTML5</p></li>
               <li><p>CSS3</p></li>
               <li><p>JAVASCRIPT</p></li>
               <li><p>JQUERY</p></li>
               <li><p>BOOTSTRAP5</p></li>
               <li><p>REACT JS</p></li>
               <li><p>REACT BOOTSTRAP</p></li>
               <li><p>MATERIAL UI</p></li>
               <li><p>JIRA</p></li>
               <li><p>GRAPH QL</p></li>
               <li><p>REDUX</p></li>
               <li><p>GITHUB</p></li>
               <li><p>TYPERSCRIPT</p></li>
              </ul>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skills