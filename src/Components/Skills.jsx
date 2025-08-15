import html from "../assets/html.jpg"
import css from "../assets/css.png"
import javascript from "../assets/javascript.jpg"
import bootstrap from "../assets/bootstrap.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import nodejs from "../assets/node js.png"
import expressjs from "../assets/express.png"
import mongodb from "../assets/mongodb.jpg"
import java from "../assets/java.png"
import canva from "../assets/canva.png"
import "../../src/index.css"

function Skills(){
  return (
    <>
    <div id="skills">
      <h1>SKILLS</h1>
      <div className="container-skills">
        <div>
          <img src={html} alt="" />
          <input type="range" min="0" max="100" value="85" />

        </div>

        <div>
          <img src={css} alt="" />
          <input type="range" min="0" max="100" value="85" />

        </div>

        <div>
          <img src={javascript} alt="" />
          <input type="range" min="0" max="100" value="80" />

        </div>

        <div>
          <img src={bootstrap} alt="" />
          <input type="range" min="0" max="100" value="80" />

        </div>

        <div>
          <img src={react} alt="" />
          <input type="range" min="0" max="100" value="70" />

        </div>

                <div>
          <img src={tailwind} alt="" />
          <input type="range" min="0" max="100" value="70" />

        </div>

        <div>
          <img src={nodejs} alt="" />
          <input type="range" min="0" max="100" value="70" />

        </div>

                <div>
          <img src={expressjs} alt="" />
          <input type="range" min="0" max="100" value="70" />

        </div>

                <div>
          <img src={mongodb} alt="" />
          <input type="range" min="0" max="100" value="75" />

        </div>

                <div>
          <img src={java} alt="" />
          <input type="range" min="0" max="100" value="50" />

        </div>

                <div>
          <img src={canva} alt="" />
          <input type="range" min="0" max="100" value="70" />

        </div>


      </div>
    </div>
    </>
  )
}
export default Skills;