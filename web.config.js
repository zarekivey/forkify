const path = require('path'); // Node module stored in path avriable

module.exports = {
    entry: './src/js/index.js', // Where webpack starts the bundling
    output: { // Where the file is stored
        path: path.resolve(__dirname, 'dist/js'), // Absolute path, needs the node package path to connect with the dist/js file.
        filename: 'bundle.js' 
    },
    mode: 'development' // Theres 2 modes in this property. development mode bundles it wihtout minifying it, to make it as fast as possible. Production mode optimizes it
};