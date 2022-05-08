function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'image/crianca-h.png')
                document.body.style.backgroundColor = '#274752'
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'image/jovem-h.png')
                document.body.style.backgroundColor = '#dfc4ac'
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'image/adulto-h.png')
                document.body.style.backgroundColor = '#c4d38f'
            } else { 
                // Idoso
                img.setAttribute('src', 'image/idoso-h.png')
                document.body.style.backgroundColor = '#d6d6d8'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade > 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'image/crianca-m.png')
                document.body.style.backgroundColor = '#b8c888'
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'image/jovem-m.png')
                document.body.style.backgroundColor = '#67605c'
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'image/adulto-m.png')
                document.body.style.backgroundColor = '#a08165'
            } else {
                // Idoso
                img.setAttribute('src', 'image/idoso-m.png')
                document.body.style.backgroundColor = '#7db6d1'
            }
        } 
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}