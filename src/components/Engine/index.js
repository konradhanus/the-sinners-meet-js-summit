import { useState } from 'react';
import useCanvas from './hooks/useCanvas';
import setCanvasSizeAsWindow from './helpers/setCanvasSizeAsWindow';
import init from './init';
import animateLoop from './animateLoop';

function Engine({ hero }) {

    console.log('Selected hero', hero);

    const [platforms, setPlatforms] = useState();

    const state = {
        platforms, 
        setPlatforms
    }

    // Run only once when component did mount
    const canvasRef = useCanvas(([canvas, ctx]) => {
        setCanvasSizeAsWindow(canvas);

        // Run every time when window will be resized
        window.addEventListener('resize', () => {
            setCanvasSizeAsWindow(canvas);
        })

        init(canvas, ctx, state);
    });


    const startGame = new Promise((resolve) => { resolve(); });
    startGame.then(()=>{
        animateLoop(state);
    });

    return <canvas ref={canvasRef} style={{backgroundColor: 'grey'}} />
}

export default Engine;