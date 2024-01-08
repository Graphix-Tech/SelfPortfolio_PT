import React from 'react'
import './Work.css'
import portfolio1 from '../../assets/portfolio1.jpg'
import portfolio2 from '../../assets/portfolio2.jpg'
import portfolio3 from '../../assets/portfolio3.jpg'
import portfolio4 from '../../assets/portfolio4.jpg'

function Work() {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect.I am excited to bring my skills and experience to help husinesses achieve their gols and create a strong online presence.</span>
      <div className="workImgs">
        <img src={portfolio1} alt="img1" className="worksImg" />
        <img src={portfolio2} alt="img2" className="worksImg" />
        <img src={portfolio3} alt="img3" className="worksImg" />
        <img src={portfolio4} alt="img4" className="worksImg" />
      </div>
      <button className="worksBtn">See More</button>
    </section>
  )
}

export default Work