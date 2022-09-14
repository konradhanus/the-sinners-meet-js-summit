function drawStats(stats, FPS, player, keys){
    stats && stats.draw(`${FPS} fps`,
    `velocity: ${player.velocity.y}`,
    `right ${keys.right.pressed}`,
    `up ${keys.up.pressed}, onFly ${keys.up.onFly}`,
  );
}

export default drawStats;