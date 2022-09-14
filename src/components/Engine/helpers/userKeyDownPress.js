import keys from '../globals/keys';

export default (player) => ({ keyCode }) =>  {
    
    // GO RIGHT
    if (keyCode === 39) {
      player.rightPressed = true;
      keys.right.pressed = true;
    }
    
    // GO LEFT
    if (keyCode === 37) {
      player.leftPressed = true;
      keys.left.pressed = true;
    }
    // JUMP
    if (keyCode === 38) {
        player.upPressed = true;
        keys.up.pressed = true;
    }

    // CROUCH
    if (keyCode === 40) {
      
    }
  }