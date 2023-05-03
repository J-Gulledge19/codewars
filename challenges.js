//---------------------Challenge 1---------------------

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    let arr = str.split(" ");
    let newArr = [];
       for ( let i = 0 ; i < arr.length ; i++ ) {
          if ( arr[i] === "!" || arr[i] === "?" ){
             newArr.push(arr[i]);
            } else { 
                let s = arr[i].slice(1)+arr[i].charAt(0)+"ay"
                newArr.push(s)
            }
        }
        return newArr.join(" ")
    } 

    // console.log(pigIt('Pig latin is cool'));
    // console.log(pigIt('Hello world !'));


//---------------------Challenge 2---------------------

// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

//Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 

function cakes(recipe, available) {
    let arr = [];
    for ( let key in recipe ) {
        if ( available[key] ) {
            arr.push(Math.floor(available[key]/recipe[key]))
        } else {
            return 0;
        }
    }
    return Math.min(...arr);
}

// console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
// console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));


//---------------------Challenge 3---------------------

// Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// console.log(goals(5, 10, 2));

//---------------------Challenge 4---------------------

// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

// Add the value "codewars" to the array websites 1,000 times.

let websites = []

for ( let i = 0 ; i < 1000 ; i++ ) {
websites.push("codewars");
}

// console.log(websites);

//---------------------Challenge 5---------------------

// Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

// Examples
// (1, 2)     => 1
// (3, 5)     => 1
// (-10, 100) => 2
// (-1, -9)   => 3
// (19, -56)  => 4

// There are four quadrants:

// First quadrant, the quadrant in the top-right, contains all points with positive X and Y
// Second quadrant, the quadrant in the top-left, contains all points with negative X, but positive Y
// Third quadrant, the quadrant in the bottom-left, contains all points with negative X and Y
// Fourth quadrant, the quadrant in the bottom-right, contains all points with positive X, but negative Y

function quadrant(x, y) {
    if ( x > 0 && y > 0 ) {
        return 1;
    } else if ( x < 0 && y > 0 ) {
        return 2;
    } else if ( x < 0 && y < 0 ) {
        return 3;
    } else if ( x > 0 && y < 0 ) {
        return 4;
    }
}

// console.log(quadrant(1, 2));
// console.log(quadrant(3, 5));
// console.log(quadrant(-10, 100));
// console.log(quadrant(-1, -9));
// console.log(quadrant(19, -56));

//---------------------Challenge 6---------------------

// Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

// The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

// function add(num) {
//   return num + 1;
// }

// function mult(num) {
//   return num * 30;
// }

// chain(2, [add, mult]);
// returns 90;

function chain(input, fs) {
    let result = input;
    for (let i = 0; i < fs.length; i++)
      result = fs[i](result);
    return result;
  }

// ---------------------Challenge 7---------------------

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
    let newStr = str.slice(1,-1);
    return newStr;
   };

// console.log(removeChar('hello'));

//---------------------Challenge 8---------------------

// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

function otherAngle(a, b) {
    return 180 - (a + b);
  }

// console.log(otherAngle(30, 60));
// console.log(otherAngle(60, 60));   
// console.log(otherAngle(43, 78));

//---------------------Challenge 9---------------------

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
    if ( num < 0 ) {
        return num;
    }
    else {
        negNum = num - (num * 2);
        return negNum;
    }
  }
