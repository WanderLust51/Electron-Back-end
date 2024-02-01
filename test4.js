let ProgressBar = require ('progress')

let bar = new ProgressBar(':bar', {curr : 0, complete : '♥', incomplete: '-', total: 100})
let timer = setInterval(function(){
    bar.tick()
    if (bar.complete){
        console.log('COMPLETADO\n')
        clearInterval(timer)
    }
}, 100)