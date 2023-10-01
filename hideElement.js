// 3. Write a javascript function that will hide an element after an event is fired. The event is "subscription-granted" and the element id is "hider".

function hideElement() {
    // Fixing "ReferenceError: document is not defined"
    if (typeof document !== 'undefined') {
        console.log('In Browser');
        // Find "hider" div
        let element = document.getElementById('hider');
        // Log element
        console.log(element);
        // Add event listener to trigger event
        element.addEventListener('click', () => {
            // Hide element through styling after event is triggered
            element.style.display = 'none';
            // Define element to show after button stops displaying
            let show = document.getElementById('show');
            // Show element through styling
            show.style.display = 'block';
        });
    } else {
        console.log('In Node.js');
    }
}

hideElement();

// function hideElement() {
//     // Find "hider" div
//     let element = document.getElementById('hider');
//     // Log element
//     console.log(element);
//     // Add event listener to trigger event
//     element.addEventListener('click', () => {
//         // Hide element through styling after event is triggered
//         element.style.display = 'none';
//         // Define element to show after button stops displaying
//         let show = document.getElementById('show');
//         // Show element through styling
//         show.style.display = 'block';
//     });
// }

hideElement();
