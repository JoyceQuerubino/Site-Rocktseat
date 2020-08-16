
const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

// Para cada cartão de cartões faça:
for (let card of cards ){
    card.addEventListener( "click", function(){
        const videoId = card.getAttribute("id")
        window.location.href = `/video?id=${videoId}`
    })
}



//Botão de fechar 
/*EXPLICAÇÂO 
Tipo, quando vc manda para o navegador o HTML ele cria uma árvore de elementos, 
daí ele pega o CSS e acrescenta a estilização a cada elemento dessa árvore. Depois disso, 
o navegador pega essa espécie de mapa e renderiza tudo na tela.

A classe desse botão de close não existe quando essa árvore é gerada. Então ele não entende o que vc quer dizer quando faz:
  document.querySelector('.close-modal').addEventListener('click', function () {
  modalOverlay.classList.remove('active');
  modalOverlay.querySelector('iframe').src = '';
}); 

porque .close-modal não existe p/ ele.
A solução é usar o javascript p/ acrescentar um IF. Aí seu script vai ficar de butuca e quando ele 
ver que essa classe existe ( quando o modal for renderizado ), ele coloca o eventListener de 
click no elemento que tiver a classe .close-modal
O IF é literalmente "navegador, quando a condição XYZ for verdadeira, faça isso"

Exemplo: 
const closeModal = document.querySelector('.close-modal');

if (closeModal) {
  closeModal.addEventListener('click', function () {
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector('iframe').src = '';
  });
}

*/



// AÇÕES DOS CARDS DE CURSOS
const modalOverlayEscuro = document.querySelector('.modal-overlay-escuro')
const cardsCursos = document.querySelectorAll('.card_cursos')

// Para cada cartão de cartões faça:
for (let cardCurso of cardsCursos ){
    cardCurso.addEventListener( "click", function(){
        const cursoID = cardCurso.getAttribute("id")
        modalOverlayEscuro.classList.add ('active')
        // Estamos dizendo: "Procure o iframe dentro do modalOverlay"
        modalOverlayEscuro.querySelector("iframe").src =  `https://rocketseat.com.br/${cursoID}`
    })
}

//Botão de fechar
document.querySelector(".fecha-modal").addEventListener("click", function(){
    modalOverlayEscuro.classList.remove('active')
    modalOverlayEscuro.querySelector("iframe").src = ""
    modal.classList.remove('maximize')
})

//botão de maximizar
//div-branca
const modal = document.querySelector('.div-branca')

document.querySelector(".expandir-modal").addEventListener("click", function(){
    if (modal.classList.contains('maximize') != true){
       modal.classList.add('maximize')
    } else {
        modal.classList.remove('maximize')
    }
})


