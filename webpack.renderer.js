const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base');
const path = require('path');
const merge = require('webpack-merge');

module.exports = merge(baseConfig, {
    entry: './src/app/index.tsx',
    target: 'electron-renderer',
    output: {
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, './src/app/public/index.html'),
        }),
        new webpack.DefinePlugin({
            'process.env': '{}',
            global: {}
        }),
    ]
});
