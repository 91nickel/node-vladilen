const path = require('path');

console.log('Filename: ', path.basename(__filename));
console.log('Dirname: ', path.dirname(__filename));
console.log('Extension: ', path.extname(__filename));
console.log('Parse: ', path.parse(__filename));
console.log(path.join(__dirname, 'server', 'index.html'));