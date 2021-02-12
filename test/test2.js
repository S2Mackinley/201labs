let askNumber = prompt('pick a number between 1 - 100');
let numberOfGuesses = 4
let correctAnswer = 24
console.log(24);


while (askNumber < 1 || askNumber >100){
    askNumber = prompt('Incorrect. Please select a number 1-100');
}

for(let i= 0; i < numberOfGuesses; i++){
    if (askNumber === correctAnswer){
        alert('Great Job, you got it right');
        break; 
    } else if (askNumber < correctAnswer){
        alert('Sorry, too low')
        askNumber = prompt('Please select a number 1 - 100');
    } else if (askNumber > correctAnswer){
        alert('Sorry, too high')
        askNumber = prompt('Please select a number 1 - 100');
        
        }
    }
        alert('Thanks For Playing ' + userName '. The Correct Answer was 24');
        break;


