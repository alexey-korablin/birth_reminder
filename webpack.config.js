'use strict';
const path  = require('path');

module.exports = {
    entry: 'src/scripts/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
    }
};