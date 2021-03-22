import styled from 'styled-components';

import Splines from 'components/Splines';

const ContentCotainer = styled.div`
    z-index: 20;
    position: relative;
    margin: 100px 100px 100px 0;
    background: hsla(0, 0%, 100%, 0.25);
    backdrop-filter: blur(5px);
    border-radius: .5em;
    border: 1px solid hsla(0, 0%, 100%, 0.25);
    padding: 10px 20px;
`;

const About = () => (
    <>
        <Splines />
        <ContentCotainer>
            <p>Hello there, I’m Daniel!</p>
            <br />
            <p>I help build awesome teams, SaaS products and foster healthy company culture.</p>
            <p>I work iteratively, make use of OKRs and data driven decision making.</p>
            <p>I think long-term and make software development predictable and transparent.</p>
            <br />
            <p>I am currently looking to make a big impact in a high potential company in a key IT management role.</p>
        </ContentCotainer>
    </>
);

export default About;
