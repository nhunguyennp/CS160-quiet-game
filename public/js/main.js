import Camera from './Camera.js';
import {loadLevel} from './loaders.js';
import {createMario} from './entities.js';
import Timer from './Timer.js';
import {setupKeyboard, setupAlphabetKeyboard} from './input.js';
import {setupMouseControl} from './debug.js';
import {createCollisionLayer, createCameraLayer} from './layers.js';
import {setupLetterQueue} from './letterQueue.js';

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');


// Promize.all to loadBackgroundSprites() and loadLevel()
// at the same time
Promise.all([
    createMario(),
    loadLevel('1-1'),
])
.then(([mario, level]) => {

        const camera = new Camera();

        mario.pos.set(64, 64);

        level.comp.layers.push(
            createCollisionLayer(level),
            createCameraLayer(camera));

        level.entities.add(mario);

        //const input = setupKeyboard(mario);
        const letterQueue = setupLetterQueue();
        const input = setupAlphabetKeyboard(letterQueue);
        console.log(letterQueue.printQueue());

            input.listenTo(window);  
            //letterInput.listenTo(window);    

        const timer = new Timer(1/60);
        timer.update = function update(deltaTime) 
        {
                level.update(deltaTime);

                if (mario.pos.x > 100)
                {
                    camera.pos.x = mario.pos.x - 100;
                }
                level.comp.draw(context, camera);
        }
        timer.start();
});
