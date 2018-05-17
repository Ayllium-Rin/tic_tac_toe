
// r1c1.addEventListener('click', ()=>{y = 0; select(y); computersTurn(y); });
// r1c2.addEventListener('click', ()=>{y = 1; select(y); computersTurn(y); });
// r1c3.addEventListener('click', ()=>{y = 2; select(y); computersTurn(y); });
// r2c1.addEventListener('click', ()=>{y = 3; select(y); computersTurn(y); });
// r2c2.addEventListener('click', ()=>{y = 4; select(y); computersTurn(y); });
// r2c3.addEventListener('click', ()=>{y = 5; select(y); computersTurn(y); });
// r3c1.addEventListener('click', ()=>{y = 6; select(y); computersTurn(y); });
// r3c2.addEventListener('click', ()=>{y = 7; select(y); computersTurn(y); });
// r3c3.addEventListener('click', ()=>{y = 8; select(y); computersTurn(y); });


// function select(location){
//   moveCounter++;
//   switch(location) {
//     case 0:
//       if(gameArray[0] === true){
//         if(!turn){ zero.classList.add('fab', 'fa-rebel', 'fa-4x'); turn = true; gameArray[0] = "O";}
//         else{ zero.classList.add('fab', 'fa-first-order', 'fa-4x', 'firstOrder'); turn = false; gameArray[0] = "X";}
//       }
//     break;
//     case 1:
//       if(gameArray[1] === true){
//         if(!turn){ one.classList.add('fab', 'fa-rebel', 'fa-4x'); turn = true; gameArray[1] = "O";}
//         else{ one.classList.add('fab', 'fa-first-order', 'fa-4x', 'firstOrder'); turn = false; gameArray[1] = "X";}
//       }
//     break;
//     case 2:
//       if(gameArray[2] === true){
//         if(!turn){ two.classList.add('fab', 'fa-rebel', 'fa-4x'); turn = true; gameArray[2] = "O";}
//         else{ two.classList.add('fab', 'fa-first-order', 'fa-4x', 'firstOrder'); turn = false; gameArray[2] = "X";}
//       }
//     break;
//     case 3:
//       if(gameArray[3] === true){
//         if(!turn){ three.classList.add('fab', 'fa-rebel', 'fa-4x'); turn = true; gameArray[3] = "O";}
//         else{ three.classList.add('fab', 'fa-first-order', 'fa-4x', 'firstOrder'); turn = false; gameArray[3] = "X";}
//       }
//     break;
//     case 4:
//       if(gameArray[4] === true){
//         if(!turn){ four.classList.add('fab', 'fa-rebel', 'fa-4x'); turn = true; gameArray[4] = "O";}
//         else{ four.classList.add('fab', 'fa-first-order', 'fa-4x', 'firstOrder'); turn = false; gameArray[4] = "X";}
//       }
//     break;
//     case 5:
//       if(gameArray[5] === true){
//         if(!turn){ five.classList.add('fab', 'fa-rebel', 'fa-4x'); turn = true; gameArray[5] = "O";}
//         else{ five.classList.add('fab', 'fa-first-order', 'fa-4x', 'firstOrder'); turn = false; gameArray[5] = "X";}
//       }
//     break;
//     case 6:
//       if(gameArray[6] === true){
//         if(!turn){ six.classList.add('fab', 'fa-rebel', 'fa-4x'); turn = true; gameArray[6] = "O";}
//         else{ six.classList.add('fab', 'fa-first-order', 'fa-4x', 'firstOrder'); turn = false; gameArray[6] = "X";}
//       }
//     break;
//     case 7:
//       if(gameArray[7] === true){
//         if(!turn){ seven.classList.add('fab', 'fa-rebel', 'fa-4x'); turn = true; gameArray[7] = "O";}
//         else{ seven.classList.add('fab', 'fa-first-order', 'fa-4x', 'firstOrder'); turn = false; gameArray[7] = "X";}
//       }
//     break;
//     case 8:
//       if(gameArray[8] === true){
//         if(!turn){ eight.classList.add('fab', 'fa-rebel', 'fa-4x'); turn = true; gameArray[8] = "O";}
//         else{ eight.classList.add('fab', 'fa-first-order', 'fa-4x', 'firstOrder'); turn = false; gameArray[8] = "X";}
//       }
//     break;
//   }
//   console.log(gameArray);
//   checkWinner();
// }
