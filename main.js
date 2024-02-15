const {app} = require('electron')
const {BrowserWindow} = require('electron')
const {dialog} = require('electron')

console.log(app.name)

app.on('ready',()=>{
    console.log('La app está lista vro')

    win = new BrowserWindow({
        x: 0,
        y: 0,
        closable: true
    }).loadFile('index.html')

    setTimeout(()=>{
        // app.exit()
        resp = dialog.showMessageBoxSync(win,{
            title: 'Saludos',
            message: 'Hola saludos',
            buttons : ['Hola', 'Chao']
        })
        
    }, 5000)
})
