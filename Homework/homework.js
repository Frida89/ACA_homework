// Task 01
// Given a number. Print “odd” if the number is odd and “even” if it’s even.
function testNumber (x) {
    if(x%2 ==0)
        return console.log("even");
    else
        return console.log("odd");
}
testNumber(131);
testNumber(21);
testNumber(12);
testNumber(70);
testNumber(15);

// Task 02
// Given five numbers as input. Calculate and print the average of the
// numbers(without using arrays).

/*
let input1 = parseInt(prompt("Enter first number"));
let input2 = parseInt(prompt("Enter second number"));
let input3 = parseInt(prompt("Enter third number"));
let input4 = parseInt(prompt("Enter four number"));
let input5 = parseInt(prompt("Enter five number"));
let result = (input1 + input2 + input3 + input4 + input5)/5;

console.log(result);

 */

// Task 03
// Given a positive integer. Bring the last digit of the number to the beginning. Print the
// new number. If the last digit of the inserted number is 0, number remains the same.


function checkLastDigit(number) {
   let lastDigit = number.toString().slice(-1);
    if(lastDigit == 0)
        return number;
    else
       return lastDigit + number.toString().slice(0,-1);

}
console.log(checkLastDigit(367));
console.log(checkLastDigit(1002));
console.log(checkLastDigit(250));
console.log(checkLastDigit(8));


// Task 04
// Check if a number is a multiple of 3, 5 or 7 and output the appropriate message
function checkNumber(x) {
    if (x % 3 ==0 && x % 7 == 0)
        return console.log(x + ' is a multiple of 3 and 7.');
    else if(x % 5 == 0 && x % 7 == 0)
        return console.log(x + ' is a multiple of 5 and 7.');
    else if (x % 3 !== 0 && x % 5 !==0 && x % 7 !==0 )
        return console.log(x + ' is not a multiple of 3, 5 or 7.');
    else if (x % 3 == 0 && x % 5 ==0 && x % 7 ==0 )
        return console.log(x + ' is  a multiple of 3, 5 or 7.');
    else
        return console.log(x + ' is a multiple  3 ');

}

checkNumber(21);
checkNumber(35);
checkNumber(13);
checkNumber(420);
checkNumber(24);

// Task 05
// 5.	Write a function to print X star pattern series using loop.

let y = 5;
let x = 5;

let str = "";

for(let i = 1; i < y; i++ ){
    for(let j = 1; j < x; j++){
        if(i + j >= y){
            str = str.concat("*");
        }else{
            str = str.concat(" ")
        }
    }
    str = str.concat("\n")
}

console.log(str)

// Task  06
// 6.	Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.
// Note: If the input tries to divide by 0, return: "Can't divide by 0!"

function count (x,y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    else
        return x + y;

}

console.log(count(2,2));

// Task 07
// 7.	Create a function that validates whether a number n is within the bounds of lower and upper. Return false if n is not an integer.
function between (x, min, max) {
    if (x > min && x <max /*&& x.isInteger()*/)
        return true;
    else
        return  false;

}
console.log(between (3, 1, 9) );
console.log(between (6, 1, 6) );
console.log(between (3.5, 1, 9) );

// Task 08
// 8.	Write a function that returns true if a hash contains the specified key, and false otherwise.

let obj = {
    a: 44,
    b: 45,
    c: 46,
    craves: true,
    midnight: true,
    snack: true,
    pot: 1,
    tot: 2,
    not: 3,

}

function containsKey(keyVal) {
    if (obj[keyVal])
        return true;
    else
        return false;
}
console.log(containsKey('a'));
console.log(containsKey('d'));
console.log(containsKey('morning'));
console.log(containsKey('not'));


// Task 09
// 9.Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.

function myfunc1(x) {
    function myfunc2(y) {
        return x + y;
    }
    return myfunc2;
}
console.log(myfunc1(10)(4));



