function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoinformado = document.getElementById('txtano')
    var res = document.getElementById('resultado')
    var sexo = document.getElementsByName('radsex')
    if (anoinformado.value.length == 0 || Number(anoinformado.value) > ano) {
        alert('Verifique os dados e tente novamente.')
    } else {
        var idade = ano - Number(anoinformado.value)
        var gênero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        //Checar Sexo
        if (sexo[0].checked) {
            gênero = "masculino"

            if (idade >=0  && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade >= 21 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }

        } else if (sexo[1].checked) {
            gênero = 'feminino'

            if (idade >=0  && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade >= 21 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }

            

        }

        res.style.textAlign = 'center'
        res.innerHTML = `Foi detectado gênero ${gênero} com ${idade} anos.`
        res.appendChild(img)

        if (sexo[0].checked) {
            document.body.style.background = '#1e8df5'
            favicon.setAttribute('href','masculino.ico')

        } else {
            document.body.style.background = 'pink'
            favicon.setAttribute('href', 'feminino.ico')
        }
    }
}
