/**
 * Entry point of the Election app.
 */
import {app, BrowserWindow} from 'electron';
import * as path from 'path';
import * as url from 'url';
import fs from 'fs';

let mainWindow: Electron.BrowserWindow | null;

function createWindow(): void {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        webPreferences: {
            webSecurity: true,
            allowRunningInsecureContent: false,
            devTools: process.env.NODE_ENV !== 'production',
        }
    });
    reloadWindowAfterBuild(mainWindow);

    // and load the index.html of the app.
    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, './index.html'),
            protocol: 'file:',
            slashes: true
        })
    );

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it"s common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});

function reloadWindowAfterBuild(window: BrowserWindow) {
    if (process.env.NODE_ENV !== 'development') {
        return;
    }
    let timeout: NodeJS.Timeout;

    check();

    function check() {
        checkBundleFile().then(() => {
            if (!window.isDestroyed()) window.reload();
        }).catch((err) => {
            clearTimeout(timeout);
            if (err.code === 'ENOENT' && !window.isDestroyed()) {
                window.setTitle('Waiting for build to finish...');
                timeout = setTimeout(check, 1000);
            } else {
                console.error(err);
            }
        });
    }

    function checkBundleFile(filePath = 'app.bundle.js') {
        const bundlePath = path.resolve(__dirname, filePath);
        return new Promise((resolve, reject) => {
            fs.readFile(bundlePath, (err, data) => {
                if (err) reject(err);
                else resolve();
            });
        });
    }
}
