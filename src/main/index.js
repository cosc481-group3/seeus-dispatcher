const path = require('path');

if(process.env.NODE_ENV === 'development') {
    startAutoReload();
}

require('./main.bundle.js');

function startAutoReload() {
    console.log('[main index.js] Will auto reload window on file change via electron-reload');
    require('electron-reload')(__dirname, {
        electron: path.join(process.cwd(), 'node_modules', '.bin', 'electron')
    });
}
