const playerMovement = (keys, player, playerSpeed) => {

    if (keys.up.pressed && keys.up.onFly === false) {
        keys.up.onFly = true;
        player.velocity.y -= 25;

    } else if (keys.up.pressed && keys.up.onFly === true) {

    }

    if (keys.right.pressed) {
        player.velocity.x = playerSpeed;
    } else if (keys.left.pressed) {
        player.velocity.x = -playerSpeed;
    } else {
        player.velocity.x = 0;
    }

    if (player.velocity.y === 1.5) {
        keys.up.onFly = false;
      }
}

export default playerMovement;