import AboutMe from "./AboutMe";
import Certifications from "./Cerifications";
import Contactme from "./Contactme";

import Education from "./Education";

import Skills from "./Skills";

import Projects from "./Projects";
import Navbar from "./Navbar";
import "../../src/index.css"
function Home() {
  return (
    <>
      <Navbar />

      <section id="home">
        <p className="role">Passionate MERN Developer</p>
        <h1>Hello! I'm <span>Shikha</span> <br />from Greater Noida</h1>
      </section>

      <section id="about">
        <AboutMe />
      </section>





      <section id="education">
        <Education />
      </section>
            <section id="skills">
        <Skills />
      </section>

            <section id="projects">
        <Projects />
      </section>

      <section id="certifications">
        <Certifications />
      </section>



      <section id="contact">
        <Contactme />
      </section>

      
    </>
  );
}

export default Home;
