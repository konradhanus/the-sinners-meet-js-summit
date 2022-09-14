import drawPlatforms from "./animate/drawPlatforms";
import drawStats from "./animate/drawStats";

let frameCount = 0;
let time = 0;
let FPS = 0;

function animateLoop({background, platforms, player, stats}){

    background && background.draw();
    drawPlatforms(platforms);
    player && player.draw();


    if(performance.now() - time >= 500)
    {
      time = performance.now();
      FPS = frameCount*2;
      frameCount = 0;
    }
    frameCount++;
    
    drawStats(stats, FPS, player);

    requestAnimationFrame(() => animateLoop({background, platforms, player, stats}))
   
}

export default animateLoop;