const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base');
const path = require('path');

module.exports = {
    ...baseConfig,
    entry: './src/renderer/entrypoint.tsx',
    target: 'electron-renderer',
    output: {
        filename: 'renderer.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, './src/renderer/index.html'),
        }),
    ]
};