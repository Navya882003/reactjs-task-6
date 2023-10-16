import React from 'react';
import './App.css'; // Import your CSS file

const App = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>AVVAGARI NAVYA</h1>
        <p>Data Scientist</p>
      </header>
      <section className="projects">
        <h2>Projects</h2>
        <b>Done projects on Sql,Linux</b>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <b>Python,C++,C,Java,Sql,Html,CSS,JavaScript,React&NodeJs,Linux,AWS Cloud
        </b>
      </section>
      <section className="experience">
        <h2>Experience</h2>
        <b>Worked as Core Member in IEEE</b>
      </section>
      <section className="education">
        <h2>Education</h2>
        <b>B.Tech with specilization in AI and ML</b>
      </section>
      <section className="contact">
        <h2>Contact</h2>
        <b>navya882003@gmail.com</b>
      </section>
    </div>
  );
};

export default App;