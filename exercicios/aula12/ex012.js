var hora = 5
console.log(`Agora são exatamente ${hora} horas.`)
if (hora <= 5) {
    console.log('Boa Madrugada!')
} else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18){
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}

/*
var agora = new Date()
var hora = agora.getHours()
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else if (hora <= 5 ) {
    console.log('Boa Madrugada!')
} else {
    console.log('Boa Noite!')
}
*/