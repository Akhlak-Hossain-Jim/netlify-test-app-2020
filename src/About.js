import React from "react";
import { Link } from "react-router-dom";
import pdf from './media/pdf/Resume-Akhlak_Hossain_Jim.pdf';
import "./css/App.css";

function About() {
    
    function mOver (){
        document.getElementById('wrot').innerHTML="Jim | About"
      };
      function mOut (){
        document.getElementById('wrot').innerHTML="Jim"
      };

  return (
    <div id="black-bg">
      <div className="bakto-rot">
        <Link to="/" id="wrot" onMouseOver={mOver} onMouseOut={mOut}>
          Jim
        </Link>
      </div>
      <div className='abut-head'>
          <h1>Build to Make<br /> A Better Solution</h1>
      </div>
      <div className="main-body-intro-title-sub-title">
            <h1 className="abt-me">ABOUT ME</h1>
            <div className="secondary-nav">
                <a href="#section-1">As a Developer</a>
                <a href="#section-2">Big History</a>
            </div>
        </div>

      <section id="section-1">

        {/* About as a developer */}

        <div className="main-body-text-box-container">
            <div className="main-body-text-box">
                <h1 >As A Web Developer</h1>
                <p>
                    Hi, I'm a freelance web designer and front-end developer, from Bangladesh. I create strenuous
                    websites that are fast, easy to use and build with best practices & upmost dedication.
                </p>
                <p>
                    I started creating and developing websites since I was 16. I work to make websites more
                    responsive,
                    interactive, simple, beautiful, and user-friendly, and easily readable for other developers.
                </p>
                <p>
                    I’m hungry to learn new things and from every single set back. So I look forward to learning
                    from
                    all people and practice it to better use.
                </p>
            </div>
        </div>

        {/* Why me Section */}

        <div className="main-body-text-box-container">
            <div className="main-body-text-box">
                <div className="appear-from-bottom"></div>
                <h1>Why me?</h1>
                <p>
                    I love to code and build websites for good peoples.
                </p>
                <p>
                    I spent heavy hours achieving perfection and the best thing about that is every time I reach the
                    top
                    I look for the next then beyond it.
                </p>
                <p>
                    I’d love to hear from you and work with you. Wish that it will be a ( fulfilling journey)good
                    journey for all of us.
                </p>
            </div>
        </div>
        
        {/* Resume */}

        <div className='otr-con'>
            <a className='rsum' href={pdf} target='blank'>Resume pdf</a>
        </div>

        {/* TECH Related Edu */}

        <section className="section">
            <div className="main-body-content-about-leraning-goals-and-history">
                <div className="leraning-goals-and-history-header">
                    <h2 className="box-heading">Summary of qualification</h2>
                </div>
                <h2 className="heading-left">Languages:</h2>
                <div className="grid-parent-about">
                    <div className="grid-chaild">
                        <i>HTML</i> 
                    </div>
                    <div className="grid-chaild">
                        <i>CSS</i>
                    </div>
                    <div className="grid-chaild">
                        <i>JavaScript</i>
                    </div>
                </div>

                <h2 className="heading-left">Frameworks:</h2>
                <div className="grid-parent-about">
                    <div className="grid-chaild">
                        <i>Bootstrap</i>
                    </div>
                    <div className="grid-chaild">
                        <i>jQuery</i>
                    </div>
                    <div className="grid-chaild">
                        <i>React</i>
                    </div>
                    <div className="grid-chaild">
                        <i>Bulma</i>
                    </div>
                    <div className="grid-chaild">
                        <i>Material</i>
                    </div>
                </div>
              </div>
        </section>
      </section>

      <Link className='crtf' to='/certificates'>View Certificates</Link>

      <section id="section-2">

        {/* Long History Section  */}

        <div className="main-body-text-box-container">
            <div className="main-body-text-box">
                <h1>Big History</h1>
                <p>
                    This is Jim, who passionate about technology, entrepreneurship And also have a vast interest in
                    the education sector 	&amp; love to introduce myself as a creative
                    learner. As
                    every student, I have the same basic problems of the institutional educational system of our
                    country
                    and I know I can't fix it at that time, and still now, so I changed myself and my learning
                    style.
                    Currently, I'm working to connect students to learn in their own creative way together and teach
                    them to learn and listen. If the project I'm working for can bring people together to make a
                    creative learning community, help them accomplish something, or feel them comfort to learn, I'll
                    be
                    the happiest person in my world of words.
                </p>
                <p>
                    I started bearing my finance from when I was just only 15 by Tuitions and Part-time Jobs. Maybe
                    I
                    was
                    the one who started Tuition at that age and obviously English version student without having an
                    English version background. I become their favorite by quality time and a creative way to teach.
                </p>
                <p>
                    I love to learn lots of things for my career and for self-satisfaction. Coding just became my of
                    the
                    way to refresh and the then the debate as well but family is the greatest thing I ever loved
                    which
                    drives me for the next day and to not fade away.
                </p>
            </div>
        </div>

        {/* Professional Experience */}

        <section className="section">
            <div className="main-body-content-about-leraning-goals-and-history">
                <h2 className="heading-left">Professional Experience</h2>
                <div className="grid-parent-about">
                    <div className="grid-chaild">
                        <h2>Shuvro Jaya<date>(2019-2020)</date>
                        </h2>
                        <cite>-Dhaka,Bangladesh</cite><br />
                        <em><span class="dot"></span>Online Presence manager, Public Relations, Call Center manager
                          &amp; Online Presenter
                        </em>
                    </div>
                </div>
            </div>
        </section>

        {/* Institutional Education */}

        <section className="section">
            <h2>Love is Learning</h2>
            <div className="main-body-content-about-leraning-goals-and-history">
                <h2 className="heading-left">Institutional education</h2>
                <div className="grid-parent-about">
                    <div className="grid-chaild">
                        <h2>SSC-<date>2019</date><sub>(Class-10 Standerd)</sub></h2>
                        <address>From: <strong> Govt. Mohammadpur Model School and College</strong>
                            <cite>Dhaka, Bangladesh</cite>
                        </address>
                    </div>
                    <div className="grid-chaild">
                        <h2>HSC-anticipated<date>2021</date><sub>(Class-12 Standerd)</sub></h2>
                        <address>From: <strong>Dhaka Commarce College</strong>
                            <cite>Dhaka, Bangladesh</cite>
                        </address>
                    </div>
                    {/* <div className="grid-chaild">
                        <h3>SSC-<date>2019</date></h3>
                        <address>From: <strong> Govt. Mohammadpur Model School and College</strong>
                            <cite>Dhaka, Bangladesh</cite>
                        </address>
                    </div> */}
                </div>
            </div>
        </section>

        {/* Tech Education */}

        <section className="section">
            <div className="main-body-content-about-leraning-goals-and-history">
                <h2 className="heading-left">Technology</h2>
                <h2 className="heading3-left">In my Bag:</h2>
                <div className="grid-parent-about">
                    <div className="grid-chaild">
                        <i>HTML</i>
                    </div>
                    <div className="grid-chaild">
                        <i>CSS</i>
                    </div>
                    <div className="grid-chaild">
                        <i>JavaScript</i>
                    </div>
                    <div className="grid-chaild">
                        <i>Bootstrap</i>
                    </div>
                    <div className="grid-chaild">
                        <i>Bulma</i>
                    </div>
                    <div className="grid-chaild">
                        <i>Material</i>
                    </div>
                    <div className="grid-chaild">
                        <i>jQuery</i>
                    </div>
                    <div className="grid-chaild">
                        <i>React</i>
                    </div>
                    <div className="grid-chaild">
                        <i><strong>C#</strong></i>
                    </div>
                    <div className="grid-chaild">
                        <i>Python</i>
                    </div>
                    {/* <div class="grid-chaild">
                        <i>Ruby</i>
                    </div> */}
                </div>
            </div>
        </section>

        {/* Want to learn Section */}

        <section className="section">
            <div className="main-body-content-about-leraning-goals-and-history">
                <h2 className="heading-left">All i Want to learn</h2>
                <div className="grid-parent-about">
                    <div className="grid-chaild">
                        <i>Cycling</i>
                    </div>
                    <div className="grid-chaild">
                        <i>Driving</i>
                    </div>
                    <div className="grid-chaild">
                        <i>VUE.js</i>
                    </div>
                    <div className="grid-chaild">
                        <i>REST API</i>
                    </div>
                    <div className="grid-chaild">
                        <i>PHP</i>
                    </div>
                    <div className="grid-chaild">
                        <i>Ruby On Rails</i>
                    </div>
                    <div className="grid-chaild">
                        <i>MONGODB</i>
                    </div>
                    <div className="grid-chaild">
                        <i>AI</i>
                    </div>
                </div>
            </div>
        </section>

        {/* volunteer and leadership experience */}

        <section className="section">
            <div className="main-body-content-about-leraning-goals-and-history">
                <h2 className="heading-left">volunteer and leadership experience</h2>
                <div className="grid-parent-about">
                    <div className="grid-chaild">
                        <i>Debater At DCCDS<date>(2019-present)</date></i>
                        <h4><strong>Achivments</strong></h4>
                        <ul>
                            <li><a href='https://fb.me/e/3NP4WNm0F'>CTTC-DCDS INTER COLLEGE NATIONAL DEBATE TOURNAMENT-2019 (Semi-Finalist)</a></li>
                            <li><a href='https://fb.me/e/37FqEG0m2'>Evaly-JUDO National Debate Festival 2020 (Champion)</a></li>
                            <li><a href='https://fb.me/e/1KJ9zohSU'>3rd GSSDC National Debate Fest 2020 (Runnersup)</a></li>
                            <br/>
                            <p>and breaking team in more then 7 tournaments</p>
                        </ul>
                    </div>
                    <div className="grid-chaild">
                        <i>Debater 	&amp; Founding Organizing Secretary<date>(2017-2019)</date></i>
                        <h4><strong>Arranged Festivals</strong></h4>
                        <ul>
                            <li>1st GMMSC National Podium 2019</li>
                            <li>1st GMMSC Podium-2018 (Intra)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
      </section>
      
    </div>
  );
}

export default About;
