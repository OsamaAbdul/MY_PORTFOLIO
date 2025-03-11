import { useEffect, useRef } from 'react';
import Avatar from '../images/osama.jpg'; 
import Socials from './Socials';
import Education from './Education';
import Projects from './Projects'; 
import Footer from './Footer.jsx'


function Contents() {
  const writerRef = useRef(null);

  useEffect(() => {
    const texts = [
      "I am a MERN STACK Developer!",
      "I love gaming",
      "I specialized in Crypto Airdrops too...",
      "Hire me....Let's build something great!"
    ];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    const speed = 100;
    const writer = writerRef.current;

    function typeEffect() {
      let currentText = texts[index];
      if (isDeleting) {
        writer.textContent = currentText.substring(0, charIndex--);
      } else {
        writer.textContent = currentText.substring(0, charIndex++);
      }

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => (isDeleting = true), 1000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
      }

      setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
    }

    typeEffect();

    return () => {};
  }, []);

  return (
    <main className="main">
      <div className="row">
        <div className="col-sm-6 mb-2">
          <div className="card">
            <div className="card-body">
              <p>Hi, My Name is</p>
              <h1>Osama <span>Abdullahi</span> Ibrahim</h1>
              <h5 className="auto-writer" ref={writerRef}></h5>
            </div>
            <Socials />
          </div>
        </div>
        <div className="col-sm-6 mb-2">
          <div className="card">
            <div className="card-body">
              <img className="avatar" src={Avatar} alt="Osama Pic" />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center vh-100 mb-2">
        <div className="col-sm-6">
          <div className="about">
            <div className="card-body">
              <center>
                <h1>About<span> Me</span></h1>
              </center>
              <p>
                I am a <span>MERN STACK developer</span> with a passion for web development, Blockchain and AI. 
                I have a background and a Bachelor Degree (B.sc) in computer science,
                and I have a strong interest in building Web Apps and interacting with blockchain technology.
                I am currently serving as a Corp Member of the National Youth Service Corps (NYSC) at Gombe State University in Gombe State, Nigeria.
              </p>
              <br />
              <br />
              <h3><span>Technologies</span> I have been working with recently</h3>
              <ol className="stack">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Bootstrap</li>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>Git/GitHub</li>
                <li>React</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <Education 
        education={[
          {
            type: "TERIARY INSTITUTION",
            institution: "Gombe State University",
            course: "Computer Science",
            year: "2018 - 2023",
            cgpa: "4.2 out of 5.0",
            description: "Bachelor Of Science In Computer Science."
          },
          {
            type: "HIGH SCHOOL",
            institution: "Olokpa Comprehensive High School, Doma, Nasarawa State",
            course: "Qualification: SSCE",
            year: "2011 - 2017",
            description: ""
          }
        ]}
      />
      <Projects />
      <Footer />
    </main>
  );
}

export default Contents;