const PRESSED = 1;
const RELEASED = 0;
export default class KeyboardState 
{
    constructor()
    {
        // keyStates hold the current state of a given key
        // preventing continuous firing of certain key
        this.keyStates = new Map();

        // keyMap holds the callback functions for a keycode
        this.keyMap = new Map();
    }

    addMapping(keyCode, callback)
    {
        this.keyMap.set(keyCode, callback);
    }

    handleEvent(event)
    {
        const {keyCode} = event;

        if (!this.keyMap.has(keyCode))
        {
            return;
        }
        event.preventDefault();

        const keyState = event.type === 'keydown'? PRESSED : RELEASED;

        // Check whether the keyState in the keyCode
        // has been changed (PRESSED -> RELEASED | RELEASED -> PRESSED)
        if (this.keyStates.get(keyCode) === keyState)
        {
            return;
        }
        this.keyStates.set(keyCode, keyState);
        console.log(this.keyStates);
        this.keyMap.get(keyCode)(keyState);
    }

    listenTo(window)
    {
        ['keydown', 'keyup'].forEach(eventName => {
            window.addEventListener(eventName, event => {
            this.handleEvent(event);
        });
        });
    }
}