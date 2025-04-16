import { app, BrowserWindow } from "electron";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createMainWindow() {
  const window = new BrowserWindow({
    resizable: false,
    autoHideMenuBar: true,
    title: "Hiroshima Remake",
    width: 800,
    height: 600,
  });
  window.loadFile(path.join(__dirname, "./app/index.html"));
  window.setIcon(path.join(__dirname, "./app/assets/images/icon.jpg"));
}

app.whenReady().then(() => {
  createMainWindow();
});
