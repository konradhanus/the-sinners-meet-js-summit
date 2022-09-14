import createImage from "./helpers/createImage";
import Background from "./objects/Background";
import background from '../../assets/background.png';
import setPlatforms from "./helpers/setPlatforms";
import setPlayer from "./helpers/setPlayer";
import Stats from './objects/Stats';

function init(canvas, ctx, level, hero, state) {

    const platforms = setPlatforms(level, ctx, canvas);
    const bg = new Background(ctx, canvas, 0, 0, createImage(background));
    const player = setPlayer(hero, ctx, canvas);
    const stats  = new Stats(ctx, canvas);

    
    state.setPlatforms(platforms)
    state.setBackground(bg);
    state.setPlayer(player);
    state.setStats(stats);

}

export default init;