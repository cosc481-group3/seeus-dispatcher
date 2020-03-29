const baseConfig = require('./webpack.base');

module.exports = {
    ...baseConfig,
    entry: './src/main/main.ts',
    target: 'electron-main',
    output: {
        filename: 'main.bundle.js'
    },
    plugins: [
        // new CopyPkgJsonPlugin({
        //   remove: ['scripts', 'devDependencies', 'build'],
        //   replace: {
        //     main: './main.bundle.js',
        //     scripts: { start: 'electron ./main.bundle.js' },
        //     postinstall: 'electron-builder install-app-deps',
        //   },
        // }),
    ]
};