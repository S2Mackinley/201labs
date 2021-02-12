let dogsList = ['german shepherd' , 'mastiff' , 'bulldog' , 'lab']

console.log('dog list' , dogsList)


for(let i= 1; i < 6; i++){
    let dogQuestion = prompt('Guess my favorite dog');
    if(dogQuestion === dogsList[0] || dogQuestion === dogsList[1] || dogQuestion === dogsList[2] || dogQuestion === dogsList[3]){
        alert('Correct!');
        break;
    } else {
        alert('Try Again');
    }


}
    alert('thanks for playing')