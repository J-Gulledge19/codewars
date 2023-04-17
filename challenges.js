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

    console.log(pigIt('Pig latin is cool'));
    console.log(pigIt('Hello world !'));