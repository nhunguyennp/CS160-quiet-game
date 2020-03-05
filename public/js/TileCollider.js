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
        const matches = this.tiles.searchByRange(
            entity.pos.x, entity.pos.x + entity.size.x,
            entity.pos.y, entity.pos.y + entity.size.y);

        matches.forEach(match => {
            if (match.tile.name != "ground")
            {
                return;
            }
            if (entity.vel.y > 0)
            {
                if (entity.pos.y + entity.size.y > match.y1)
                {
                    entity.pos.y = match.y1 - entity.size.y; 
                    entity.vel.y = 0;
                }
                else if (entity.vel.y < 0)
                {
                    if (entity.pos.y < match.y2)
                    {
                        entity.pos.y = match.y2;
                        entity.vel.y = 0;
                    }
                }     
            }

        });
        
    }

    checkX(entity)
    {
        const matches = this.tiles.searchByRange(
            entity.pos.x, entity.pos.x + entity.size.x,
            entity.pos.y, entity.pos.y + entity.size.y);

        matches.forEach(match => {
            if (match.tile.name != "ground")
            {
                return;
            }
            if (entity.vel.x > 0)
            {
                if (entity.pos.x + entity.size.x > match.x1)
                {
                    entity.pos.x = match.x1 - entity.size.x; 
                    entity.vel.x = 0;
                }
                else if (entity.vel.x < 0)
                {
                    if (entity.pos.x < match.x2)
                    {
                        entity.pos.x = match.x2;
                        entity.vel.x = 0;
                    }
                }     
            }

        });
        
    }

    test(entity)
    {
        this.checkY(entity);
    }
}