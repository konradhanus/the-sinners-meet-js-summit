import { BLOCK } from './blockType';
import Platform from '../objects/Platform';
import { blockWidth } from '../../../config';
import createImage from './createImage';
import getTileImage from './getTileImage';

function setPlatforms(level, ctx, canvas) {

    const levelPlatforms = level.map((row,rowId)=>(
        row.map((block,colId)=>{
        if(
            block !== BLOCK.EMPTY && 
            block !== BLOCK.WATER && 
            block !== BLOCK.STAR && 
            block !== BLOCK.PLAYER && 
            block !== BLOCK.ENEMY)
        {
            return new Platform(ctx, canvas, blockWidth*colId, blockWidth*rowId, createImage(getTileImage(block)), blockWidth, block);
        }
        })
    )).flatMap(n=>n).filter(f=>f!=undefined);
        console.log(levelPlatforms);
  return levelPlatforms;
}

export default setPlatforms;