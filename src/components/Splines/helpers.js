import tinycolor from 'tinycolor2';

export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const smoothing = .2;

// Properties of a line 
// I:  - pointA (array) [x,y]: coordinates
//     - pointB (array) [x,y]: coordinates
// O:  - (object) { length: l, angle: a }: properties of the line
export const line = (pointA, pointB) => {
    const lengthX = pointB[0] - pointA[0]
    const lengthY = pointB[1] - pointA[1]
    return {
        length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
        angle: Math.atan2(lengthY, lengthX)
    }
}

// Position of a control point 
// I:  - current (array) [x, y]: current point coordinates
//     - previous (array) [x, y]: previous point coordinates
//     - next (array) [x, y]: next point coordinates
//     - reverse (boolean, optional): sets the direction
// O:  - (array) [x,y]: a tuple of coordinates
export const controlPoint = (current, previous, next, reverse) => {

    // When 'current' is the first or last point of the array
    // 'previous' or 'next' don't exist.
    // Replace with 'current'
    const p = previous || current
    const n = next || current

    // Properties of the opposed-line
    const o = line(p, n)

    // If is end-control-point, add PI to the angle to go backward
    const angle = o.angle + (reverse ? Math.PI : 0)
    const length = o.length * smoothing

    // The control point position is relative to the current point
    const x = current[0] + Math.cos(angle) * length
    const y = current[1] + Math.sin(angle) * length
    return [x, y]
}

// Create the bezier curve command 
// I:  - point (array) [x,y]: current point coordinates
//     - i (integer): index of 'point' in the array 'a'
//     - a (array): complete array of points coordinates
// O:  - (string) 'C x2,y2 x1,y1 x,y': SVG cubic bezier C command
export const bezierCommand = (point, i, a) => {

    // start control point
    const cps = controlPoint(a[i - 1], a[i - 2], point)

    // end control point
    const cpe = controlPoint(point, a[i - 1], a[i + 1], true)
    return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`
}

// Render the svg <path> element 
// I:  - points (array): points coordinates
//     - command (function)
//       I:  - point (array) [x,y]: current point coordinates
//           - i (integer): index of 'point' in the array 'a'
//           - a (array): complete array of points coordinates
//       O:  - (string) a svg path command
// O:  - (string): a Svg <path> element
export const svgPath = (points, command) => {
    // build the d attributes by looping over the points
    return points.reduce((acc, point, i, a) => i === 0
        ? `M ${point[0]},${point[1]}`
        : `${acc} ${command(point, i, a)}`
        , '');
}

export const getPoints = (count, vw, vh, Ox, Oy) => {
    const points = [];

    for (let i = 0; i <= count; i++) {
        const pX = Ox + (vw - Ox) * i / count;
        let amplitude = (Math.random() - i / count) * vh / 3;
        const pY = Oy + amplitude * i / count;
        points.push([pX, pY]);
    };

    return points;
}

export const drawSpline = (draw, vw, vh, { x: Ox, y: Oy }, color, idx) => {

    const gradient = draw.gradient('linear', function (add) {
        add.stop(0, color.darken(getRandomInt(0, 30)).setAlpha(.4).toString())
        add.stop(1, color.setAlpha(.4), 0)
    }).from(1, 0).to(0, 1);
    const points = getPoints(getRandomInt(6, 10), vw, vh, Ox, Oy);

    const path = svgPath(points, bezierCommand);
    const curve = draw.path(`${path} L ${vw} ${vh} L 0 ${vh} L 0 ${Oy} Z`).
        fill(gradient).
        opacity(0).
        stroke(color.setAlpha(.6).toString());
    // curve.animate().opacity(1).move(100, 100);

    const endY = curve.y();
    const startY = endY + 50;

    curve.move(curve.x(), startY).animate({ delay: idx * 150 }).move(curve.x(), endY).opacity(1);

    points.forEach((p, idx) => {
        if (idx > 0 && !(idx % 2)) {
            const radius = 3;
            draw.circle(radius).move(p[0] - radius / 2, p[1] - radius / 2).fill(tinycolor('red').toString())
                .opacity(0).animate({ delay: 1000 * getRandomInt(1, 3) }).opacity(.5);
        }
    });
}

export const drawAxes = (draw, vw, vh, { x: Ox, y: Oy }) => {
    const lineW = 2;
    const lineColor = tinycolor('rgba(150, 150, 150, 1)');
    const lineStroke = '10 10';
    const arrowW = 10;
    const xAxisGroup = draw.group();
    const yAxisGroup = draw.group();

    draw.size(vw, vh);

    const xAxis = xAxisGroup.line(0, Oy, vw - 20, Oy).stroke({ width: lineW, color: lineColor.setAlpha(.6).toString() })
        .attr({ 'stroke-dasharray': lineStroke }).move(0, Oy).opacity(0.5);
    const xAxisArrow = xAxisGroup.polygon(`${vw - 10},${Oy} ${vw - 20},${Oy + arrowW / 2} ${vw - 20},${Oy - arrowW / 2}`).fill(lineColor.toString());

    xAxis.animate().opacity(1);

    const xAxisMask = draw.rect(vw, arrowW).move(-vw, Oy - arrowW / 2);
    xAxisMask.animate({ delay: 1000, duration: 1500 }).move(0, Oy - arrowW / 2);

    xAxisGroup.clipWith(xAxisMask);

    const yAxis = yAxisGroup.line(Ox, 20, Ox, vh).stroke({ width: lineW, color: lineColor.setAlpha(.6).toString() })
        .attr({ 'stroke-dasharray': lineStroke }).move(Ox, 20).opacity(0.5);
    const yAxisArrow = yAxisGroup.polygon(`${Ox},10 ${Ox + arrowW / 2},20 ${Ox - arrowW / 2},20`).fill(lineColor.toString());

    yAxis.animate().opacity(1);

    const yAxisMask = draw.rect(arrowW, vh).move(Ox - arrowW / 2, vh);
    yAxisMask.animate({ delay: 1000, duration: 1500 }).move(Ox - arrowW / 2, 10);

    yAxisGroup.clipWith(yAxisMask);
}

export const drawGraph = (splines, axis) => {
    const colors = [
        tinycolor('#90d3e0'),
        tinycolor('#90d3e0').spin(-100),
        tinycolor('#90d3e0').spin(-50),
        tinycolor('#90d3e0').spin(30),
    ]
    const vw = Math.floor(window.innerWidth);
    const vh = Math.floor(window.innerHeight);
    const origin = { x: 80, y: vh - 100 };

    splines.size(vw, vh);

    colors.forEach((color, idx) => {
        drawSpline(splines, vw, vh, origin, color, idx);
    });

    drawAxes(axis, vw, vh, origin);
}