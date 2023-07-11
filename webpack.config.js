const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'game.js',
        path: path.resolve(__dirname, 'public/js')
    },
    mode: 'production'
};
