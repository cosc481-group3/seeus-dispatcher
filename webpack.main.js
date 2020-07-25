const CopyPlugin = require('copy-webpack-plugin');
const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');

const isDev = process.env.NODE_ENV === 'development';

module.exports = merge(baseConfig, {
    entry: './src/electron/main.ts',
    target: 'electron-main',
    output: {
        filename: 'main.bundle.js'
    },
    plugins: [
        isDev && new CopyPlugin([{
            from: './src/electron/dev-main.js',
            to: './dev-main.js'
        }])
    ]
});
