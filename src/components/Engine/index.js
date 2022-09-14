import { useState, useCallback } from 'react';
import useCanvas from './hooks/useCanvas';
import setCanvasSizeAsWindow from './helpers/setCanvasSizeAsWindow';
import init from './init';
import startAnimating from './animateLoop';
import userKeyDownPress from './helpers/userKeyDownPress';
import userKeyUpPress from './helpers/userKeyUpPress';
import useEventListener from './hooks/useEventListener';
import keys from './globals/keys';

const Engine = ({ level, hero }) => {

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

  const handleUserKeyDownPress = useCallback(userKeyDownPress(player, platforms), [player]);
  const handleUserKeyUpPress = useCallback(userKeyUpPress(player), [player]);
  useEventListener(handleUserKeyDownPress, handleUserKeyUpPress, player);

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
        const FPS = 60;
        player && startAnimating(FPS, state, keys);
    });

    return <canvas ref={canvasRef} style={{backgroundColor: 'grey'}} />
}

export default Engine;