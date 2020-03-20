import Keyboard from './KeyboardState.js';
export function setupKeyboard(entity)
{
        const input = new Keyboard();
        input.addMapping('Space', keyState => {
            if (keyState)
            {
                entity.jump.start();
            }
            else
            {
                entity.jump.cancel();
            }
                console.log(keyState);
            });

        input.addMapping('ArrowRight', keyState => {
            entity.go.dir += keyState ? 1 : -1;
            });

        input.addMapping('ArrowLeft', keyState => {
            entity.go.dir += keyState ? -1 : 1;
            });
        return input;
}

export function setupAlphabetKeyboard(queue, entity)
{
    const input = new Keyboard();

        input.addMapping('KeyA', keyState => {
            if (keyState && queue.front() == 'A')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyB', keyState => {
            if (keyState && queue.front() == 'B')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyC', keyState => {
            if (keyState && queue.front() == 'C')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyD', keyState => {
            if (keyState && queue.front() == 'D')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyE', keyState => {
            if (keyState && queue.front() == 'E')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyF', keyState => {
            if (keyState && queue.front() == 'F')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyG', keyState => {
            if (keyState && queue.front() == 'G')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyH', keyState => {
            if (keyState && queue.front() == 'H')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyI', keyState => {
            if (keyState && queue.front() == 'I')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyK', keyState => {
            if (keyState && queue.front() == 'K')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyL', keyState => {
            if (keyState && queue.front() == 'L')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyM', keyState => {
            if (keyState && queue.front() == 'M')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyN', keyState => {
            if (keyState && queue.front() == 'N')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyO', keyState => {
            if (keyState && queue.front() == 'O')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyP', keyState => {
            if (keyState && queue.front() == 'P')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyQ', keyState => {
            if (keyState && queue.front() == 'Q')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyR', keyState => {
            if (keyState && queue.front() == 'R')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyS', keyState => {
            if (keyState && queue.front() == 'S')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyT', keyState => {
            if (keyState && queue.front() == 'T')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyU', keyState => {
            if (keyState && queue.front() == 'U')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyV', keyState => {
            if (keyState && queue.front() == 'V')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyW', keyState => {
            if (keyState && queue.front() == 'W')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyX', keyState => {
            if (keyState && queue.front() == 'X')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });
        input.addMapping('KeyY', keyState => {
            if (keyState && queue.front() == 'Y')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                entity.leap.start();
                console.log(keyState);
            }
            });

        return input;
}
