 // Task 01
 // .Write a function which receives an array and a number as arguments and returns a
 // new array from the elements of the given array which are larger than the given
 // number.
 //
 // Input                                                             Output
 // [10, 25, 16, -5, 30, 15, 24], 16                                 [25, 30, 24]
 // [1, 1, 2, -3, 0, 8, 4, 0], 9                                    “Such values do not exist.”


 function newArray(arr, val) {
     let newArr = [];
     for (let i = 0; i < arr.length; i++) {
         if (arr[i] > val) newArr.push(arr[i]);

     }
     return newArr;


 }


 console.log(newArray([10, 25, 16, -5, 30, 15, 24], 16 ));
 console.log(newArray([1, 1, 2, -3, 0, 8, 4, 0], 9 ));







 // Task 02
 // . Write a function, which receives two numbers as arguments and finds all numbers
 // between them such that each digit of the number is even. The numbers obtained should be
 // printed in a comma-separated sequence on a single line.
 //
 // Input                                                               Output
 // 19, 42                                                             “20, 22, 24, 26, 28, 40, 42”
 // 99, 199                                                           “Such numbers does not exist.”





 //Task 03
 // . Given an array of numbers which is almost sorted in ascending order. Find the index
 // where sorting order is violated.
 //
 // Input                                                                   Output
 // [2, 12, 15, 48, 64]                                                       -1
 // [-9, -4, -4, 3, 12, 4, 5]                                                  5


 function findIndex (array) {

     for (let i = 0; i <array.length; i++ ) {
         let result = -1;
         for (let j= i + 1; j < array.length; j++) {
             if(array[i] > array[j])
                 return console.log(result =j);
                 else return console.log(result);

         }
     }
     return result;


 }

 console.log(findIndex[2, 12, 15, 48, 64]);



 // Task 04
 //  .  Given an array of integers, find the pair of adjacent elements that has the largest
 // product and return that product.

 function adjacentElementsProduct(inputArray) {
     let elem =inputArray[0]*inputArray[1];
     let elem1 = elem;
     for(let i=1;i<inputArray.length;i++){
         console.log(elem);
          elem=inputArray[i]*inputArray[i+1];
         if(elem > elem1){
             elem1=elem;
         };
     };
     return elem1;
 };
 console.log(adjacentElementsProduct([-26,5,-15,1,-3]));




 // Task 05
 // Given an array of integers. All numbers are unique. Find the count of missing
 // numbers between minimum and maximum elements to make integers sequence.

 function findMissing (array) {
     let count = arr[arr.length-1],
         missingArr = [];
     for(let i =0; i < count; i++) {
         if(arr.indexOf(i) == -1) {
             missingArr.push(i);
         }
     }
     return array.concat(missingArr);

 }
 let arr = [2,5,9];
 console.log(findMissing(arr));



 // Task 06
 // Given an array consisting from the arrays of numbers (like a two-dimensional array).
 // Find sum of each row and print them as an array
 //
 // Input                                                              Output
 // [[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]                    [12, 1, 13, 15]
 // [[ 8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0, -1]]           [45, 8, 0, -6]
 // [[1], [2], [3], [4]]                                             [1, 2, 3, 4]


function  createNewArray(array) {
    let newArray = [];
    for(i =0; i <array.length; i ++) {
        for(j = 0; j < array[i].length; j++) {
           newArray += array[i][j]  ;

        }

    }
    return newArray
}
console.log(createNewArray([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]] ));







 // Task 07
 //  . Given an array of integers. Write a function that return new array from first array, where removed even numbers, and odd numbers was multiplied with new array length.
 // Input                                                  Output
 // [5, 4, 78, 0, -3, 7]                                  [15, -9, 21]
 // [2, 4, 6, 88]                                              []
 // [[]                                                        []


 function newArray (arr){
     for (let i = 0; i < arr.length; i++) {
         if (arr[i] % 2 == 0) {
             arr.splice(i, 2);
         }
     }
     return arr;
 }

 console.log(newArray([5, 4, 78, 0, -3, 7]));