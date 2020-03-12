import {loadImage} from './loaders.js';
import SpriteSheet from './SpriteSheet.js';
export function loadMarioSprite()
{
   return loadImage('/img/characters.gif')
    .then(image => {

        const mario = new SpriteSheet(image, 16, 16);
        mario.define('idle', 276, 44, 16, 16);
        return mario;
    });
}

