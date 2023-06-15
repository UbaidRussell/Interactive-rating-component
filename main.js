let form = document.querySelector('form');
let mainContainer = document.getElementsByClassName('main-container');
let radioChoices = document.querySelectorAll('input[type="radio"]');
let radioChoice; 
let userAnswer = document.getElementById('user-answer');
let secondaryContainer = document.getElementsByClassName('secondary-container');

console.log(radioChoices);
hideSecondaryContainer();
//Runs when the form is submitted
form.onsubmit = function(e){
    e.preventDefault();
    radioChoice = document.querySelector('input[type="radio"]:checked');
    console.log(radioChoice.value);
    changeNumber();
    hideMainContainer();
    showSecondaryContainer();
}

//Change the number in the secondary container
function changeNumber (){
    userAnswer.innerHTML = radioChoice.value;
}

//Hide the main container
function hideMainContainer(){
    mainContainer[0].style.display = 'none';
}
//Show the main container
function showMainContainer(){
    mainContainer[0].style.display = 'block';
}

//Hide the secondary container
function hideSecondaryContainer(){
    secondaryContainer[0].style.display = 'none';
}
//Show the secondary container
function showSecondaryContainer(){
    secondaryContainer[0].style.display = 'block';
}