import Camera from './Camera.js';
import {loadLevel, loadQueue} from './loaders.js';
import {createMario} from './entities.js';
import Timer from './Timer.js';
import {setupKeyboard, setupAlphabetKeyboard} from './input.js';
import {setupMouseControl} from './debug.js';
import {createCollisionLayer, createCameraLayer} from './layers.js';
import Queue from './Queue.js';

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');
const canPredict = true;

let model, webcam, labelContainer, maxPredictions;
const webcamElement = document.getElementById('webcam');
const URL = "https://teachablemachine.withgoogle.com/models/VSYRicuFy/";


// Promize.all to loadBackgroundSprites() and loadLevel()
// at the same time
Promise.all([
    createMario(),
    loadLevel('1-1'),
    loadQueue('1-1'),
])
.then(([mario, level, queue]) => {

        const camera = new Camera();

        mario.pos.set(64, 64);

        level.comp.layers.push(
            createCollisionLayer(level),
            createCameraLayer(camera));

        level.entities.add(mario);

        const input = setupKeyboard(mario);

        console.log(queue.printQueue());
        //const inputLetter = setupAlphabetKeyboard(queue, mario);

            //inputLetter.listenTo(window);  
            input.listenTo(window);    

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
    //     var video = document.querySelector('#video');
    //     if(navigator.mediaDevices.getUserMedia) {
    //     navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
    //     video.srcObject = stream;
    //     })
    //     .catch(function (error) {
    //         console.log("Webcam went wrong");
    //     });
    // }
        timer.start();

        window.init = async function init()
        {
             const modelURL = URL + "model.json";
            const metadataURL = URL + "metadata.json";

            // Load the model and metadata
            model = await tmImage.load(modelURL, metadataURL);
            maxPredictions = model.getTotalClasses();

            const flip = true;
            webcam = new tmImage.Webcam(272, 240, flip);
            await webcam.setup();
            await webcam.play();
            window.requestAnimationFrame(loop);

            document.getElementById('webcam-container').appendChild(webcam.canvas);
            labelContainer = document.getElementById("label-container");

            // Add label for each class
            for (let i = 0; i < maxPredictions; i++)
            {
                labelContainer.appendChild(document.createElement("div"));
            }
        }

        window.loop = async function loop()
        {
            // Update the webcam frame and wait for prediction
            webcam.update();
            await predict();
            window.requestAnimationFrame(loop);
        }

        window.predict = async function predict()
        {
            const predictions = await model.predictTopK(webcam.canvas, 4);
            //console.log(predictions);
            for (let i = 0; i < 4; i++)
            {

                const classPrediction = predictions[i].className + ": " + predictions[i].probability.toFixed(2);
                if (predictions[0].className == queue.front() && predictions[0].probability.toFixed(2) >= 0.65)
                {
                    //console.log(predictions[0].className);
                    queue.dequeue();
                    console.log(queue.printQueue());
                    mario.leap.start();
                }
                //const classPrediction = predictions.as1D().argMax();
                labelContainer.childNodes[i].innerHTML = classPrediction;
                //labelContainer.innerHTML = classPrediction;
             }
        }

});
