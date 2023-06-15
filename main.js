const form = document.querySelector('form');
const mainContainer = document.getElementsByClassName('main-container');
const radioChoices = document.querySelectorAll('input[type="radio"]');
let radioChoice; 
let userAnswer = document.getElementById('user-answer');

console.log(radioChoices);

//Runs when the form is submitted
form.onsubmit = function(e){
    e.preventDefault();
    radioChoice = document.querySelector('input[type="radio"]:checked');
    console.log(radioChoice.value);
    changeNumber();
}

//Change the number in the secondary container
function changeNumber (){
    userAnswer.innerHTML = radioChoice.value;
}