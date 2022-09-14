import drawPlatforms from "./animate/drawPlatforms";
import drawStats from "./animate/drawStats";
import platformCollisionDetection from "./animate/platfromCollisionDetection";
import playerMovement from "./animate/playerMovement";
import { playerSpeed } from '../../config';

let frameCount = 0;
let time = 0;
let FPS = 0;

function animateLoop({background, platforms, player, stats}, keys){

    if(performance.now() - time >= 500)
    {
      time = performance.now();
      FPS = frameCount*2;
      frameCount = 0;
    }
    frameCount++;
    
    requestAnimationFrame(() => animateLoop({background, platforms, player, stats}, keys))

    background && background.draw();
    player && player.update();
    drawStats(stats, FPS, player, keys);
    platforms && platformCollisionDetection(platforms, player);
    drawPlatforms(platforms);
    player && playerMovement(keys, player, playerSpeed, platforms)

}

export default animateLoop;