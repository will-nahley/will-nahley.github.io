import { useState } from "react";
import myPhoto from "../assets/Profile.jpg";

function App() {
  return (
    <>
      <img className="photo" src={myPhoto} />

      <section id="about-me">
        <h1 className="section-title">About Me</h1>
        <h3 className="subsection-title">Currently</h3>
        <p>
          I'm currently looking for a new graduate role as a Data Analyst or
          Software Engineer.
        </p>
        <h3 className="subsection-title">Interests</h3>
        <p>
          I'm broadly interested in data science, mathematical finance, and
          frontend development.
        </p>
        <h3 className="subsection-title">Background and Eductation</h3>
        <p>
          I graduated from UChicago with an MS in Computational and Applied
          Mathematics in March of 2025. I graduated from Southern Methodist
          University in May 2023 with a BBA in Finance and a minor in Computer
          Science.
        </p>
      </section>

      <section id="resume">
        <h1 className="section-title">Resume</h1>
        <p>*Import Resume Here*</p>
      </section>

      <section id="contact">
        <hr></hr>
        <h1 className="section-title">Contact Me</h1>
        <p>Email: wnahley [at] uchicago [dot] edu </p> <br />
        <a>Instagram</a>
      </section>
    </>
  );
}

export default App;
