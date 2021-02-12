'use strict';

let response = confirm('Are you ready to rumble?')

// if(response === true) {
// alert('heck yeah!');
// }else{
// alert ('oh well :(');  
//}

if (9 === '9') {
    alert('pretty true')
}
else if (thirdBool) {
    console.log('myBool and anotherBool were false, but third Bool was true');
} // none of the above conditions are true
else{
    console.log('were any of my variables true?');
}

console.log ('all done');


let color = prompt (' What is your favorite color?');

let lowerColor = color.toLowerCase();

switch(lowerColor) {
    
    case 'blue':
        console.log('like a sky');
        break;

        case 'red':
            console.log('like a rose');
            break;

        default:
            console.log('I\'ve never heard of', color);
}
© 2021 GitHub, Inc.
