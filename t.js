var ht = require('./index.js');
let x = ht("{{foo()}}", { foo: function(){return 122} });
console.log(x);
