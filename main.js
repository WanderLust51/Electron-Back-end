const {app} = require('electron')

console.log(app.name)

app.on('ready',()=>{
    console.log('La app está lista vro')
})