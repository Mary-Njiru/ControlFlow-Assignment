//Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values
function changeArray2(arr) {
    const firstFour = arr.slice(0, 4).map(item => item * item);
    const lastTwo = arr.slice(-2).map(item => item + 10);
    const newArr = firstFour.concat(lastTwo);
    console.log(newArr);
   }
   changeArray2([2, 4, 6, 8, 10, 12]);


//Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
function iterateArray(arr) {
    let i = 0;
    while (i < arr.length){
        if (arr[i] === arr[4]) {
            console.log(arr[i]);
            break;
         }
         i++
    }
}

let arrNum = [1,2,3,4,5,6,7,8,9];
iterateArray(arrNum);


//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']
function itarateArrayOfStrings(arr) {
    for (let i = 0; i < arr.length; i++){
        if (i ===2){
            continue;
        }
        console.log(arr[i]);
    }
}

let fruits = ['apple', 'plum', 'banana', 'strawberries', 'kiwi'];
itarateArrayOfStrings(fruits);


//Write a function that accepts an array of strings and console.logs each element using a for loop.
function myStrings(arr) {
    for (let i =0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

myStrings(["Mary","Nataly","Mercy","Emily","Ivy"]);


//Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string. 
function reversedString(str) {
    let reversed = "";
    let i = str.length -1;
    while (i >= 0) {
        reversed += str[i];
        i --;
    }
    return reversed;
}

console.log(reversedString('Mary'));