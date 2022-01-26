const EventEmitter = require('events');

// Create Class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', (event) => console.log('Event Fired!', event));

// Init event
myEmitter.emit('event', { myEventProp: 'myEventPropString'});
