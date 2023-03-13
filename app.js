const resultDisplay = document.querySelector('#result');
const choicesDisplay = document.querySelector('#choices');
const choices = ['rock', 'paper', 'scissors'];

const handleClick = () => {
    console.log('clicked');
}

choices.forEach(choice => {
    const button = document.createElement('button');
    button.innerHTML = choice;
    button.addEventListener('click', handleClick);
    choicesDisplay.appendChild(button);
})