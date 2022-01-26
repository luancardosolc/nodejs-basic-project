const EventEmitter = require('events');

// Create Class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', (event) => console.log('Event Fired!', event));

// Init event
myEmitter.emit('event', { myEventProp: 'Event 1 myEventPropString'});
myEmitter.emit('event', { myEventProp: 'Event 2 myEventPropString'});
myEmitter.emit('event', { myEventProp: 'Event 3 myEventPropString'});
