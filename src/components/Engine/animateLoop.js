function animateLoop({background, platforms}){
    background && background.draw();
    platforms && platforms[0].draw();
}

export default animateLoop;