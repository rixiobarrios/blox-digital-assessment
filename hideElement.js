// 3. Write a javascript function that will hide an element after an event is fired. The event is "subscription-granted" and the element id is "hider".

function hideElement() {
    // Fixing "ReferenceError: document is not defined"
    if (typeof document !== 'undefined') {
        console.log('In Browser');
        // Find "hider" div
        let element = document.getElementById('hider');
        // Log element
        console.log(element);
        // Add event listener
        element.addEventListener('click', () => {
            element.style.display = 'none';
            // Show after button stops displaying
            let show = document.getElementById('show');
            show.style.display = 'block';
        });
    } else {
        console.log('In Node.js');
    }
}

hideElement();
