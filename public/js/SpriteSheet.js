export default class SpriteSheet {
    constructor(image, width, height) {
        this.image = image;
        this.width = width;
        this.height = height;
        this.tiles = new Map();
        this.animations = new Map();
    }

    defineAnim(name, animation)
    {
        this.animations.set(name, animation);
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
        const buffers = [false, true].map(flip => {
        const buffer = document.createElement('canvas');
        buffer.height = height;
        buffer.width = width;

        const context = buffer.getContext('2d');

        if (flip)
        {
            context.scale(-1, 1);
            context.translate(-width, 0);
        }

        context.drawImage(
            this.image, 
            x, 
            y, 
            width, 
            height, 
            0, 
            0, 
            width, 
            height);

        return buffer;
        });
        
        this.tiles.set(name, buffers);
    }

    defineTile(name, x, y)
    {
        this.define(name, x * this.width, y * this.height, this.width, this.height);
    }

    draw(name, context, x, y, flip = false)
    {
        const buffer = this.tiles.get(name)[flip ? 1 : 0];
        context.drawImage(buffer, x, y);
    }  

    drawAnim(name, context, x, y, distance)
    {
        const animation = this.animations.get(name);
        this.drawTile(animation(distance), context, x, y);
    }

    drawTile(name, context, x, y) 
    {
        this.draw(name, context, x * this.width, y * this.height)
    }
}