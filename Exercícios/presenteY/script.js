var verificacao = document.getElementById('briefing')
var verificacao2 = document.getElementById('inicio')
var briefing = document.getElementById('Briefing')
var secreto = document.getElementById('arestrito')
var joao = document.getElementById('extra')
var declaracao = document.getElementById('extra2')



function Verify() {
    if(secreto.value == "Yasmin") {
    verificacao.style.display = 'block';
    verificacao2.style.display = 'none';
    }

    else if(secreto.value == "yasmin") {
        alert('É com letra maiúscula o início, cabeçuda')
    }

    else if(secreto.value == "João") {
        joao.style.display = 'block';
        verificacao2.style.display = 'none';
    }

    else if(secreto.value == 'Extra') {
        declaracao.style.display = 'block';
        verificacao2.style.display = 'none';
    }

    else {
        alert('Não é esse nome não cabeçuda')
    }
}