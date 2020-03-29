if(process.env.NODE_ENV === 'development') {
    const path = require('path');
    console.log('[main index.js] Will auto reload app on file change via electron-reload');
    require('electron-reload')(__dirname, {
        electron: path.join(process.cwd(), 'node_modules', '.bin', 'electron')
    });
}

require('./main.bundle.js');