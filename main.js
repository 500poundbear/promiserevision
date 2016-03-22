/* From https://gist.github.com/domenic/3889970 
 * 
 * Promises are a software abstraction that makes asynchronous operations more
 * pleasant. From continuation-passing style, to a promise that represents the
 * eventual results of the operation.
 *
 * getName("gaga",function(err,res){}->var promiseForName = getName("gaga");
 *
 * Promises solve:
 * (a) Avoiding callback hell
 *
 * The purpose of promises are to provide functional composition and error
 * bubbling in the asynchronous world. 
 *
 * then is a function that RETURNS A NEW PROMISE. 
 *
 * A promise has 3 states. Pending, fulfilled and rejected.
 * From pending -> fulfilled|rejected. One way only.
 */

/* Creating a new promise object */
var p = new Promise(function(resolve, reject) {
    //resolve("success");
    //reject("BECAUSE");
    resolve(3);
});


/* p.then(onFulfilled, onRejected)
 * The then method returns a Promise.
 *
 * 
 */
p.then(function(value) {
    console.log(value);
}, function(reason) {
    console.log(reason);
});

/* Chaining 
 * Since then returns a Promise, then calls can be chained
 * Also illustrated: catch errors. Note the collapse to the .catch
 */

p.then(function(value) {
    console.log(value);
    return value * 5;
}).then(function(value) {
    console.log(value);
    throw "ERR";
    return value + 3;
}).then(function(value) {
    console.log(value);
}).catch(function(err) {
    console.log("ERROR"+err);  
});

/* Promise.all(iterable)
 * returns a promise that resolves when all the promises in the iterable
 * argument have resolved, or rejects with the reason of the FIRST passed
 * promise that rejects.
 * Iterable objects: arrays
 */


