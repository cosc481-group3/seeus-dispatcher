const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base');
const path = require('path');
const merge = require('webpack-merge');

module.exports = merge(baseConfig, {
    entry: './src/renderer/index.tsx',
    target: 'electron-renderer',
    output: {
        filename: 'renderer.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, './src/renderer/public/index.html'),
        }),
        new webpack.DefinePlugin({
            "process.env": "{}",
            global: {}
        }),
    ]
});
