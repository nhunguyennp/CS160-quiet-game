import Keyboard from './KeyboardState.js';
export function setupKeyboard(entity)
{
        const input = new Keyboard();
        input.addMapping('KeyP', keyState => {
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

        input.addMapping('KeyD', keyState => {
            entity.go.dir += keyState ? 1 : -1;
            });

        input.addMapping('KeyA', keyState => {
            entity.go.dir += keyState ? -1 : 1;
            });
        return input;
}

export function setupAlphabetKeyboard(queue)
{
    const input = new Keyboard();
    // input.addMapping('KeyP', keyState => {
    //         if (keyState)
    //         {
    //             entity.jump.start();
    //         }
    //         else
    //         {
    //             entity.jump.cancel();
    //         }
    //             console.log(keyState);
    //         });

        input.addMapping('KeyD', keyState => {
            if (keyState && queue.front() == 'D')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                console.log(keyState);
            }
            });
        input.addMapping('KeyA', keyState => {
            if (keyState && queue.front() == 'A')
            {
                queue.dequeue();
                console.log(queue.printQueue());
                console.log(keyState);
            }
            });
        return input;
}
