const r1c1 = document.getElementById('r1c1'),
      r1c2 = document.getElementById('r1c2'),
      r1c3 = document.getElementById('r1c3'),
      r2c1 = document.getElementById('r2c1'),
      r2c2 = document.getElementById('r2c2'),
      r2c3 = document.getElementById('r2c3'),
      r3c1 = document.getElementById('r3c1'),
      r3c2 = document.getElementById('r3c2'),
      r3c3 = document.getElementById('r3c3'),
      zero = document.getElementById('zero'),
      one = document.getElementById('one'),
      two = document.getElementById('two'),
      three = document.getElementById('three'),
      four = document.getElementById('four'),
      five = document.getElementById('five'),
      six = document.getElementById('six'),
      seven = document.getElementById('seven'),
      eight = document.getElementById('eight'),
      o = document.getElementById('o'),
      x = document.getElementById('x'),
      gameOver = document.getElementById('gameOver'),
      gameBoard = document.getElementById('gameBoard'),
      congrats = document.getElementById('congrats'),
      gameArray = [true, true, true, true, true, true, true, true, true];

let playing = false,  //Differentiates between the players turn and the computers.
    turn = true,  //Differentiates between X and O.
    chosen = false,  //
    compPicked = false,
    noWin = 0,
    compLastPick = 0,
    opponentPick = 0,
    moveCounter = 0;

o.addEventListener('click', ()=>{ chosen = true; game(); computersTurn() });
x.addEventListener('click', ()=>{ playing = true; chosen = true; game(); });

r1c1.addEventListener('click', selectZero);
r1c2.addEventListener('click', selectOne);
r1c3.addEventListener('click', selectTwo);
r2c1.addEventListener('click', selectThree);
r2c2.addEventListener('click', selectFour);
r2c3.addEventListener('click', selectFive);
r3c1.addEventListener('click', selectSix);
r3c2.addEventListener('click', selectSeven);
r3c3.addEventListener('click', selectEight);

