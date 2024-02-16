

const $buttonStonePlayer1 = document.querySelector(".button-move-stone-1")
const $buttonPaperPlayer1 = document.querySelector(".button-move-paper-1")
const $buttonScissorsPlayer1 = document.querySelector(".button-move-scissors-1")

const $buttonStonePlayer2 = document.querySelector(".button-move-stone-2")
const $buttonPaperPlayer2 = document.querySelector(".button-move-paper-2")
const $buttonScissorsPlayer2 = document.querySelector(".button-move-scissors-2")

const $moveBox1=document.querySelector('#move-box-1')
const $moveBox2=document.querySelector('#move-box-2')

const $scorePlayer1=document.querySelector('#score-1')
const $scorePlayer2=document.querySelector('#score-2')
const $winnerTitle=document.querySelector('.winner-title')

const $resetButton=document.querySelector('#reset-button')

const $buttonStart=document.querySelector('.button-start')


let movePlayer1 = ''
let movePlayer2  = ''
let winner = 0
let Player1Score = 0
let Player2Score = 0
let GameStart = false

function setWinner () {
   if (movePlayer1 == '' || movePlayer2 == '')
      {return}
   if (movePlayer1 == 'stone' && movePlayer2 == 'paper') 
      {winner = 2}

   else if (movePlayer1 == 'stone' && movePlayer2 == 'scissors')
      {winner = 1}

   else if (movePlayer1 == 'paper' && movePlayer2 == 'stone')
      {winner = 1}

   else if (movePlayer1 == 'paper' && movePlayer2 == 'scissors')
      {winner = 2}

   else if (movePlayer1 == 'scissors' && movePlayer2 == 'stone')
      {winner = 2}

   else if (movePlayer1 == 'scissors' && movePlayer2 == 'paper')
      {winner = 1}

   else if (movePlayer1 == movePlayer2)
      {winner = 3} 
}
   

function addWinnerScore () {
   if (winner == 1) {
    Player1Score = Player1Score + 1;}
   
   else if (winner == 2){
      Player2Score = Player2Score + 1;
   }  
}

function printWinnerScore () {
   $scorePlayer1.innerHTML= Player1Score.toString().padStart(2, '0')
   $scorePlayer2.innerHTML= Player2Score.toString().padStart(2,'0')
}

function printWinnerName (){
   if (winner==1)
      {$winnerTitle.innerHTML='Jogador 1 venceu!'}
   if (winner==2)
      {$winnerTitle.innerHTML='Jogador 2 venceu!'}
   if (winner==3)
      {$winnerTitle.innerHTML='O jogo empatou!'}
}

function resetBattleField (){
      $moveBox1.innerHTML=''
      $moveBox2.innerHTML=''
}

function resetMoveVariables (){

      movePlayer1=''
      movePlayer2=''
}


function handleStone1Move () {
   if (GameStart == false) return 
   $moveBox1.innerHTML='<img src="image/stone.png" alt="imagem mãobranca  desenhada com traços em preto" title="imagem mão brancarepresentando    pedra do joquempo">' 
   movePlayer1 = 'stone' 
   setWinner()
   addWinnerScore ()
   printWinnerScore ()
   printWinnerName()
   if (winner!=0){ setTimeout(
      resetBattleField,2000)
      resetMoveVariables()
      winner=0}
      
   }
   
function handlePaper1Move () {
   if (GameStart == false) return
      $moveBox1.innerHTML='<img src="image/paper.png" alt="imagem mão branca desenhada com traços em preto" title="imagem mão branca representando papel do joquempo">'
      movePlayer1 = 'paper'
      setWinner()
      addWinnerScore ()
      printWinnerScore ()
      printWinnerName()
      if (winner!=0){ setTimeout(
         resetBattleField,2000)
         resetMoveVariables()
         winner=0}
        
      }
      
function handleScissors1Move() {
   if (GameStart == false) return
   $moveBox1.innerHTML='<img src="image/scissors.png" alt="imagem mão brancdesenhada com traços em preto" title="imagem mão branca representandtesoura do joquempo">'
   movePlayer1 = 'scissors'
   setWinner()
   addWinnerScore ()
   printWinnerScore ()
   printWinnerName()
   if (winner!=0){ setTimeout(
      resetBattleField,2000)
      resetMoveVariables()
      winner=0}
     
   }
              
function handleStone2Move () {
   if (GameStart == false) return
   $moveBox2.innerHTML='<img src="image/stone.png" alt="imagem mão brandesenhada com traços em preto" title="imagem mão branca representanpedra do joquempo">'
   movePlayer2 = 'stone'
   setWinner()
   addWinnerScore ()
   printWinnerScore ()
   printWinnerName()
   if (winner!=0){ setTimeout(
      resetBattleField,2000)
      resetMoveVariables()
      winner=0}
      
   }
            
function handlePaper2Move () {
   if (GameStart == false) return
   $moveBox2.innerHTML='<img src="image/paper.png" alt="imagem branca desenhada com traços em preto" title="imagem mão brarepresentando papel do joquempo">'
   movePlayer2 = 'paper'
   setWinner()
   addWinnerScore ()
   printWinnerScore ()
   printWinnerName()
   if (winner!=0){ setTimeout(
      resetBattleField,2000)
      resetMoveVariables()
      winner=0
        
   }
}

function handleScissors2Move() {
   if (GameStart == false) return
   $moveBox2.innerHTML='<img src="image/scissors.png" alt="imagem branca  desenhada com traços em preto" title="imagem mão brarepresentando  tesoura do joquempo">'
   movePlayer2 = 'scissors'
   setWinner()
   addWinnerScore ()
   printWinnerScore ()
   printWinnerName()
   if (winner!=0){ setTimeout(
   resetBattleField,2000)
   resetMoveVariables()
   winner=0}  
  
   }


/* handleResetMove=resetAll*/
   function handleResetMove (){
      $winnerTitle.innerHTML='Click no Botão Iniciar para realizar outra partida!'
      resetBattleField()
      resetMoveVariables
      Player1Score = 0
      Player2Score = 0
      printWinnerScore()
      
      
   

   }

   function handleStartGame () {
   $buttonStart.textContent='Parar'
   GameStart = true

   }
   
   $buttonStonePlayer1.addEventListener("click", handleStone1Move);
   $buttonPaperPlayer1.addEventListener("click", handlePaper1Move);
   $buttonScissorsPlayer1.addEventListener("click", handleScissors1Move);
   $buttonStonePlayer2.addEventListener("click", handleStone2Move  );
   $buttonPaperPlayer2.addEventListener("click", handlePaper2Move);
   $buttonScissorsPlayer2.addEventListener("click", handleScissors2Move);
   $resetButton.addEventListener("click", handleResetMove);
   $buttonStart.addEventListener("click", handleStartGame);











