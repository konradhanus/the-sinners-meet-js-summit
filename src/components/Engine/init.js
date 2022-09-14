import Platform from "./objects/Platform";
import createImage from "./helpers/createImage";
import getTileImage from './helpers/getTileImage';
import { BLOCK } from './helpers/blockType';
import { blockWidth } from '../../config';
import Background from "./objects/Background";
import background from '../../assets/background.png';

function init(canvas, ctx, state) {
    const colId = 1;
    const rowId = 1;

    const block = BLOCK.DIRT_MIDDLE;

    const platform = new Platform(
        ctx,
        canvas,
        blockWidth * colId,
        blockWidth * rowId,
        createImage(getTileImage(block)),
        blockWidth, 
        block);

    const bg = new Background(ctx, canvas, 0, 0, createImage(background));

    state.setPlatforms([platform])
    state.setBackground(bg);


}

export default init;