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

