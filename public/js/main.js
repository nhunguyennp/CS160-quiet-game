
import {loadLevel} from './loaders.js';
import {createMario} from './entities.js';
import Timer from './Timer.js';
import Keyboard from './KeyboardState.js';
import {createCollisionLayer} from './layers.js';

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');


// Promize.all to loadBackgroundSprites() and loadLevel()
// at the same time
Promise.all([
    createMario(),
    loadLevel('1-1'),
])
.then(([mario, level]) => {

        const gravity = 2000;
        mario.pos.set(64, 64);
        level.comp.layers.push(createCollisionLayer(level));

        level.entities.add(mario);

        const SPACE = 32;
        const input = new Keyboard();
        input.addMapping(SPACE, keyState => {
            if (keyState)
            {
                mario.jump.start();
            }
            else
            {
                mario.jump.cancel();
            }
                console.log(keyState);
            });

        input.addMapping(39, keyState => {
            mario.go.dir = keyState;
            });

        input.addMapping(37, keyState => {
            mario.go.dir = -keyState;
            });

            input.listenTo(window);

            ['mousedown', 'mousemove'].forEach(eventName => {
                canvas.addEventListener(eventName, event => {
                    if (event.buttons === 1)
                    {
                        mario.vel.set(0, 0);
                        mario.pos.set(event.offsetX, event.offsetY);
                    }
                });
            });

        

        const timer = new Timer(1/60);
        timer.update = function update(deltaTime) 
        {
                level.update(deltaTime);
                level.comp.draw(context);
                mario.vel.y += gravity * deltaTime;
        }
        timer.start();
});
