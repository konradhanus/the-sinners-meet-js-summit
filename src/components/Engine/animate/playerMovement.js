import parallaxEffect from "./parallaxEffect";

const playerMovement = (keys, player, playerSpeed, platforms, background, scrollOffset) => {

    if (keys.up.pressed && keys.up.onFly === false) {
        keys.up.onFly = true;
        player.velocity.y -= 25;

    } else if (keys.up.pressed && keys.up.onFly === true) {

    }

    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = playerSpeed;
    } else if (keys.left.pressed && player.position.x > 100) {
        player.velocity.x = -playerSpeed;
    } else {
        player.velocity.x = 0;
        parallaxEffect(keys, platforms, background, scrollOffset, playerSpeed)
    }

    if (player.velocity.y === 0) {
        keys.up.onFly = false;
      }
}

export default playerMovement;