window.onload = game();
//Function to set the stage. Allows to hide the game board and provide the initial role selection:
function game(){
  if(chosen === false){
    gameOver.classList.add("victory");
    gameOver.style.display = "block";
    gameBoard.style.display = "none";
    congrats.innerHTML = "Would You Like To Play A Game?";
  }else{
    playAgain();
  }
}
//Functions that select the squares and decide which icon to display.  Originally designed as a switch //statement, breaking into multiple functions seemed more beneficial:
function selectZero(){
  if(!turn){ zero.classList.add('fab', 'fa-rebel', 'fa-4x'); turn = true; gameArray[0] = "O";}
  else{ zero.classList.add('fab', 'fa-first-order', 'fa-4x', 'firstOrder'); turn = false; gameArray[0] = "X";}
  r1c1.removeEventListener('click', selectZero);
  moveCounter++; checkWinner();
  !playing ? playing = true : computersTurn(0);
}
function selectOne(){
  if(!turn){ one.classList.add('fab', 'fa-rebel', 'fa-4x'); turn = true; gameArray[1] = "O";}
  else{ one.classList.add('fab', 'fa-first-order', 'fa-4x', 'firstOrder'); turn = false; gameArray[1] = "X";}
  r1c2.removeEventListener('click', selectOne);
  moveCounter++; checkWinner();
  !playing ? playing = true : computersTurn(1);
}
function selectTwo(){
  if(!turn){ two.classList.add('fab', 'fa-rebel', 'fa-4x'); turn = true; gameArray[2] = "O";}
  else{ two.classList.add('fab', 'fa-first-order', 'fa-4x', 'firstOrder'); turn = false; gameArray[2] = "X";}
  r1c3.removeEventListener('click', selectTwo);
  moveCounter++;  checkWinner();
  !playing ? playing = true : computersTurn(2);
}
function selectThree(){
  if(!turn){ three.classList.add('fab', 'fa-rebel', 'fa-4x'); turn = true; gameArray[3] = "O";}
  else{ three.classList.add('fab', 'fa-first-order', 'fa-4x', 'firstOrder'); turn = false; gameArray[3] = "X";}
  r2c1.removeEventListener('click', selectThree);
  moveCounter++; checkWinner();
  !playing ? playing = true : computersTurn(3);
}
function selectFour(){
  if(!turn){ four.classList.add('fab', 'fa-rebel', 'fa-4x'); turn = true; gameArray[4] = "O";}
  else{ four.classList.add('fab', 'fa-first-order', 'fa-4x', 'firstOrder'); turn = false; gameArray[4] = "X";}
  r2c2.removeEventListener('click', selectFour);
  moveCounter++; checkWinner();
  !playing ? playing = true : computersTurn(4);
}
function selectFive(){
  if(!turn){ five.classList.add('fab', 'fa-rebel', 'fa-4x'); turn = true; gameArray[5] = "O";}
  else{ five.classList.add('fab', 'fa-first-order', 'fa-4x', 'firstOrder'); turn = false; gameArray[5] = "X";}
  r2c3.removeEventListener('click', selectFive);
  moveCounter++; checkWinner();
  !playing ? playing = true : computersTurn(5);
}
function selectSix(){
  if(!turn){ six.classList.add('fab', 'fa-rebel', 'fa-4x'); turn = true; gameArray[6] = "O";}
  else{ six.classList.add('fab', 'fa-first-order', 'fa-4x', 'firstOrder'); turn = false; gameArray[6] = "X";}
  r3c1.removeEventListener('click', selectSix);
  moveCounter++; checkWinner();
  !playing ? playing = true : computersTurn(6);
}
function selectSeven(){
  if(!turn){ seven.classList.add('fab', 'fa-rebel', 'fa-4x'); turn = true; gameArray[7] = "O";}
  else{ seven.classList.add('fab', 'fa-first-order', 'fa-4x', 'firstOrder'); turn = false; gameArray[7] = "X";}
  r3c2.removeEventListener('click', selectSeven);
  moveCounter++; checkWinner();
  !playing ? playing = true : computersTurn(7);
}
function selectEight(){
  if(!turn){ eight.classList.add('fab', 'fa-rebel', 'fa-4x'); turn = true; gameArray[8] = "O";}
  else{ eight.classList.add('fab', 'fa-first-order', 'fa-4x', 'firstOrder'); turn = false; gameArray[8] = "X";}
  r3c3.removeEventListener('click', selectEight);
  moveCounter++; checkWinner();
  !playing ? playing = true : computersTurn(8);
}
//Function to dictate the computers first moves based on positions that provide the most opportunities for //victory:
function computersTurn(pick){
  let compPick = Math.floor(Math.random() * 4);
// Deciding the computers first move:
  opponentPick = pick;
  playing = false;
  compPicked = false;
  noWin = 0;
  if(moveCounter < 3){
    if(gameArray[4] === true){ selectFour(); compLastPick = 4; }
    else{
      if(compPick === 0 && gameArray[0] === true){ selectZero();  compLastPick = 0; }
      else if(compPick === 1 && gameArray[2] === true){ selectTwo();  compLastPick = 2; }
      else if(compPick === 2 && gameArray[6] === true){ selectSix();  compLastPick = 6; }
      else if(compPick === 3 && gameArray[8] === true){ selectEight();  compLastPick = 8; }
      else{ computersTurn(opponentPick); }
    }
  }else{ compAssess(); }
}
//Function to assess the field and find winning combinations, priortizing the computers victory and then //defending against opponents:
function compAssess(){
  if(!turn){
    if (noWin === 0){ computersTurnX(compLastPick); }
    else if(noWin === 1 && compPicked === false){ computersTurnO(opponentPick); }
    else if (noWin === 2 && compPicked === false){ randomPick(); }
  }else{
    if (noWin === 0){ computersTurnO(compLastPick); }
    else if(noWin === 1 && compPicked === false){ computersTurnX(opponentPick); }
    else if (noWin === 2 && compPicked === false){ randomPick(); }
  }
}
//Function if the computer is playing as X:
function computersTurnX(pick){
  switch(pick){
    case 0:
      if(gameArray[1]==="O" && gameArray[2]===true){selectTwo(); compPicked = true; compLastPick = 2; }
      else if(gameArray[2]==="O" && gameArray[1]===true){selectOne(); compPicked = true; compLastPick = 1; }
      else if(gameArray[3]==="O" && gameArray[6]===true){selectSix(); compPicked = true; compLastPick = 6; }
      else if(gameArray[4]==="O" && gameArray[8]===true){selectEight(); compPicked = true; compLastPick = 8; }
      else if(gameArray[6]==="O" && gameArray[3]===true){selectThree(); compPicked = true; compLastPick = 3; }
      else if(gameArray[8]==="O" && gameArray[4]===true){selectFour(); compPicked = true; compLastPick = 4; }
      else{ noWin++; compAssess(); }
      break;
    case 1:
      if(gameArray[0]==="O" && gameArray[2]===true){selectTwo(); compPicked = true; compLastPick = 2; }
      else if(gameArray[4]==="O" && gameArray[7]===true){selectSeven(); compPicked = true; compLastPick = 7; }
      else if(gameArray[2]==="O" && gameArray[0]===true){selectZero(); compPicked = true; compLastPick = 0; }
      //new
      else if(gameArray[3]==="O" && gameArray[0]===true){selectZero(); compPicked = true; compLastPick = 0; }
      else if(gameArray[5]==="O" && gameArray[2]===true){selectTwo(); compPicked = true; compLastPick = 2; }
      else{ noWin++; compAssess(); }
      break;
    case 2:
      if(gameArray[1]==="O" && gameArray[0]===true){selectZero(); compPicked = true; compLastPick = 0; }
      else if(gameArray[4]==="O" && gameArray[6]===true){selectSix(); compPicked = true; compLastPick = 6; }
      else if(gameArray[5]==="O" && gameArray[8]===true){selectEight(); compPicked = true; compLastPick = 8; }
      else if(gameArray[0]==="O" && gameArray[1]===true){selectOne(); compPicked = true; compLastPick = 1; }
      else if(gameArray[6]==="O" && gameArray[4]===true){selectFour(); compPicked = true; compLastPick = 4; }
      else if(gameArray[8]==="O" && gameArray[5]===true){selectFive(); compPicked = true; compLastPick = 5; }
      else{ noWin++; compAssess(); }
      break;
    case 3:
      if(gameArray[0]==="O" && gameArray[6]===true){selectSix(); compPicked = true; compLastPick = 6; }
      else if(gameArray[4]==="O" && gameArray[5]===true){selectFive(); compPicked = true; compLastPick = 5; }
      else if(gameArray[6]==="O" && gameArray[0]===true){selectZero(); compPicked = true; compLastPick = 0; }
      else if(gameArray[1]==="O" && gameArray[0]===true){selectZero(); compPicked = true; compLastPick = 0; }
      else if(gameArray[7]==="O" && gameArray[6]===true){selectSix(); compPicked = true; compLastPick = 6; }
      else{ noWin++; compAssess(); }
      break;
    case 4:
      if(gameArray[0]==="O" && gameArray[8]===true){selectEight(); compPicked = true; compLastPick = 8; }
      else if(gameArray[1]==="O" && gameArray[7]===true){selectSeven(); compPicked = true; compLastPick = 7; }
      else if(gameArray[2]==="O" && gameArray[6]===true){selectSix(); compPicked = true; compLastPick = 6; }
      else if(gameArray[3]==="O" && gameArray[5]===true){selectFive(); compPicked = true; compLastPick = 5; }
      else if(gameArray[5]==="O" && gameArray[3]===true){selectThree(); compPicked = true; compLastPick = 3; }
      else if(gameArray[6]==="O" && gameArray[2]===true){selectTwo(); compPicked = true; compLastPick = 2; }
      else if(gameArray[7]==="O" && gameArray[1]===true){selectOne(); compPicked = true; compLastPick = 1; }
      else if(gameArray[8]==="O" && gameArray[0]===true){selectZero(); compPicked = true; compLastPick = 0; }
      else{ noWin++; compAssess(); }
      break;
    case 5:
      if(gameArray[2]==="O" && gameArray[8]===true){selectEight(); compPicked = true; compLastPick = 8; }
      else if(gameArray[4]==="O" && gameArray[3]===true){selectThree(); compPicked = true; compLastPick = 3; }
      else if(gameArray[8]==="O" && gameArray[2]===true){selectTwo(); compPicked = true; compLastPick = 2; }
      else if(gameArray[1]==="O" && gameArray[2]===true){selectTwo(); compPicked = true; compLastPick = 2; }
      else if(gameArray[7]==="O" && gameArray[8]===true){selectEight(); compPicked = true; compLastPick = 8; }
      else{ noWin++; compAssess(); }
      break;
    case 6:
      if(gameArray[3]==="O" && gameArray[0]===true){selectZero(); compPicked = true; compLastPick = 0; }
      else if(gameArray[4]==="O" && gameArray[2]===true){selectTwo(); compPicked = true; compLastPick = 2; }
      else if(gameArray[7]==="O" && gameArray[8]===true){selectEight(); compPicked = true; compLastPick = 8; }
      else if(gameArray[0]==="O" && gameArray[3]===true){selectThree(); compPicked = true; compLastPick = 3; }
      else if(gameArray[2]==="O" && gameArray[4]===true){selectFour(); compPicked = true; compLastPick = 4; }
      else if(gameArray[8]==="O" && gameArray[7]===true){selectSeven(); compPicked = true; compLastPick = 7; }
      else{ noWin++; compAssess(); }
      break;
    case 7:
      if(gameArray[4]==="O" && gameArray[1]===true){selectOne(); compPicked = true; compLastPick = 1; }
      else if(gameArray[6]==="O" && gameArray[8]===true){selectEight(); compPicked = true; compLastPick = 8; }
      else if(gameArray[8]==="O" && gameArray[6]===true){selectSix(); compPicked = true; compLastPick = 6; }
      else if(gameArray[3]==="O" && gameArray[6]===true){selectSix(); compPicked = true; compLastPick = 6; }
      else if(gameArray[5]==="O" && gameArray[8]===true){selectEight(); compPicked = true; compLastPick = 8; }
      else{ noWin++; compAssess(); }
      break;
    case 8:
      if(gameArray[4]==="O" && gameArray[0]===true){selectZero(); compPicked = true; compLastPick = 0; }
      else if(gameArray[5]==="O" && gameArray[2]===true){selectTwo(); compPicked = true; compLastPick = 2; }
      else if(gameArray[7]==="O" && gameArray[6]===true){selectSix(); compPicked = true; compLastPick = 6; }
      else if(gameArray[2]==="O" && gameArray[5]===true){selectFive(); compPicked = true; compLastPick = 5; }
      else if(gameArray[0]==="O" && gameArray[4]===true){selectFour(); compPicked = true; compLastPick = 4; }
      else if(gameArray[6]==="O" && gameArray[7]===true){selectSeven(); compPicked = true; compLastPick = 7; }
      else{ noWin++; compAssess(); }
      break;
  }
}
//Function if the computer is playing as O;
function computersTurnO(pick){
  switch(pick){
    case 0:
      if(gameArray[1]==="X" && gameArray[2]===true){selectTwo(); compPicked = true; compLastPick = 2; }
      else if(gameArray[2]==="X" && gameArray[1]===true){selectOne(); compPicked = true; compLastPick = 1; }
      else if(gameArray[3]==="X" && gameArray[6]===true){selectSix(); compPicked = true; compLastPick = 6; }
      else if(gameArray[4]==="X" && gameArray[8]===true){selectEight(); compPicked = true; compLastPick = 8; }
      else if(gameArray[6]==="X" && gameArray[3]===true){selectThree(); compPicked = true; compLastPick = 3; }
      else if(gameArray[8]==="X" && gameArray[4]===true){selectFour(); compPicked = true; compLastPick = 4; }
      else{ noWin++; compAssess(); }
      break;
    case 1:
      if(gameArray[0]==="X" && gameArray[2]===true){selectTwo(); compPicked = true; compLastPick = 2; }
      else if(gameArray[4]==="X" && gameArray[7]===true){selectSeven(); compPicked = true; compLastPick = 7; }
      else if(gameArray[2]==="X" && gameArray[0]===true){selectZero(); compPicked = true; compLastPick = 0; }
      else if(gameArray[3]==="X" && gameArray[0]===true){selectZero(); compPicked = true; compLastPick = 0; }
      else if(gameArray[5]==="X" && gameArray[2]===true){selectTwo(); compPicked = true; compLastPick = 2; }
      else{ noWin++; compAssess(); }
      break;
    case 2:
      if(gameArray[1]==="X" && gameArray[0]===true){selectZero(); compPicked = true; compLastPick = 0; }
      else if(gameArray[4]==="X" && gameArray[6]===true){selectSix(); compPicked = true; compLastPick = 6; }
      else if(gameArray[5]==="X" && gameArray[8]===true){selectEight(); compPicked = true; compLastPick = 8; }
      else if(gameArray[0]==="X" && gameArray[1]===true){selectOne(); compPicked = true; compLastPick = 1; }
      else if(gameArray[6]==="X" && gameArray[4]===true){selectFour(); compPicked = true; compLastPick = 4; }
      else if(gameArray[8]==="X" && gameArray[5]===true){selectFive(); compPicked = true; compLastPick = 5; }
      else{ noWin++; compAssess(); }
      break;
    case 3:
      if(gameArray[0]==="X" && gameArray[6]===true){selectSix(); compPicked = true; compLastPick = 6; }
      else if(gameArray[4]==="X" && gameArray[5]===true){selectFive(); compPicked = true; compLastPick = 5; }
      else if(gameArray[6]==="X" && gameArray[0]===true){selectZero(); compPicked = true; compLastPick = 0; }
      else if(gameArray[1]==="X" && gameArray[0]===true){selectZero(); compPicked = true; compLastPick = 0; }
      else if(gameArray[7]==="X" && gameArray[6]===true){selectSix(); compPicked = true; compLastPick = 6; }
      else{ noWin++; compAssess(); }
      break;
    case 4:
      if(gameArray[0]==="X" && gameArray[8]===true){selectEight(); compPicked = true; compLastPick = 8; }
      else if(gameArray[1]==="X" && gameArray[7]===true){selectSeven(); compPicked = true; compLastPick = 7; }
      else if(gameArray[2]==="X" && gameArray[6]===true){selectSix(); compPicked = true; compLastPick = 6; }
      else if(gameArray[3]==="X" && gameArray[5]===true){selectFive(); compPicked = true; compLastPick = 5; }
      else if(gameArray[5]==="X" && gameArray[3]===true){selectThree(); compPicked = true; compLastPick = 3; }
      else if(gameArray[6]==="X" && gameArray[2]===true){selectTwo(); compPicked = true; compLastPick = 2; }
      else if(gameArray[7]==="X" && gameArray[1]===true){selectOne(); compPicked = true; compLastPick = 1; }
      else if(gameArray[8]==="X" && gameArray[0]===true){selectZero(); compPicked = true; compLastPick = 0; }
      else{ noWin++; compAssess(); }
      break;
    case 5:
      if(gameArray[2]==="X" && gameArray[8]===true){selectEight(); compPicked = true; compLastPick = 8; }
      else if(gameArray[4]==="X" && gameArray[3]===true){selectThree(); compPicked = true; compLastPick = 3; }
      else if(gameArray[8]==="X" && gameArray[2]===true){selectTwo(); compPicked = true; compLastPick = 2; }
      else if(gameArray[1]==="X" && gameArray[2]===true){selectTwo(); compPicked = true; compLastPick = 2; }
      else if(gameArray[7]==="X" && gameArray[8]===true){selectEight(); compPicked = true; compLastPick = 8; }
      else{ noWin++; compAssess(); }
      break;
    case 6:
      if(gameArray[3]==="X" && gameArray[0]===true){selectZero(); compPicked = true; compLastPick = 0; }
      else if(gameArray[4]==="X" && gameArray[2]===true){selectTwo(); compPicked = true; compLastPick = 2; }
      else if(gameArray[7]==="X" && gameArray[8]===true){selectEight(); compPicked = true; compLastPick = 8; }
      else if(gameArray[0]==="X" && gameArray[3]===true){selectThree(); compPicked = true; compLastPick = 3; }
      else if(gameArray[2]==="X" && gameArray[4]===true){selectFour(); compPicked = true; compLastPick = 4; }
      else if(gameArray[8]==="X" && gameArray[7]===true){selectSeven(); compPicked = true; compLastPick = 7; }
      else{ noWin++; compAssess(); }
      break;
    case 7:
      if(gameArray[4]==="X" && gameArray[1]===true){selectOne(); compPicked = true; compLastPick = 0; }
      else if(gameArray[6]==="X" && gameArray[8]===true){selectEight(); compPicked = true; compLastPick = 8; }
      else if(gameArray[8]==="X" && gameArray[6]===true){selectSix(); compPicked = true; compLastPick = 6; }
      else if(gameArray[3]==="X" && gameArray[6]===true){selectSix(); compPicked = true; compLastPick = 6; }
      else if(gameArray[5]==="X" && gameArray[8]===true){selectEight(); compPicked = true; compLastPick = 8; }
      else{ noWin++; compAssess(); }
      break;
    case 8:
      if(gameArray[4]==="X" && gameArray[0]===true){selectZero(); compPicked = true; compLastPick = 0; }
      else if(gameArray[5]==="X" && gameArray[2]===true){selectTwo(); compPicked = true; compLastPick = 2; }
      else if(gameArray[7]==="X" && gameArray[6]===true){selectSix(); compPicked = true; compLastPick = 6; }
      else if(gameArray[2]==="X" && gameArray[5]===true){selectFive(); compPicked = true; compLastPick = 5; }
      else if(gameArray[0]==="X" && gameArray[4]===true){selectFour(); compPicked = true; compLastPick = 4; }
      else if(gameArray[6]==="X" && gameArray[7]===true){selectSeven(); compPicked = true; compLastPick = 7; }
      else{ noWin++; compAssess(); }
      break;
  }
}
//Provide the possibility of chance:
function randomPick(){
  let  compPick = Math.floor(Math.random() * 9);
  if(moveCounter < 9){
    if(gameArray[compPick]===true){
      switch (compPick) {
        case 0:selectZero(); break;
        case 1:selectOne(); break;
        case 2:selectTwo(); break;
        case 3:selectThree(); break;
        case 4:selectFour(); break;
        case 5:selectFive(); break;
        case 6:selectSix(); break;
        case 7:selectSeven(); break;
        case 8:selectEight(); break;
      }
    }else{ randomPick(); } //Calls function until an available square is found.
  }
}

