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

const stripWidth = 210;
const stripWidthPx = `${stripWidth}px`;
const photoZidx = 25;
const ellipseZidx = 10;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: repeating-linear-gradient(
        0deg,
        rgba(200,200,200,.3) 0px,
        transparent 1px,
        transparent 11px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(200,200,200,.3) 0px,
        transparent 1px,
        transparent 11px
      ),
      radial-gradient(farthest-corner at 20% 20%, rgba(235,235,235,1) 20%, rgba(210,210,210,1) 60%);
`;

const LeftStrip = styled.div`
  height: 100vh;
  width: ${stripWidthPx};
  min-width: ${stripWidthPx};
`;

const RightStrip = styled.div``;

const ProfilePhoto = styled.img`
  position: absolute;
  left: 30px;
  top: 30px;
  max-width: 150px;
  border-radius: 50%;
  border: 3px solid white;
  z-index: ${photoZidx};
  animation: showPhoto .5s ease-out forwards;
  opacity: 0;

  @keyframes showPhoto {
    from {
      opacity: 0;
      left: 15px;
    } 
    to{
      opacity: 1;
      left: 30px;
    } 
  }
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

function template(i, delay) {
  return `
      &:nth-child(${i + 1}) {
        animation-delay: ${`${delay * i + .3}s`};
       }
    `
}

function getAnimations(items, delay) {
  let str = ''
  for (let i = 0; i < items; i += 1) {
    str += template(i, delay)
  }
  return str;
}

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

const externalLinkWidth = 24;

const ExternalLink = styled.a`
  position: relative;
  color: gray; 
  display: inline-block;
  width: ${externalLinkWidth}px;
  height: ${externalLinkWidth}px;
  margin: 0 auto 10px;
  opacity: 0;
  transition: all .3s;
  animation: appear .3s ease-out forwards;
  ${getAnimations(externalLinks.length, .15)}

  svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    color: #485b94;
    transform: translateX(3px);
  }

  @keyframes appear {
    from {
      opacity: 0;
      left: -${externalLinkWidth / 2}px;
    } 
    to{
      opacity: 1;
      left: 0;
    } 
  }
`;

const StyledExternalLinks = styled.div`
  position: relative;
  padding: 210px 0 0;
  z-index: 20;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const ExternalLinks = ({ externalLinks }) => {
  return (
    <StyledExternalLinks>
      {externalLinks.map(({ icon, href }, idx) => (
        <ExternalLink href={href} key={idx}>{icon}</ExternalLink>
      ))}
    </StyledExternalLinks>
  )
};

const AboutBg = () => (
  <Router>
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
    <Menu />
  </Router>
);

function App() {
  return <AboutBg />;
}

export default App;
