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

const stripWidth = 300;
const stripWidthPx = `${stripWidth}px`;
const photoZidx = 20;
const ellipseZidx = 10;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: radial-gradient(farthest-corner at 20% 20%, rgba(240,240,240,1) 20%, rgba(210,210,210,1) 60%);
`;

const LeftStrip = styled.div`
  height: 100vh;
  width: ${stripWidthPx};
`;

const RightStrip = styled.div`
`;

const ProfilePhoto = styled.img`
  position: absolute;
  left: 30px;
  top: 30px;
  max-width: 150px;
  border-radius: 50%;
  border: 3px solid white;
  z-index: ${photoZidx};
`;

const Ellipse = styled.div`
  border-radius: 50%;
  width: ${stripWidth * 3 / 2}px;
  height: ${stripWidth}px;
  transform: rotate(-45deg);
  background: rgba(230,230,230,1);
  position: absolute;
  top: ${-stripWidth / 2}px;
  left: ${-stripWidth / 2}px;
  z-index: ${ellipseZidx};
  box-shadow: inset -1px 5px 10px rgba(0,0,0,.2);
  /* box-shadow: -1px 5px 10px rgba(0,0,0,.2); */
  background-image: radial-gradient(farthest-corner at 0 0, rgba(240,240,240,1) 20%, rgba(210,210,210,1) 60%);
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
      <ProfilePhoto src={ProfileImg} />
      <Ellipse />
      <LeftStrip>
        <ExternalLinks externalLinks={externalLinks} />
      </LeftStrip>
      <RightStrip>
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/bio">
            <Bio />
          </Route>
          <Redirect to="/" />
        </Switch>
      </RightStrip>
    </Container>
  </Router>
);

function App() {
  return <AboutBg />;
}

export default App;
