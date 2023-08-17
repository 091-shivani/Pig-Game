'use strict';
let rolldice=document.querySelector('.rolldice');
let newgame=document.querySelector('.newgame');
let hold=document.querySelector('.hold');
let currentscore1=document.querySelector('#currentscore1');
let currentscore2=document.querySelector('#currentscore2');
let player1=document.querySelector('.player1');
let player2=document.querySelector('.player2');
let score1=document.querySelector('#score1');
let score2=document.querySelector('#score2');
let currentscore=document.querySelector('.currentscore');
let diceimg=document.querySelector('img');
let winner=document.querySelector('.winner');

const switchPlayer=function()
{
   
    if(player1.classList.contains('playeractive'))
    {
        currentscore1.textContent=0;
        player1.classList.remove('playeractive');
        player2.classList.add('playeractive');
    }
    else{
        currentscore2.textContent=0;
        player2.classList.remove('playeractive');
        player1.classList.add('playeractive');
    }
}
const dice=function(){
     let numberOnDice=Math.trunc(Math.random()*6)+1;
     diceimg.classList.remove('hidden');
     diceimg.src=`dice-${numberOnDice}.png`;
     if(numberOnDice==1)
     {
        switchPlayer(); 
        return; 
     }
     if(player1.classList.contains('playeractive'))
        currentscore1.textContent=Number(currentscore1.textContent)+numberOnDice;
    else
    currentscore2.textContent=Number(currentscore2.textContent)+numberOnDice;    
}
const newGame=function(){
    if(!(player1.classList.contains('playeractive')))
    {
        player2.classList.remove('playeractive');
        player1.classList.add('playeractive');
    }
    winner.classList.add('hidden');
    currentscore1.textContent=0;
    currentscore2.textContent=0;
    score1.textContent=0;
    score2.textContent=0;
}
const holdScore=function(){
    if(player1.classList.contains('playeractive')){
         score1.textContent=Number(score1.textContent)+Number(currentscore1.textContent);
         if(Number(score1.textContent>=100))
        {
            winner.src=`player1.png`;
            winner.classList.remove('hidden');
            diceimg.classList.add('hidden');
            setTimeout(newGame,3000);
            return;
        }
        }
    else{
        score2.textContent=Number(score2.textContent)+Number(currentscore2.textContent);
         if(Number(score2.textContent>=100))
        {
            winner.src=`player2.png`;
            winner.classList.remove('hidden');
            diceimg.classList.add('hidden');
            setTimeout(newGame,3000);
            return;
        }
    
    }
    switchPlayer();   
}
hold.addEventListener('click',holdScore);
rolldice.addEventListener('click',dice);
newgame.addEventListener('click',newGame);