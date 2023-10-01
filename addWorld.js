// 1. Write a javascript function that will find all divs on the page with a class of “hello” and add “world” to the class list of the div.

// Cannot use document object on server-side platform like Node.js because Node.js does not have a global "window" object. However, if the “window” global is defined, we are on the browser and can use the “document” variable.

function addWorld() {
    // Fixing "ReferenceError: document is not defined"
    if (typeof document !== 'undefined') {
        console.log('In Browser');
        // Find class "hello" div
        let element = document.getElementsByClassName('hello');
        // Log element
        console.log(element);
        //Picking first element through bracket notation and adding class to add "world" text on css file
        element[0].classList.add('style');
        // Log new class
        console.log(element);
    } else {
        console.log('In Node.js');
    }
}

addWorld();

// function addWorld() {
//     // Find class "hello" div
//     let element = document.getElementsByClassName('hello');
//     // Log element
//     console.log(element);
//     //Picking first element through bracket notation and adding class to add "world" text through css file
//     element[0].classList.add('style');
//     // Log new class
//     console.log(element);
// }

// addWorld();
