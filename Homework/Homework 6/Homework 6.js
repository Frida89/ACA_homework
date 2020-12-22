// TASK 01
//  1. Given a word and a list of possible anagrams, select the correct sublist.
// Input                                                                 Output
// “listen”, ["enlists" "google" "inlets" "banana"]                    [“inlets”]
// “pencil”, [“licnep”, “circular”, “pupil”, “nilcpe”, “leppnec”]      [“licnep”, “nilcpe”]

function anagrams (arr, word) {

    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length != word.length) {
            return false;
        }
    }
}






//  TASK  02
// Given a string of digits, output all the contiguous substrings of length n in that string.
// Input                                                  Output

// ‘495215’, 3                                         ‘495’, ‘952’, ‘521’, ‘215’
// ‘abcdfghz‘, 7                                       ‘abcdfgh’, ‘bcdfghz’

function newStr(str, len) {
   let result = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = str.length; j - i >= len; j--) {
            result.push(str.slice(i, j));
        }
    }
    return result;
}


console.log(newStr('495215', 3));



// TASK 03
//  Create function which will shuffle (rendomize) the array

 function shuffle(array) {
    let newArr = [];
   let originalLength = array.length;
    for (let i = 0; i < originalLength; i++) {
       newArr.push(array.splice(Math.floor(Math.random()*array.length),1));
    }
    return newArr;
};

 console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


// TASK 04
// Write a function which works as Array.concat but working with infinite number of arrays
// Input                                                  Output
// concatMany([1, 2], [2, 3], [3, 4])                    [1, 2, 2, 3, 3, 4]

// concatMany([‘1’, ‘hello’], [[1, 2], 2])                 [‘1’, ‘hello’, [1, 2], 2]

function newArr (...args) {
  let arrClone = [];
   arrClone = [...args]
  return arrClone;
}
console.log(newArr([1, 2], [2, 3], [3, 4]));
console.log(newArr(['1', 'hello'], [[1, 2], 2]));

function newArr (arr1, arr2, ...arrn) {
    let arrClone = [];
    arrClone = [...arr1, arr2,...arrn]
    return arrClone;
}
console.log(newArr([1, 2], [2, 3], [3, 4]));
console.log(newArr(['1', 'hello'], [[1, 2], 2]));


let arr = [1, 2, 3, 4, 5];
let arr1 = [6, 7, 8, 9, 10]
let array = [...arr, ...arr1];
console.log(array);

// TASK 05
// Write your own filter, map, reduce, forEach functions

// Map
function myMap ( array, mapFunc) {
    let newMapArr = [];
    for(let i = 0; i < array.length; i++)  {
        let result = mapFunc(array[i], i, array);
        newMapArr.push(result);

    }
    return newMapArr

}
console.log(myMap([1,2,3,4,5], num=>num*2));
console.log(myMap([1,2,3,4,5], num=>num*num));
console.log(myMap([1,2,3,4,5], function(el, i, array) {return el*10}));

// filter

function myFilter ( array, filterFunc) {
    let newFilterArr = [];
    for(let i = 0; i < array.length; i++)  {
        let result = filterFunc(array[i], i, array);
        if(result) {
            newFilterArr.push(array[i]);
        }

    }
    return newFilterArr

}
console.log(myFilter([2,5, 8, 10, 10, 10, 5, 3], function(el, i, array){return el===10}))

// reduce
function myReduce ( array, reduceFunc, initialValue) {
    let accumlator = initialValue === undefined? 0:initialValue
    for(let i = 0; i < array.length; i++)  {
        accumlator = reduceFunc(accumlator, array[i], i, array);

    }
    return accumlator;
}

console.log(myReduce([2,5,3,5,5,5,5], function (acc, el, i, array, ) {return acc + el}, 5));

// forEach

function forEach ( array, forEachFunc) {
    let newForEachArr = [];
    for(let i = 0; i < array.length; i++)  {
        let result = forEachFunc(array[i], i, array);
        newForEachArr.push(result);

    }
    return newForEachArr

}
console.log(forEach([2, 5, 10, 20, 30], function (el, i, array) {return el*10}));





// TASK 06
// Create function which will store user object inside of a closure
// user object example
// {
// name: ‘John’,
// password: ‘itsnotyourbusiness’,
// balance: 100
// }
// Methods
// getName -> will return the user's name
// deposit( amount ) -> will add the amount to the user’s balance
// resetPassword(newPassord, oldPassword) -> will change the user’s password, if the old one is matching, otherwise, it will return ‘access denied’
// getBalance(password) -> will return the user’s balance if the password is correct, otherwise, it will return ‘access denied’
