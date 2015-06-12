'use strict'

var unique = require('uniq');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6];

console.log(unique(data));


//TODO: Multiplayer HTML5 Osmos https://github.com/borismus/osmus
/*Approach is to use browserify to bundle all JS and emulate requires in the browser.
 This approach relies on node.js to serve the generated JS,
 which is not ideal, since static files should be served by a webserver optimized for the purpose.
 However node.js + browserify can be configured to compile JS that can be served statically
 without relying on node to serve it. */
