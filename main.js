const {app} = require('electron')
const {BrowserWindow} = require('electron')
const {dialog, Menu} = require('electron')

const {plantilla} = require("./menu.js")
let myMenu = Menu.buildFromTemplate(plantilla)

app.on('ready',()=>{
    console.log('La app esta lista vro')

    win = new BrowserWindow({
        x: 0,
        y: 0,
        closable: true,
        webPreferences: {
            // preload: path.join('script.js')
        }
    })
    win.loadFile('index.html')
    win.setMenu(myMenu)

    setTimeout(()=>{
        // app.exit()
        resp = dialog.showMessageBoxSync(win,{
            title: 'Saludos',
            message: 'Hola saludos',
            noLink: true,
            buttons : ['Hola', 'Chao']
        })
        if (resp == 1){
            if (!win.isDestroyed()){
                BrowserWindow.getAllWindows()[0].close()
            }
        }
        
    }, 3000)
})
