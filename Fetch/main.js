// var fetch = require('node-fetch');
//
// function plainFetch() {
//   // this fetch grabs the boulder sub reddit
//   fetch('https://www.reddit.com/r/boulder.json').then(function(response) {
//     // the json method on the response object also returns a promise
//     return response.json();
//   }).then(function(json) {
//     // so any additional json processing must happen in another then
//     console.log(json.data.children[2]);
//   });
// }
//
// plainFetch();

// How can we use async / await to rewrite the function above?


var fetch = require('node-fetch');

async function asyncFetch () {
  // this fetch grabs the boulder sub reddit
  let response = await fetch('https://www.reddit.com/r/boulder.json')
    // get this info from Boulder's reddit.  Once you are done, then move on
  let json = await response.json();
    // Take the response above and 
    console.log(json.data.children[0]);
}

asyncFetch();
