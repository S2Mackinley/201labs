let numberOfGuesses = 4
let correctAnswer = '24'
console.log(24);




for(let i= 0; i < numberOfGuesses; i++){
    console.log(i)
    let askNumber = prompt('pick a number between 1 - 100');
    while (askNumber < 1 || askNumber > 100){
        askNumber = prompt('Incorrect. Please select a number 1-100');
    }
    console.log(askNumber, correctAnswer)
    if (askNumber === correctAnswer){
            alert('Great Job, you got it right');
            break; 
    } else if (askNumber < correctAnswer){
            alert('Sorry, too low')
   
    } else if (askNumber > correctAnswer){
            alert('Sorry, too high')


    }
    if(i === 3 ){
    alert('Sorry The correct answer was 24!');
    }
}
 
