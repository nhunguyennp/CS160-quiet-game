// TileResolver converts world position to tile indexes
export default class TileResolver
{
    constructor(matrix, tileSize = 16)
    {
        this.matrix = matrix;
        this.tileSize = tileSize;
    }

    // toIndex transform position to tile index
    toIndex(pos)
    {
        return Math.floor(pos / this.tileSize);
    }

    // getByIndex returns a tile by indexes
    getByIndex(indexX, indexY)
    {
        const tile = this.matrix.get(indexX, indexY);
        if (tile)
        {
            const y1 = indexY * this.tileSize;
            return {
                tile,
                y1,
            };
        }
    }

    // matchByPosition transform posX and posY into
    // corresponding tile indexes, then use getByIndex
    // to return matching tile
    matchByPosition(posX, posY)
    {
        return this.getByIndex(
            this.toIndex(posX),
            this.toIndex(posY));
    }
}