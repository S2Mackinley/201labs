//LOOPS


//////////////////////////// tells you to get 12 eggs////////////////////////////////////////

// let ctr = 0;

// let amount = 12

// while(ctr <= amount ) {
    // console.log('get 1 egg');
    // ctr = ctr + 1;
// }
// do {
    // console.log('doing the thing');
// }while (ctr < 0);




//////////////////////////////counting 1 mississippi 2........ 3....////////////////////////

// console.log('lets play hide and seek')
//for(let i = 1; i <= 10; i+=1) {
    //console.log(i, 'Mississippi');
//}

/////////////////////////////list of arrays ////////////////////////////////////////////////

// let apple = 'apple';
// let banana = 'banana';
// let cherry = 'cherry';

// let fruitList = [' apple' , ' banana' , ' cherry', ' dates', ' fig'];
// console.log('fruit list' , fruitList);

//////////////////////////// lets you pick which item////////////////////////////////////
// console.log(fruitList[0]);
// console.log(fruitList[1]);
// console.log(fruitList[2]);

///////////////////////////lets you write out the list of fruit with a loop///////////////
// for(let i = 0; i < 5; i++) {
    // console.log(fruitList[i])
// }

/////////////////// listS OUT ALLL ITEMS IN LIST//////////////////\

// for(let i = 0; i < fruitList.length; i++) {
    // console.log(fruitList[i]);
// }


/////////////////////falsy things///////////////////////////////////////////////////////////

//let value = NaN;
//let value = 0;
//let value = empty string( any non empty string is truthy);
//let value = 0.0;
//let value = null;
//let value = undefined;


//if(value) {
    //console.log('truthy');
//}else {
    //console.log('falsy');
//}



/////////////////////truthy things///////////////////////////////////////////////////////////

if('' || 0){
    console.log('Whole expression is truthy')
}

console.log('not empty' && 4);tocu