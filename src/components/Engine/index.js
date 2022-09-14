import { useState } from 'react';
import useCanvas from './hooks/useCanvas';
import setCanvasSizeAsWindow from './helpers/setCanvasSizeAsWindow';
import init from './init';
import animateLoop from './animateLoop';

function Engine({ hero, level }) {

    const [platforms, setPlatforms] = useState();
    const [background, setBackground] = useState();
    const [player, setPlayer] = useState();
    const [stats, setStats] = useState();

    const state = {
        platforms, 
        setPlatforms, 
        background, 
        setBackground, 
        player, 
        setPlayer,
        stats, 
        setStats, 
    }

    // Run only once when component did mount
    const canvasRef = useCanvas(([canvas, ctx]) => {
        setCanvasSizeAsWindow(canvas);

        // Run every time when window will be resized
        window.addEventListener('resize', () => {
            setCanvasSizeAsWindow(canvas);
        })

        init(canvas, ctx, level, hero, state);
    });


    const startGame = new Promise((resolve) => { resolve(); });
    startGame.then(()=>{
        animateLoop(state);
    });

    return <canvas ref={canvasRef} style={{backgroundColor: 'grey'}} />
}

export default Engine;