
"use strict";

const randomNumber = Math.trunc(Math.random() * 20) + 1;
let suor = 5;
let addMover = 1;

const aginEl = document.querySelector('.agin');

const gueesEl = document.querySelector('.guees');

const clickBtn = document.querySelector('.click');
const numberBtn = document.querySelector('.number');

const sourEl = document.querySelector('.sour');

const displayEl = document.querySelector('.display');

const totalyEl = document.querySelector('.totaly');

        

clickBtn.addEventListener('click', function () {
    const numberBtn = Number(document.querySelector('.number').value);
    console.log(numberBtn);

    if (!numberBtn) {
        displayEl.textContent = 'Not a Number 🤐🤦‍♀️';

    }else if (numberBtn === randomNumber) {
        displayEl.textContent = 'You Win The Game 😎🏆';
   
        gueesEl.textContent = randomNumber;

        totalyEl.textContent = addMover;
        addMover++;
    
        document.querySelector('.body').style.backgroundColor = 'green';

    }else if (numberBtn > randomNumber) {

        if (suor > 0) {
            displayEl.textContent = 'Too High 📈🤦‍♀️';

            sourEl.textContent = suor;
            suor--; 
        }else {
            displayEl.textContent = 'Game Over 🤦‍♀️'; 
        }
        

     }else if (numberBtn < randomNumber) {

        if (suor > 0) {
            displayEl.textContent = 'Too Low 📉🤦‍♀️';

            sourEl.textContent = suor;
            suor--;  
        }else {
            displayEl.textContent = 'Game Over 🤦‍♀️';
        }
       
    }
});


aginEl.addEventListener('click', function () {

    gueesEl.textContent = '?';

    displayEl.textContent = 'Pick your number';

    document.querySelector('.body').style.backgroundColor = 'black';

    totalyEl.textContent = 0;

    sourEl.textContent = suor;

    numberBtn.value = "";
})
