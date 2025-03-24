document.addEventListener('DOMContentLoaded', function () {

    let tamanhoAtualFonte = 1;

    const botaoAumentaFonte = document.getElementById('aumentar-fonte');

    botaoAumentaFonte.addEventListener('click' function (){
        tamanhoAtualFonte += 1 ;

        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    })
})