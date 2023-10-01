// 2. Write a javascript function that will find a specific anchor tag and replace the text on it and add some classes. The id of the anchor is “myAnchor” and the text will be “My fancy link” and the classes to add are “btn btn-primary”.

// Cannot use document object on server-side platform like Node.js because Node.js does not have a global "window" object. However, if the “window” global is defined, we are on the browser and can use the “document” variable.

function replaceLinkText() {
    // Fixing "ReferenceError: document is not defined"
    if (typeof document !== 'undefined') {
        console.log('In Browser');
        // Find "myAnchor" tag
        let link = document.getElementById('myAnchor');
        // Log link
        console.log(link);
        //Added properties to css file to replace text and adding the classes list here
        link.classList.add('btn');
        link.classList.add('btn-primary');
        // Log link with new text and classes
        console.log(link);
    } else {
        console.log('In Node.js');
    }
}

replaceLinkText();

// function replaceLinkText() {
//     // Find "myAnchor" tag
//     let link = document.getElementById('myAnchor');
//     // Log link
//     console.log(link);
//     //Added properties to css file to replace text and adding the classes list here
//     link.classList.add('btn');
//     link.classList.add('btn-primary');
//     // Log link with new text and classes
//     console.log(link);
// }

// replaceLinkText();
