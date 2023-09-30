// 1. Write a javascript function that will find all divs on the page with a class of “hello” and add “world” to the class list of the div.

// Cannot use document object on server-side platform like Node.js because Node.js does not have a global "window" object. However, if the “window” global is defined, we are on the browser and can use the “document” variable.

function addWorld() {
    // Fixing "ReferenceError: document is not defined"
    if (typeof document !== 'undefined') {
        console.log('In Browser');
        // Find class "hello" divs
        let element = document.getElementsByClassName('hello');
        // Print element
        console.log(element);
        // Manipulating the DOM through style sheet and the class list here. Picking first and only element through bracket notation and adding class
        element[0].classList.add('style');
    } else {
        console.log('In Node.js');
    }
}

addWorld();
