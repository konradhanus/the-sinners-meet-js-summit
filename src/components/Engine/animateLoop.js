import drawPlatforms from "./animate/drawPlatforms";

function animateLoop({background, platforms, player}){
    background && background.draw();
    drawPlatforms(platforms);
    player && player.draw();

    requestAnimationFrame(() => animateLoop({background, platforms, player}))
}

export default animateLoop;