const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('anything', function (data) {
    console.log('ON: anything', data);
});

emitter.emit('anything', {
    a: 1
});
setTimeout(function () {
    emitter.emit('anything', {
        c: 1
    });

}, 1500);

class Dispatcher extends EventEmitter {
    subscribe (eventName, cb) {
        console.log('[Subscribe...]');
        this.on(eventName, cb);
    }
    dispatch (eventName, data) {
        console.log('[Dispatching...]');
        this.emit(eventName, data);
    }
}
const dis = new Dispatcher();

dis.subscribe('some_event', function (data) {
    console.log('ON: some_event', data);
});

dis.dispatch('some_event', {'name': 'Event'});

