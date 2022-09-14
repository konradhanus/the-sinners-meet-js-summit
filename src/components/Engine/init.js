import createImage from "./helpers/createImage";
import Background from "./objects/Background";
import background from '../../assets/background.png';
import setPlatforms from "./helpers/setPlatforms";

function init(canvas, ctx, level, state) {

    const platforms = setPlatforms(level, ctx, canvas);
    const bg = new Background(ctx, canvas, 0, 0, createImage(background));

    state.setPlatforms(platforms)
    state.setBackground(bg);

}

export default init;