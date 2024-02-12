
const $buttonStonePlayer1 = document.querySelector(".button-move-stone-1")
const $buttonPaperPlayer1 = document.querySelector(".button-move-paper-1")
const $buttonScissorsPlayer1 = document.querySelector(".button-move-scissors-1")
const $moveBox1=document.querySelector('#move-box-1')

function handleStone1Move () { 
   $moveBox1.innerHTML='<img src="image/stone.png" alt="imagem mão branca desenhada com traços em preto" title="imagem mão branca representando pedra do joquempo">'
}

function handlePaper1Move () {
    $moveBox1.innerHTML='<img src="image/paper.png" alt="imagem mão branca desenhada com traços em preto" title="imagem mão branca representando papel do joquempo">'
 }
 function handleScissors1Move() {
   $moveBox1.innerHTML='<img src="image/scissors.png" alt="imagem mão branca desenhada com traços em preto" title="imagem mão branca representando tesoura do joquempo">'
 }

$buttonStonePlayer1.addEventListener("click", handleStone1Move  );
$buttonPaperPlayer1.addEventListener("click", handlePaper1Move);
$buttonScissorsPlayer1.addEventListener("click", handleScissors1Move);



const $buttonStonePlayer2 = document.querySelector(".button-move-stone-2")
const $buttonPaperPlayer2 = document.querySelector(".button-move-paper-2")
const $buttonScissorsPlayer2 = document.querySelector(".button-move-scissors-2")
const $moveBox2=document.querySelector('#move-box-2')

function handleStone2Move () {
   $moveBox2.innerHTML='<img src="image/stone.png" alt="imagem mão branca desenhada com traços em preto" title="imagem mão branca representando pedra do joquempo">'
}

function handlePaper2Move () {
    $moveBox2.innerHTML='<img src="image/paper.png" alt="imagem mão branca desenhada com traços em preto" title="imagem mão branca representando papel do joquempo">'
 }
 function handleScissors2Move() {
   $moveBox2.innerHTML='<img src="image/scissors.png" alt="imagem mão branca desenhada com traços em preto" title="imagem mão branca representando tesoura do joquempo">'
 }

$buttonStonePlayer2.addEventListener("click", handleStone2Move  );
$buttonPaperPlayer2.addEventListener("click", handlePaper2Move);
$buttonScissorsPlayer2.addEventListener("click", handleScissors2Move);









