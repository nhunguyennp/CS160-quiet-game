export default class SpriteSheet {
    constructor(image, width, height) {
        this.image = image;
        this.width = width;
        this.height = height;
        this.tiles = new Map();
    }

    // drawImage has two parts: what subset you want to draw
    // (x/y * width/height to get the subset using index instead
    // of actual pixel locations) and where you want to draw it 
    // (location to draw, how big)

    // define retrieves and saves the tile you want at 
    // location (0, 0) which can then be used by draw() 
    // to draw whereever you want
    define(name, x, y, width, height)
    {
        const buffer = document.createElement('canvas');
        buffer.height = height;
        buffer.width = width;
        buffer
            .getContext('2d')
            .drawImage(
                this.image,
                x,
                y,
                width,
                height,
                0,
                0,
                width,
                height);
        this.tiles.set(name, buffer);
    }

    defineTile(name, x, y)
    {
        this.define(name, x * this.width, y * this.height, this.width, this.height);
    }

    draw(name, context, x, y)
    {
        const buffer = this.tiles.get(name);
        context.drawImage(buffer, x, y);
    }  

    drawTile(name, context, x, y) 
    {
        this.draw(name, context, x * this.width, y * this.height)
    }
}