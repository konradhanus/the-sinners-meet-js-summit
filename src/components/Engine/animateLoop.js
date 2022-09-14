import drawPlatforms from "./animate/drawPlatforms";
import drawStats from "./animate/drawStats";
import platformCollisionDetection from "./animate/platfromCollisionDetection";
import playerMovement from "./animate/playerMovement";
import { playerSpeed } from '../../config';

let frameCount = 0;
let fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps, state, keys) {
  fpsInterval = 1000 / fps;
  then = Date.now();
  startTime = then;
  animateLoop(state, keys);
}

function animateLoop({background, platforms, player, stats}, keys){


    requestAnimationFrame(() => animateLoop({background, platforms, player, stats}, keys))

    now = Date.now();
    elapsed = now - then; 
    
    if (elapsed > fpsInterval) {
      
      // Get ready for next frame by setting then=now, but...
      // Also, adjust for fpsInterval not being multiple of 16.67

      then = now - (elapsed % fpsInterval);
      
      let sinceStart = now - startTime;
      let currentFps = Math.round(1000 / (sinceStart / ++frameCount) * 100) / 100;

      background && background.draw();
      player && player.update();
      platforms && platformCollisionDetection(platforms, player);
      drawPlatforms(platforms);
      player && playerMovement(keys, player, playerSpeed, platforms);

      drawStats(stats, currentFps, player, keys);
    }

}

export default startAnimating