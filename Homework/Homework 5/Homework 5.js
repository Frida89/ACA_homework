// TASK 01
// Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word") is a word or phrase without a repeating letter.
// Input 	   Output
// Machine 	    true
// isogram 	    true
// Area 	    false


function isIsogram(str) {
     let newStr = str.toLowerCase();
    let strArr = newStr.split("");
    for (let i = 0; i < newStr.length; i++) {
            if (strArr[i] == strArr[i + 1]) {
                return false
            } else {
                return true;
            }
        }
}
console.log(isIsogram("Machine"));
console.log(isIsogram("isogram"));
console.log(isIsogram("Area"));
/*
let str = "Area"
let newStr = str.toLowerCase();
let strArr = newStr.split("");
console.log(strArr);

 */

function isIsogram (word) {
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() !== word[i].toUpperCase() && word.toLowerCase().lastIndexOf(word[i].toLowerCase()) !== i) {

            return false;
        }
    }
    return true;
}

console.log(isIsogram('Area'));
console.log(isIsogram("Machine"));
console.log(isIsogram("isogram"));



// TASK 02
// . Write a recursive function to determine whether all digits of the number are odd or not.
// Input 	Output
// 4211133 	false
// 7791 	true
// 5 	true

function oddNumber (number) {
    let digit = number%10;
    if(number < 10) {
        return number % 2 !== 0;
    } if(digit % 2 !== 0) {
        number = (number-digit)/10;
        return  oddNumber (number)

    }
    return false;
}

console.log(oddNumber(4211133));
console.log(oddNumber(7791));
console.log(oddNumber(5));

/* false
function oddNumber (number) {
    let arr = number.toString().split('');
    for(let i = 0; i < arr.length; i++) {
        if(arr[i]  === 1) {
            return true;
        } else {
            return false;
        }
    }

}

console.log(oddNumber(4211133));
console.log(oddNumber(7791));
console.log(oddNumber(5));

 */



// TASK 03
// Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).
// Input 	                             Output
// [1, [3, 4, [1, 2]], 10] 	        [1, 3, 4, 1, 2, 10]
// [14, [1, [[[3, []]], 1], 0]    	[14, 1, 3, 1, 0]



// TASK 04
// Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number. Repeat that process if needed and return the result.
// Input 	     Output
// 14 	            5
// 29 	            2
// 999999999999 	9

function sumDigits(number) {
        sum = 0;
    while (number) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }

   return sum;
}
console.log(sumDigits(14));
console.log(sumDigits(29));
console.log(sumDigits(999999999999));



// TASK 05
//  Given a sorted array and an element from that array. Find the index of that element using binary search. Please research about binary search
// please don't copy and paste the solution, just try to understand it..

function binarySearch(arr, elem){
 let mid = arr.length/2;
 if(arr[mid] === elem) {
     return arr[mid];
 }
}

binarySearch([1,2,3,4,5,6,7,8], 4);
binarySearch([1,2,3,4,5,6,7,8], 7);



// TASK 06
//  Complete the 6th problem from past homework (subset of arrays)
//Write a JavaScript function to get all possible subsets of given length of the given
// array.
// Assume that all elements in the array are unique.
//
// Input                      Output
//
// [1, 2, 3, 4], 2       [ [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4] ]
// [1, 2, 3, 4],3        [ [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3,4] ]
// [1, 2, 3, 4, 5],3     [ [1,2,3], [1,2,4], [1,2,5], [1,3,4],
//                       [1,3,5], [1,4,5], [2,3,4], [2,3,5],
//                       [2,4,5], [3,4,5]]

/*
function subsets(arr) {
    let res = [];
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            res.unshift(arr[i]);
            res.unshift((arr[j]));
            newArr.push(res);

        }
    }
    return newArr;
}

console.log(subsets([1, 2, 3, 4]), 2);

*/

function subsets(arr, n) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        let res = [arr[i]];
        for (let j=0; j < arr.length; j++) {
            res.push(arr[j]);
            if(n === res.length) {
                newArr.push(res);
                newArr =[arr[i]];
            }
        }
    }
    return newArr
}

console.log(subsets([1, 2, 3, 4], 2))
