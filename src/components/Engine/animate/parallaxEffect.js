function parallaxEffect(keys, platforms, background, scrollOffset, playerSpeed) {
    
    if (keys.right.pressed) {
    scrollOffset += playerSpeed;

    platforms.forEach((platform) => {
      platform.position.x -= playerSpeed
    })

    background.position.x -= playerSpeed * 0.66

  } else if (keys.left.pressed) {
    
    platforms.forEach((platform) => {
      scrollOffset -= playerSpeed;
      platform.position.x += playerSpeed
    })

    background.position.x += playerSpeed * 0.66
  }
}

export default parallaxEffect;