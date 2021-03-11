import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import About from "./components/About";
import Bio from "./components/Bio";

import ProfileImg from "./daniel-ionescu.jpg";
import "./App.css";

const stripWidth = "300px";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: rgba(178, 176, 177, 1);
`;

const LeftStrip = styled.div`
  height: 100vh;
  background: rgb(159, 157, 158);
  background: linear-gradient(
    90deg,
    rgba(159, 157, 158, 1) 0%,
    rgba(178, 176, 177, 1) 100%
  );
  max-width: ${stripWidth};
`;

const ProfilePhoto = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  max-width: ${stripWidth};
`;

const AboutBg = () => (
  <Container>
    <LeftStrip>
      <ProfilePhoto src={ProfileImg} />
    </LeftStrip>
    <Router>
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/about-me">
          <About />
        </Route>
        <Route exact path="/bio">
          <Bio />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  </Container>
);

function App() {
  return <AboutBg />;
}

export default App;
