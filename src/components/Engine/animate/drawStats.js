function drawStats(stats, FPS, player){
    stats && stats.draw(`${FPS} fps`,
    `position x: ${player.position.x}`,
    `position y: ${player.position.y}`,
    ``,
  );
}

export default drawStats;