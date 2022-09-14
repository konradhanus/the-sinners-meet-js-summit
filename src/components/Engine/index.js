import useCanvas from './hooks/useCanvas';
import setCanvasSizeAsWindow from './helpers/setCanvasSizeAsWindow';

function Engine({ hero }) {

    console.log('Selected hero', hero);

    // Run only once when component did mount
    const canvasRef = useCanvas(([canvas, ctx]) => {
        setCanvasSizeAsWindow(canvas);

        // Run every time when window will be resized
        window.addEventListener('resize', () => {
            setCanvasSizeAsWindow(canvas);
        })
    });

    return <canvas ref={canvasRef} style={{backgroundColor: 'grey'}} />
}

export default Engine;