function checkWinner(){
  let xWinner = false,
      oWinner = false;
// Compare Rows:
  if(gameArray[0] === "X" && gameArray[1] === "X" && gameArray[2] === "X"){xWinner = true}
  else if(gameArray[0] === "O" && gameArray[1] === "O" && gameArray[2] === "O"){oWinner = true}
  else if(gameArray[3] === "X" && gameArray[4] === "X" && gameArray[5] === "X"){xWinner = true}
  else if(gameArray[3] === "O" && gameArray[4] === "O" && gameArray[5] === "O"){oWinner = true}
  else if(gameArray[6] === "X" && gameArray[7] === "X" && gameArray[8] === "X"){xWinner = true}
  else if(gameArray[6] === "O" && gameArray[7] === "O" && gameArray[8] === "O"){oWinner = true}
// Compare Columns:
  else if(gameArray[0] === "X" && gameArray[3] === "X" && gameArray[6] === "X"){xWinner = true}
  else if(gameArray[0] === "O" && gameArray[3] === "O" && gameArray[6] === "O"){oWinner = true}
  else if(gameArray[1] === "X" && gameArray[4] === "X" && gameArray[7] === "X"){xWinner = true}
  else if(gameArray[1] === "O" && gameArray[4] === "O" && gameArray[7] === "O"){oWinner = true}
  else if(gameArray[2] === "X" && gameArray[5] === "X" && gameArray[8] === "X"){xWinner = true}
  else if(gameArray[2] === "O" && gameArray[5] === "O" && gameArray[8] === "O"){oWinner = true}
//Compare Diagonals:
  else if(gameArray[0] === "X" && gameArray[4] === "X" && gameArray[8] === "X"){xWinner = true}
  else if(gameArray[0] === "O" && gameArray[4] === "O" && gameArray[8] === "O"){oWinner = true}
  else if(gameArray[2] === "X" && gameArray[4] === "X" && gameArray[6] === "X"){xWinner = true}
  else if(gameArray[2] === "O" && gameArray[4] === "O" && gameArray[6] === "O"){oWinner = true}
//Check who won:
  if(xWinner === true){
    playing = false;
    gameOver.classList.add("victory");
    gameOver.style.display = "block";
    gameBoard.style.display = "none";
    congrats.innerHTML = "X Wins! Congragulations!!!... Would you like to play again?";
  }else if (oWinner === true){
    playing = false;
    gameOver.classList.add("victory");
    gameOver.style.display = "block";
    gameBoard.style.display = "none";
    congrats.innerHTML = "O Wins! Congragulations!!!... Would you like to play again?";
  }else if (moveCounter===9){
    gameOver.classList.add("victory");
    gameOver.style.display = "block";
    gameBoard.style.display = "none";
    congrats.innerHTML = "We'll Call It A Draw.... Would you like to play again?";
  }
}
//Reset the defaults to play again:
function playAgain(){
  turn = true;
  xWinner = false;
  oWinner = false;
  chosen = false;
  compPicked = false;
  noWin = 0;
  compLastPick = 0;
  moveCounter = 0;
  y = 0;

  for(let i=0;i<gameArray.length;i++){ gameArray[i] = true; }
  r1c1.addEventListener('click', selectZero);
  r1c2.addEventListener('click', selectOne);
  r1c3.addEventListener('click', selectTwo);
  r2c1.addEventListener('click', selectThree);
  r2c2.addEventListener('click', selectFour);
  r2c3.addEventListener('click', selectFive);
  r3c1.addEventListener('click', selectSix);
  r3c2.addEventListener('click', selectSeven);
  r3c3.addEventListener('click', selectEight);

  zero.classList.remove('fab', 'fa-rebel', 'fa-4x', 'fab', 'fa-first-order', 'fa-4x', 'firstOrder');
  one.classList.remove('fab', 'fa-rebel', 'fa-4x', 'fab', 'fa-first-order', 'fa-4x', 'firstOrder');
  two.classList.remove('fab', 'fa-rebel', 'fa-4x', 'fab', 'fa-first-order', 'fa-4x', 'firstOrder');
  three.classList.remove('fab', 'fa-rebel', 'fa-4x', 'fab', 'fa-first-order', 'fa-4x', 'firstOrder');
  four.classList.remove('fab', 'fa-rebel', 'fa-4x', 'fab', 'fa-first-order', 'fa-4x', 'firstOrder');
  five.classList.remove('fab', 'fa-rebel', 'fa-4x', 'fab', 'fa-first-order', 'fa-4x', 'firstOrder');
  six.classList.remove('fab', 'fa-rebel', 'fa-4x', 'fab', 'fa-first-order', 'fa-4x', 'firstOrder');
  seven.classList.remove('fab', 'fa-rebel', 'fa-4x', 'fab', 'fa-first-order', 'fa-4x', 'firstOrder');
  eight.classList.remove('fab', 'fa-rebel', 'fa-4x', 'fab', 'fa-first-order', 'fa-4x', 'firstOrder');

  gameOver.classList.remove("victory");
  gameOver.style.display = "none";
  gameBoard.style.display = "grid";
  congrats.innerHTML = "";
}
