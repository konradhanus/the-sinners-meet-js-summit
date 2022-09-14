import drawPlatforms from "./animate/drawPlatforms";

function animateLoop({background, platforms, player}){
    background && background.draw();
    drawPlatforms(platforms);
    player && player.draw();
}

export default animateLoop;