//non-async
// function doSomething(cb) {
//     console.log('I am doing something');
//     var value = 100;
//     cb(value);
// }
//Callback pattern
// doSomething(function(value) {
//     console.log('Got a Value:', value);
// });

// we need to change to this 

// doSomething().then(function(value) {
//     console.log('Got a Value:', value);
// });

//Brute force

// function doSomething() {
//     console.log('I am doing something');


//     return {
//         "then": function(cb) {
//             var value = 100;
//             cb(value);
//         }
//     };

// }

// doSomething().then(function(value) {
//     console.log('Got a Value:', value);
// });

// But this is just a syntactic sugar for callbacks. 
// Promises capture the notion of eventual value into objects

// function Promise(fn) {
//     var callback = null;
//     // this is where we set the callback 
//     this.then = function(cb) {
//             callback = cb;
//         }
//         // when we resolve we are going to call out callback
//     this.resolve = function(value) {
//             callback(value);
//     }

//     fn(this.resolve);
// }

// function doSomething() {

//     return new Promise(function(resolve) {
//         var createdValue = Math.round(Math.random() * 100);
//         console.log('I am doing some async task- produced :' + createdValue);
//         resolve(createdValue);
//     });

// }

// doSomething().then(function(value) {
//     console.log('Got a Value:', value);
// });

// Since the variable callback is empty
// function Promise(fn) {
//     var callback = null;
//     // this is where we set the callback 
//     this.then = function(cb) {
//             callback = cb;
//         }
//         // when we resolve we are going to call out callback
//     this.resolve = function(value) {
//         //add a setime out so it doesn't immediately execute, but executes only after the 
//         //then function sets the callback
//         setTimeout(function() {
//             callback(value)
//         }, 1);
//     }

//     fn(this.resolve);
// }

// function doSomething() {

//     return new Promise(function(resolvedFn) {
//         var createdValue = Math.round(Math.random() * 100);
//         console.log('I am doing some async task- produced :' + createdValue);
//         resolvedFn(createdValue);
//     });

// }

// doSomething().then(function(value) {
//     console.log('Got a Value:', value);
// });



// The above implementation must use ""asynchronicity ""to work. 
// i.e., it needs to use setTimout to defer calling resolve function
// It's easy to make it fail again, just call then() asynchronously and 
// we are right back to the callback being null again. 
// We did the above example as its easy to understand what key things are needed in a promise
// then() and resolve() - They are key concepts in Promises.



// Promises have states, otherwise calling the then() function will cause 
// our above code to fail as the variable callback gets set to null

//We need to know what state they are in before proceding and make sure
// we go through the states correctly

// [1] => A Promise can be pending waiting for a value, or resolved with a value.
// [2] => Once a Promise resolves to a value, it will always remain at that value 
//        and never resolve again.
// [3] => A promise can also be rejected [later]

// If we track the state of the promise we can get away from using 
// asynchronicity .i.e setTimeout()

// function Promise(fn) {

//     //track state
//     var state = 'pending';
//     // function to defer till the async is complete
//     var deferred;
//     // value to pass to resolving function
//     var value;

//     function resolve(newValue) {
//         //when resolving we change state
//         state = 'resolved';
//         value = newValue;
//         if (deferred) {
//             //resolved the state and execute any function that was passed
//             handle(deferred);
//         }
//     }

//     function handle(fnToExecute) {

//         if (state === 'pending') {
//             deferred = fnToExecute;
//             return;
//         }

//         fnToExecute(value);
//     }

//     this.then = function(fnToExecute) {
//         //allow a proxy function to set the callback fn to execute 
//         handle(fnToExecute);
//     }

//     fn(resolve);

// }


// Chaining

// To accomplish chanining our then function has to return a new promise

function doSomething() {

    return new Promise(function(resolvedFn) {
        var createdValue = Math.round(Math.random() * 100);
        console.log('I am doing some async task- produced :' + createdValue);
        resolvedFn(createdValue);
    });

}

function Promise(fn) {

    //track state
    var state = 'pending';
    // function to defer till the async is complete
    var deferred;
    // value to pass to resolving function
    var value;

    function resolve(newValue) {
        //when resolving we change state
        state = 'resolved';
        value = newValue;
        if (deferred) {
            //resolved the state and execute any function that was passed
            handle(deferred);
        }
    }

    function handle(fnObjects) {

        if (state === 'pending') {
            deferred = fnObjects;
            return;
        }
        // If no function is passed to then function
        // we need execute the second function passed
        if (!fnObjects.fnToExecute) {
            fnObjects.resolve(value);
            return;
        }
        // If the first function is passed,
        // save the value and then pass result to second guy
        var firstResult = fnObjects.fnToExecute(value);
        fnObjects.resolve(firstResult);
        //fnToExecute(value);
    }

    this.then = function(fnToExecute) {
        //allow a proxy function to set the callback fn to execute 
        return new Promise(function(resolve) {
            handle({
                fnToExecute: fnToExecute,
                resolve: resolve
            })
        })
        handle(fnToExecute);
    }

    fn(resolve);

}

doSomething().then(function(result) {
    console.log('first result', result);
    return 88;
});
// }).then().then(function(secondResult) {
//     console.log('second result', secondResult);
// });