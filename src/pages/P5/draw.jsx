import React, { useCallback, useEffect } from 'react';
import Sketch from 'react-p5';

let x = 50;
let y = 50;

const Draw = (props) => {
  console.log(props);
  const setup = useCallback((p5, canvasParentRef) => {
    const cnv = p5.createCanvas(500, 500).parent(canvasParentRef);
    console.log(cnv);
    cnv.mousePressed((event) => {
      console.log('Clicked on the canvas. Event:', event);
    });
  }, []);

  const draw = useCallback((p5) => {
    p5.background('#abcdef');
    p5.ellipse(x, y, 70, 70);
    // y++;
  }, []);

  return <Sketch setup={setup} draw={draw} />;
};
export default Draw;
