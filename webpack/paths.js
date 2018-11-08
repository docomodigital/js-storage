const path = require('path');

module.exports = {
    root: path.resolve(__dirname, '../'),
    outputPath: path.resolve(__dirname, '../', 'dist'),
    entryPath: path.resolve(__dirname, '../', 'src/index.ts'),
    examplePath: {
        html: path.resolve(__dirname, '../', 'example/index.html'),
        js: path.resolve(__dirname, '../', 'example/index.ts'),
    },
    cssFolder: 'css',
    jsFolder: 'js',
};
