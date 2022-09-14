import Platform from "./objects/Platform";
import createImage from "./helpers/createImage";
import getTileImage from './helpers/getTileImage';
import { BLOCK } from './helpers/blockType';
import { blockWidth } from '../../config';

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

    state.setPlatforms([platform])

}

export default init;