import React, { useEffect } from 'react';
import styled from 'styled-components';
import { SVG } from '@svgdotjs/svg.js';

import { drawGraph } from './helpers';

let splines, axis;

const positionStyles = `
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

const Axis = styled.div`
    ${positionStyles}
    z-index: 15;
`;

const SplineContainer = styled.div`
    ${positionStyles}
    z-index: 16;
`;

const Splines = () => {

    const axisContainerId = 'axis';
    const splinesContainerId = 'splines';

    useEffect(() => {
        splines = SVG().addTo(`#${splinesContainerId}`);
        axis = SVG().addTo(`#${axisContainerId}`);

        drawGraph(splines, axis);

        return () => {
            splines?.remove();
        }
    });

    return <div>

        <SplineContainer id={splinesContainerId} />
        <Axis id={axisContainerId} />
    </div>;
};

export default Splines;