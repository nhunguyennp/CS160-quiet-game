export class Matrix
{
    constructor()
    {
        this.grid = [];
    }

    forEach(callback)
    {
        this.grid.forEach((column, x) => {
            column.forEach((value, y) => 
            {
                callback(value, x, y);
            });
        });
    }

    get(x, y)
    {
        const col = this.grid[x];
        if (col) 
        {
            return col[y];
        }
        return undefined;
    }

    set(x, y, value)
    {
        // If grid does not contain a column at x, grid 
        // creates an array column (y) and stores value at 
        // grid[x][y]
        if (!this.grid[x])
        {
            this.grid[x] = [];
        }
        this.grid[x][y] = value;
    }
}
export class Vec2 
{
    constructor(x, y)
    {
        this.set(x, y);
    }

    set(x, y)
    {
        this.x = x;
        this.y = y;
    }
}