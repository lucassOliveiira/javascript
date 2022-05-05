var idade = 64
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('NÃO VOTA')
} else if (idade < 18 || idade > 65){
    console.log('SEU VOTO É OPCIONAL')
} else {
    console.log('SEU VOTO É OBRIGATÓRIO')
}
