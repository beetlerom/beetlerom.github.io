import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';

import Menu from "./components/Menu";
import About from "./pages/About";
import Bio from "./pages/Bio";

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
  width: ${stripWidth};
`;

const ProfilePhoto = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  max-width: ${stripWidth};
`;

const ExternalLink = styled.a`
  color: gray; 
  display: inline-block;
  width: 48px;
  height: 48px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const externalLinks = [{
  icon: <FaGithub />,
  href: 'https://github.com/beetlerom'
}, {
  icon: <FaLinkedin />,
  href: 'https://www.linkedin.com/in/ionescudaniel/'
}, {
  icon: <FaTwitter />,
  href: 'https://twitter.com/the_escu'
}, {
  icon: <HiOutlineMailOpen />,
  href: 'mailto:beetlerom@gmail.com'
}]

const ExternalLinks = ({ externalLinks }) => {
  return (
    <div>
      {externalLinks.map(({ icon, href }, idx) => (
        <ExternalLink href={href} key={idx}>{icon}</ExternalLink>
      ))}
    </div>
  )
};

const AboutBg = () => (
  <Router>
    <Menu />
    <Container>
      <LeftStrip>
        <ExternalLinks externalLinks={externalLinks} />
        <ProfilePhoto src={ProfileImg} />
      </LeftStrip>
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/bio">
          <Bio />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Container>
  </Router>
);

function App() {
  return <AboutBg />;
}

export default App;
