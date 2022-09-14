const platformCollisionDetection = (platforms, player) => {
    platforms.forEach((platform)=> {

      const playerPositionFromTheTop = player.position.y + player.height;
                                      
      const playerIsHigherThanPlatform = 
      // check if player staing on the ground
      playerPositionFromTheTop <= platform.position.y && playerPositionFromTheTop 
      + player.velocity.y >= platform.position.y;

      const playerAndPlatformAreOnTheSameAxisX = 
        player.position.x + player.width > platform.position.x && 
        player.position.x <= platform.position.x + player.width/2;

      const turnOffGravity = 0;

      if(playerIsHigherThanPlatform && playerAndPlatformAreOnTheSameAxisX)
      {
        player.velocity.y = turnOffGravity;
      }
    });
};

export default platformCollisionDetection;


