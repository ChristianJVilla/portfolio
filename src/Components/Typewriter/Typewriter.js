import React from "react";
import { Animated } from "react-animated-css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import "./Typewriter.css";

const Typewriter = () => {
  return (
    <Animated
      animationInDuration="4000"
      animationIn="fadeIn"
      animationOut="fadeOut"
      isVisible={true}
    >
      <div id="Top" className="container">
        <div className="text">
          <h1 className="hook">Hi, my name is</h1>
          <Typist>
            <Typist.Delay ms={2000} />
            <span className="name"> Christian Villa, </span>
            <Typist.Delay ms={800} />
            <br />
            <span className="build">
              I am a <span className="software">builder. </span>
            </span>
            <Typist.Backspace count={9} delay={700} />
            <span className="build lead">Leader.</span>
            <Typist.Backspace count={7} delay={700} />
            <span className="build seeker">Knowledge seeker.</span>
            <Typist.Backspace count={25} delay={700} />
            <span className="build seeker"> I am a Software Engineer. </span>
          </Typist>
          <p className="description">
            Based in San Francisco, CA using my passion for knowledge and
            creative thinking to build exceptional, high-quality websites and
            applications.
          </p>
        </div>
      </div>
    </Animated>
  );
};

export default Typewriter;
