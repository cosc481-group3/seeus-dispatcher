const CopyPlugin = require('copy-webpack-plugin');
const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');

module.exports = merge(baseConfig, {
    entry: './src/main/main.ts',
    target: 'electron-main',
    output: {
        filename: 'main.bundle.js'
    },
    plugins: [
        new CopyPlugin([{
            from: './src/main/index.js',
            to: './main.index.js'
        }])
    ]
});