import React from "react";
import { Link } from "react-router-dom";
import "./css/App.css";
import himg from "./media/Untitled-1.webp";
// import $ from 'jquery';
// import {useState} from "react";

function Home() {
  function compiOver() {
    document.querySelector("#compi").classList.toggle("hidden-i");
    document.querySelector("#comp-i").classList.toggle("hidden-i");
  }
  function compiOut() {
    document.querySelector("#compi").classList.toggle("hidden-i");
    document.querySelector("#comp-i").classList.toggle("hidden-i");
  }

  function compiiOver() {
    document.querySelector("#compii").classList.toggle("hidden-i");
    document.querySelector("#comp-ii").classList.toggle("hidden-i");
  }
  function compiiOut() {
    document.querySelector("#compii").classList.toggle("hidden-i");
    document.querySelector("#comp-ii").classList.toggle("hidden-i");
  }

  function compiiiOver() {
    document.querySelector("#compiii").classList.toggle("hidden-i");
    document.querySelector("#comp-iii").classList.toggle("hidden-i");
  }
  function compiiiOut() {
    document.querySelector("#compiii").classList.toggle("hidden-i");
    document.querySelector("#comp-iii").classList.toggle("hidden-i");
  }
  
  // const mediaQuery = window.matchMedia("(max-width: 768px)");
  // if (mediaQuery.matches) {
  //   document.querySelector("#resp-btm-txt").innerHTML("Tap anywhere To see Buttons");
  // }
  
  function responClick() {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    if (mediaQuery.matches) {
      document.querySelector("#compi").classList.toggle("hidden-i");
      document.querySelector("#comp-i").classList.toggle("hidden-i");
      document.querySelector("#compii").classList.toggle("hidden-i");
      document.querySelector("#comp-ii").classList.toggle("hidden-i");
      document.querySelector("#compiii").classList.toggle("hidden-i");
      document.querySelector("#comp-iii").classList.toggle("hidden-i");
    }
  }

  // document.querySelector(".home").onclick = responClick();

  return (
    <div className="home" onClick={responClick}>
      <img src={himg} className="home-side-img" alt="logo"  />

      <div className="home__child" id="home__comp">
        <div onMouseOver={compiOver} onMouseOut={compiOut}>
          <span className="home-comps" id="compi">
            Hello.
          </span>
          <Link className="home-comps hidden-i" id="comp-i" to="/about">
            About
          </Link>
        </div>

        <div onMouseOver={compiiOver} onMouseOut={compiiOut}>
          <span className="home-comps" id="compii">
            I am
          </span>
          <Link className="home-comps hidden-i" id="comp-ii" to="/projects">
            Projects
          </Link>
        </div>

        <div onMouseOver={compiiiOver} onMouseOut={compiiiOut}>
          <span className="home-comps" id="compiii">
            Jim
          </span>
          <Link className="home-comps hidden-i" id="comp-iii" to="/contact">
            Contact
          </Link>
        </div>
      </div>

      <p className="resp-btm-txt" id="resp-btm-txt"></p>
    </div>
  );
}

export default Home;
