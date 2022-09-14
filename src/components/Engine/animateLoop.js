import drawPlatforms from "./animate/drawPlatforms";

function animateLoop({background, platforms}){
    background && background.draw();
    drawPlatforms(platforms);
}

export default animateLoop;