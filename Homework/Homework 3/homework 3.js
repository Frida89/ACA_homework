// Task 01
// Given an array of numbers Write a function to separate odd and even numbers in
// different arrays

//        input                                                          output
 // [45, 12, 3, 6, 17, 0]                                             [45, 3, 17]
                                                                     // [12, 6, 0]
   // [1, 3, 5, 9]                                                      [1, 3, 5, 9]
                                                                        //[]


function oddEvenArr (array) {
    let evenArr = [];
    let oddArr = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0) {
              evenArr.push(array[i]);

        } else {
              oddArr.push(array[i]);


        }


    }

    return evenArr
    return oddArr;

}
console.log(oddEvenArr([45, 12, 3, 6, 17, 0]));
console.log(oddEvenArr([1, 3, 5, 9]));



// Task 02 Write a function filterRange(arr, a, b) that gets an array, looks for elements between a
// and b in it and returns an array of them.

// filterRange([1, 10, 20, 30), 9, 23)             [10, 20]
// filterRange([100, 200, 300), 9, 23)             []
// filterRange([-10, -8, 0, 10, 20), -100, 15)     [-10, -8, 0, 10]

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));

}




console.log(filterRange([1, 10, 20, 30], 9, 23));
console.log(filterRange([100, 200, 300], 9, 23));
console.log(filterRange([-10, -8, 0, 10, 20], -100, 15));



// Task 03  Write a function which finds corresponding object by it’s id and print it. Elsewhere it
// should print error message.
// findById(frameworks, 3)
// findById(frameworks, 13)

function findById() {
    const frameworks =[
        { id: 1, title: "react" },
        { id: 2, title: "angular" },
        { id: 3, title: "vue" },

    ];
    for (let i in frameworks)
        console.log(frameworks[i]);
    //return frameworks[i].key;


}
findById(3);


// Task 04
//  Write a function which generates object containing index and info from given array
//const arr = ['Godfather', 'Whiplash', 'Social Network']            // [
                                                                     //    {title: 'Godfather',
                                                                     //     indx: 0
                                                                     //    },
                                                                     //    {title: 'Whiplash',
                                                                     //      indx:1
                                                                     //    },
                                                                     //    {title: 'Social Network',
                                                                     //     index:2
                                                                     //     },
                                                                      //  ]







// Task 05 05 Write a function which removes all the words from array starting by a given letter.
// const arr = [‘Godfather’, ‘Game of
// thrones’,
// ‘Social Network’];
// removeByLetter(arr, ‘g’)                         [‘Social Network’]

//  const arr = [‘Manchester City’, ‘Milan’,
// ‘Marseille’];
// removeByLetter(arr, ‘m’)                              []



// const arr = [‘Godfather’, ‘Whiplash’,
// ‘Social
// Network’];
// removeByLetter(arr, ‘v’)                          [‘Godfather’, ‘Whiplash’, ‘Social Network’]



function removeByLetter (arr, letter) {
    for(let i =0; i < arr.length; i++) {
        if (arr[i].charAt(0) == letter) {
            let removeWord = arr.indexOf(arr[i]);
            arr.splice(removeWord, 1);
        } else {
            return arr;
        }

    }

}

let array = ['Godfather', 'Game of thronse', 'Social network'];

console.log(removeByLetter(array, 'g' ));


// 06
// Write a function that repeats the shorter string until it is equal to the length of the
// longer string.
// - Both strings will differ in length.
// - Both strings will contain at least one character.
// - Either of the two strings could be the shortest in length.
// lengthen("abcdefg", "ab")                                     "Abababa"
// lengthen("ingenius", "forest")                                "forestfo"
// lengthen("clap", "skipping")                                  "clapclap"



function  repeatShorterString(str1, str2) {
   if(str1.length > str2.length) {
       let count = str1.length - str2.length;
       let newStr = str2.repeat(count);
       return newStr;

   } else {
       let count1 = str2.length - str1.length;
       let newStr1 = str1.repeat(count1);
       return newStr1;

   }

}

console.log(repeatShorterString('abcdefg', 'ab'));
console.log(repeatShorterString('ingenius', 'forest'));

















