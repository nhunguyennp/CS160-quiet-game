import TileResolver from './TileResolver.js';
export default class TileCollider 
{
    // Receives tiles from the level
    constructor(tileMatrix)
    {
        this.tiles = new TileResolver(tileMatrix);
    }

    // Check whether the player is colliding with ground
    // skip if he is not
    // If player is falling (velocityY > 0) then move player
    // on top of the tile
    checkY(entity)
    {
        const match = this.tiles.matchByPosition(entity.pos.x, entity.pos.y);
        if (!match)
        {
            return;
        }
        if (match.tile.name != "ground")
        {
            return;
        }
        if (entity.vel.y > 0)
        {
            if (entity.pos.y > match.y1)
            {
                entity.pos.y = match.y1;
                entity.vel.y = 0;
            }
        }
    }

    test(entity)
    {
        this.checkY(entity);
    }
}