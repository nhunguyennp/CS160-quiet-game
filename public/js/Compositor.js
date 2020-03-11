
// Layer is a higher order function (function that returns a function), 
// which has all the information to draw itself in a context

export default class Compositor 
{
    constructor()
    {
        this.layers = [];
    }

    draw(context, camera)
    {
        this.layers.forEach(layer => {
            layer(context, camera);
        });
    }
}