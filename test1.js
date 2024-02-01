let nombreEmpleado = 'Andrés'
let sueldo = Math.round(Math.random()*(500-200)+200)
let añosServicio = Math.round(Math.random()*10)
let bono = 0

console.log(`\nEl empleado ${nombreEmpleado} tiene un sueldo base de ${sueldo}$`)

if (añosServicio > 5){
    bono = Math.round(sueldo*0.1)
    console.log(`Le corresponde un bono de ${bono}$ por sus ${añosServicio} años de servicio`)
}

let sueldoFinal = sueldo + bono

console.log(`El empleado tiene un sueldo final de ${sueldoFinal}$\n`)