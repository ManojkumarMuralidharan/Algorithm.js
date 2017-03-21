// "use strict";
// (function() {
//     var a = b = 3;
// })();

// console.log(a !== undefined ? a : undefined);
// console.log(b !== undefined ? b : undefined);


// myobject = {
//     'foo': 'bar',
//     'func': function() {
//         var self = this;
//         console.log('this.foo:' + this.foo)
//         console.log('self.foo:' + self.foo)

//         (function() {
//             console.log('this.foo:' + this.foo);
//             console.log('self.foo:' + self.foo);
//         })();

//     }

// }

// myobject.func();

// console.log('step 1');
// var start = Date.now();
// for (var i = 0; i < 10000000000; i++) {


// }
// var end = Date.now();
// console.log('step 2');
// console.log(end - start);

// var events = require('events');
// var emitter = new events.EventEmitter();


// emitter.once('knock', function() {
//     console.log('Yarruda');
// })

// emitter.on('knock', function() {
//     console.log('Kabali da');
// })


// emitter.emit('knock');
// emitter.emit('knock');


// var doma = require('domain').create();

// process.on('uncaughtException', function(err) {
//     console.log('caught in process error', err);
// });

// doma.on('error', function(err) {
//     console.log('custom error', err);
// });

// //doma.run(function() {
// try {
//     setTimeout(function() {
//         throw new Error('Failed to catch!');
//     }, 1000);
// } catch (err) {
//     console.log('caught me inside catch block', err);
// }
// //});



var myobject = {
    'foo': 'bar',
    'func': function() {
        //this == myobject
        var self = this;
        console.log('this.foo:' + this.foo) // bar 
        console.log('self.foo:' + self.foo) // bar

        (function tr() {
            //console.log(this.toString());
            global.console.log('this.foo:' + this.foo); // undefined 
            gloabl.console.log('self.foo:' + self.foo); // bar
        })();

    }

}

myobject.func();


user class(name)
greet
getName
admin class(name) => inherit user
override greet
function

event bubbling