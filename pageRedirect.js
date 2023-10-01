// 4. Write a javascript function that will have the page redirect to “/news” if the url contains a segment that contains only numbers.
// Ex: domain.com/news/78772/myheadline.html or
//       domain.com/news/872/mysecondheadline.html

// Not using current url but instead examples given
let url_1 = 'domain.com/news/78772/myheadline.html';
let url_2 = 'domain.com/news/872/mysecondheadline.html';
let url_3 = 'domain.com/news/mysecondheadline.html';

function pageRedirect(url) {
    // Log url
    console.log(url);
    // Split the url by '/'
    let segments = url.split('/');
    // Iterate through segments
    for (let i = 0; i < segments.length; i++) {
        // Condition to check for integers
        if (url.match(/\d/)) {
            return true;
        } else {
            return false;
        }
    }
    // return to avoid "undefined"
    return;
}

console.log(pageRedirect(url_1));
console.log(pageRedirect(url_2));
console.log(pageRedirect(url_3));

// function pageRedirect() {
//     // Get current url
//     let url = window.location.href;
//     // Log url
//     console.log(url);
//     // Split the url by '/'
//     let segments = url.split('/');
//     // Iterate through segments in url
//     for (let i = 0; i < segments.length; i++) {
//         // Conditional to check for numbers in url
//         if (url.match(/\d/)) {
//             // Redirect to /news
//             window.location.href = '/news';
//         }
//     }
// }

// pageRedirect();
