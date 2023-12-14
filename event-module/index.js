const EventsEmitter = require('events'); // it is a class of events

// object
const event = new EventsEmitter();

event.on('runIt', (responseCode, status) => {
    console.log(`running it...! ${responseCode} ${status}`)
})

event.emit('runIt', 200, 'ok');