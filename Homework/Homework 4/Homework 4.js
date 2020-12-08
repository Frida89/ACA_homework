// Task 01
// Given an array. Write a recursive function that removes the first element and returns
// the given array. (without using arr.unshift(),assign second element to first, third element
// to second...)
//
// Input Output
// [6, 78, ‘n’, 0, 1] [78, ‘n’, 0, 1]
// [5]                []
// []                 []

function newArray(arr) {
    for(let i = 0; i <arr.length; i ++) {
        arr[i] = arr[i + 1];

    }
    arr.pop()
    return arr
}

console.log(newArray([6, 78, 'n', 0, 1]));
console.log(newArray([5]));
console.log(newArray([]));

// TASK 02
// Given an object. Invert it (keys become values and values become keys). If there is
// more than key for that given value create an array.
//
// Input                                 Output
// { a: ‘1’, b: ‘2’ }                   { 1: ‘a’, 2: ‘b’ }
// { a: ‘1’, b: ‘2’, c: ‘2’}            { 1: ‘a’, 2: [‘b’, ‘c’] }
// { a: ‘1’, b: ‘2’, c: ‘2’, d: ‘2'}    { 1: ‘a’, 2: [‘b’, ‘c’, ‘d’] }

function obj(object){
    let newObject = {};
    for(let key in object){
        newObject[object[key]] = key;
    }
    return newObject;
}

console.log(obj({ a : '1', b : '2' } ));
console.log(obj({ a : '1', b : '2', c : '2' } ));



// TASK 03
// Given the list of the following readers:
// [
// { book: &quot;Catcher in the Rye&quot;, readStatus: true, percent: 40},
// { book: &quot;Animal Farm&quot;, readStatus: true, percent: 20},
// { book: &quot;Solaris&quot;, readStatus: false, percent: 90 },
// { book: &quot;The Fall&quot;, readStatus: true, percent: 50 },
// { book: &quot;White Nights&quot;, readStatus: false, percent: 60 } ,
//
// { book: &quot;After Dark&quot;, readStatus: true, percent: 70 }
// ];
// Output the books sorted by the percent in descending order which readStatus is true.

let array = [

    {   book: 'Catcher in the Rye',
        readStatus: true,
        percent: 40
    },

    {
        book: "Animal Farm",
        readStatus: true,
        percent: 20,
    },

    {
        book: "Solaris",
        readStatus: false,
        percent: 90,
    },
    {
        book: "The Fall",
        readStatus: true,
        percent: 50,
    },
    {
        book: "White Nights",
        readStatus: false,
        percent: 60,
    },
    {
        book: "After dark",
        readStatus: true,
        percent: 70,
    }

]

array.sort(function (elem1, elem2) {
    return elem2.readStatus - elem1.readStatus;

})
console.log(array);

// TASK 04
// Given an array and a number N. Write a recursive function that rotates an array N
// places to the left. (Hint: to add element to the beginning use arr.unshift())
// [‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’, ‘g’, ‘h’] 3    [‘d’, ‘e’, ‘f’, ‘g’, ‘h’, ‘a’, ‘b’, ‘c’]
// [‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’, ‘g’, ‘h’] -2   [‘g’, ‘h’, ‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’]


function arrayRotate(arr, N) {
    N -= arr.length * Math.floor(N / arr.length);
    arr.push.apply(arr, arr.splice(0, N));
    return arr;
}

console.log(arrayRotate(['a', 'b', 'c','d', 'e', 'f', 'g','h'], 3))
console.log(arrayRotate(['a', 'b', 'c','d', 'e', 'f', 'g','h'], -2))


// TASK 05
// Create a function that builds a tree like object given an array with object which
// contains parent and id properties.
// You are given an object like this            You should create an object like this.




// Task 06
// Write a JavaScript function to get all possible subsets of given length of the given
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

 /* false
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


// TASK 07
// Create constructor function which instances would be objects with already
// implemented method "map"; (like Array.map) .

function Obj() {
    this.name = "Davit";
    this.surname = "Grigoryan";
    this.age = 25;
    this.changeAge = function () {
        return this.age * 2;
    }
};

let info = new Obj();
console.log(info)
console.log(info.changeAge());