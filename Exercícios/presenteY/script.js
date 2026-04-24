var verificacao = document.getElementById('briefing')
var verificacao2 = document.getElementById('inicio')
var briefing = document.getElementById('Briefing')
var secreto = document.getElementById('arestrito')




function Verify() {
    if(secreto.value == "Yasmin") {
    verificacao.style.display = 'block';
    verificacao2.style.display = 'none';
    }

    else if(secreto.value == "yasmin") {
        alert('É com letra maiúscula o início, cabeçuda')
    }

    else {
        alert('Não é esse nome não cabeçuda')
    }
}