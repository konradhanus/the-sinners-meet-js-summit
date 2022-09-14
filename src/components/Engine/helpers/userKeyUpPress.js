import keys from '../globals/keys';

export default  (player) => ({ keyCode }) => {
    
    // GO RIGHT
    if (keyCode === 39) {
     player.rightPressed = false;
     keys.right.pressed = false;
    }

    // GO LEFT
    if (keyCode === 37) {
      player.leftPressed = false;
      keys.left.pressed = false;
    }

    // JUMP
    if (keyCode === 38) {
      player.upPressed = false;
      keys.up.pressed = false;
      console.log('jump', player);
    }

    // CROUCH
    if (keyCode === 40) {
      console.log('fall')
    }
  }