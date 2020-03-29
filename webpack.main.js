const baseConfig = require('./webpack.base');

module.exports = {
    ...baseConfig,
    entry: './src/main/main.ts',
    target: 'electron-main',
    output: {
        filename: 'main.bundle.js'
    },
    plugins: [
    ]
};