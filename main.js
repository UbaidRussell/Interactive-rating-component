// Form 
let form = document.querySelector('form');

//Containers
let mainContainer = document.getElementsByClassName('main-container');
let secondaryContainer = document.getElementsByClassName('secondary-container');

//Radio choices and the choice the user made
let radioChoices = document.querySelectorAll('input[type="radio"]');
let radioChoice; 

//User answer
let userAnswer = document.getElementById('user-answer');


//Part of what we're working on at the bottom of this page 🥊
let submitButton = document.getElementsByClassName('submit-button')[0];


console.log(radioChoices);
hideSecondaryContainer();

//Runs when the form is submitted
form.onsubmit = function(e){
    e.preventDefault();
    radioChoice = document.querySelector('input[type="radio"]:checked');
    changeNumber();
    hideMainContainer();
    showSecondaryContainer();
    submitButton.onclick = function(){
        if (radioChoice.value === '' || radioChoice.value === null){
            window.alert('Please choose an option');
        }
    }
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



  