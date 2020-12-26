import React from "react";
import { Link } from "react-router-dom";
import proImage1 from "./media/Project/project-image-1.png";
import proImage2 from "./media/Project/project-image-2.png";
import proImage3 from "./media/Project/project-image-3.png";
import proImage4 from "./media/Project/project-image-4.png";
import proImage5 from "./media/Project/project-image-5.png";
import "./css/App.css";

function Work() {
  function mOver() {
    document.getElementById("wrot").innerHTML = "Jim | Projects";
  }
  function mOut() {
    document.getElementById("wrot").innerHTML = "Jim";
  }

  return (
    <div className="work">
      <div className="bakto-rot">
        <Link to="/" id="wrot" onMouseOver={mOver} onMouseOut={mOut}>
          Jim
        </Link>
      </div>

      <main>
        <h1>Projects</h1>

        <div className="project-container-div">

            <div className="project-div">
                <a href="https://clone-ahj.web.app/" target="_blank" rel="noreferrer">
                    <h2>Amazon Clone</h2>
                    <figure>
                        <img src={proImage5} width="200" height="auto"
                            alt="" />
                        <figcaption><strong>Amazon</strong> Clone Using <em>React js</em> and <em>Firebase</em>
                        </figcaption>
                    </figure>
                </a>
            </div>

            <div className="project-div">
                <a href="http://parthibassociates.epizy.com/?i=1" target="_blank" rel="noreferrer">
                    <h2>Parthib Associates</h2>
                    <figure>
                        <img src={proImage1} width="250" height="auto"
                            alt="" />
                        <figcaption>An Engineering Company Website by me.</figcaption>
                    </figure>
                </a>
            </div>

            <div className="project-div">
                <a href="https://akhlak-hossain-jim.github.io/Projects/Clock/" target="_blank"  rel="noreferrer">
                    <h2>Analog Clock</h2>
                    <figure>
                        <img src={proImage2} width="200" height="auto"
                            alt="" />
                        <figcaption>An Analog Clock-JavaScript learning time project</figcaption>
                    </figure>
                </a>
            </div>

            <div className="project-div">
                <a href="https://akhlak-hossain-jim.github.io/Projects/Mouse%20tracer/" target="_blank" rel="noreferrer">
                    <h2>Mouse Tracer</h2>
                    <figure>
                        <img src={proImage3} width="200" height="auto"
                            alt="" />
                        <figcaption>Mouse Tracer-JavaScript learning time project</figcaption>
                    </figure>
                </a>
            </div>

            <div className="project-div">
                <a href="https://akhlak-hossain-jim.github.io/Projects/typeing_speed_testing/" target="_blank" rel="noreferrer">
                    <h2>Text typing speed test</h2>
                    <figure>
                        <img src={proImage4} width="200" height="auto"
                            alt="" />
                        <figcaption>Typing speed test-JavaScript learning time project</figcaption>
                    </figure>
                </a>
            </div>

        </div>

      </main>

    </div>
  );
}

export default Work;
