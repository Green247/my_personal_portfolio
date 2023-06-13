import React from 'react';
import pdf from '../assets/myresume.pdf'


const About = () => {
  return (
    <section id="about">
      <div className="container">
        <img className="myPhoto" src="./images/myphoto1.jpeg" alt="My Photo" />
        <div>
          <h1>About Me</h1>
          <p>
            Hello and welcome to my personal portfolio!
            <br />
            My name is Gladys, and I am a web development student currently enrolled in a course that has allowed me to learn and practice HTML, CSS, JavaScript, and other web technologies. I am passionate about creating visually appealing and functional websites that are user-friendly and contribute to the growth and success of companies.
            I have designed this portfolio to showcase my skills, projects, and accomplishments as a student web developer. As you explore my portfolio, you will find examples of my work and learn more about my background, skills, and experience.
            Thank you for taking the time to visit my portfolio, and I look forward to connecting with you.
          </p>
          <h2 className='skills'>Skills</h2>
          <ul>
            <li> HyperText Markup Language (HTML)</li>
            <li>Cascading Style Sheets (CSS)</li>
            <li>JavaScript</li>
            <li>React </li>
          </ul>
          <a className="links" href={pdf} target="_blank"> <b>Download CV</b> </a>
        </div>
      </div>
    </section>
  );
};

export default About;
