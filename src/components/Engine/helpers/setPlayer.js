import getHeroAssets from "./getHeroAssets";
import { blockWidth } from "../../../config";
import Player from "../objects/Player";

function setPlayer(hero, ctx, canvas){
    const selectedHero = getHeroAssets(hero);
    return new Player(ctx, canvas, selectedHero, blockWidth);
}

export default setPlayer;