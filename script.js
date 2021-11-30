'use strict';

// selecting elements
const player0e1 = document.querySelector('.player--0');
const player1e1 = document.querySelector('.player--1');
const score0e1 = document.querySelector('#score--0');
const score1e1 = document.getElementById('score--1');
const current0e1 = document.getElementById('current--0');
const current1e1 = document.getElementById('current--1');
const diceE1 = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting condition

let scores ,currentScore,activePlayer,playing;


const init = function (){
    scores = [0, 0]
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    score0e1.textContent = 0;
    score1e1.textContent = 0;
    current0e1.textContent = 0;
    current1e1.textContent = 0; 
    diceE1.classList.add('hidden');
    player0e1.classList.remove('player--winner');
    player1e1.classList.remove('player--winner');
    player0e1.classList.add('player--active');
    player1e1.classList.remove('player--active');


};

init();


const switchPlayer = function (){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0e1.classList.toggle('player--active');
    player1e1.classList.toggle('player--active');

};

// rolling dice functionality

btnRoll.addEventListener('click',function(){
    if (playing){
    // 1.generating a random dice roll
    const dice = Math.trunc(Math.random()*6) + 1;
    
    // 2.Display the dice
    diceE1.classList.remove('hidden');
    diceE1.src = `dice-${dice}.png`;
    // 3.Check for rolles 1:if true,switvh user
    if (dice !== 1){
        // Add dice to the current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        
    }else{
        // Switch to next player
        switchPlayer();
    }}
});

btnHold.addEventListener('click', function(){
    if (playing){
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    
    // 2. Check if plyers score is >= 100
    if (scores[activePlayer] >= 20){
        playing = false;
        diceE1.classList.add('hidden');
        // Finish the game
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }else{

    }
    

    // 3. Switch to the next player
    switchPlayer();
    }   
});


btnNew.addEventListener('click',init());



