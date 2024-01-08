import React from 'react'
import './Intro.css'
import { Link } from 'react-scroll'
import WorkIcon from '@mui/icons-material/Work';
import selfImg from '../../assets/selfImg.jpg'

const Intro = () => {

  const downloadResume = () => {
    // Replace 'your_resume.pdf' with the actual path to your resume file
    const resumePath =  process.env.PUBLIC_URL + '/FRONTEND RESUME POOJA.pdf';
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'FRONTEND RESUME POOJA.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert("Download Resume Succesfully");
  };

  return (
    <section id="intro">
        <div className="introContent">
           <span className="hello">Hello,</span>
           <span className="introText">I'm <span className="introName">Pooja</span><br />Website Designer</span>
           <span className="introPara">I am a skilled and passionate web designer with experience in creating<br/> visually appealing and user-friendly websites</span>
           <Link><button className="btn" onClick={downloadResume}><WorkIcon/>Hire Me</button></Link>
        </div>
        <img src={selfImg} alt="" className="bg" />
    </section>
  )
}

export default Intro
