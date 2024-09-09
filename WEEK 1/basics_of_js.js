console.log("Hello, World!");

// Basic Data Types in JS are: Number, String, Boolean, Undefined, Null, Object, Symbol
// To declare a variable in JS, we use var, let, const

// var is a global scope variable(so, we can access the variable 
// even before it is declared, also is an older way of declaring variables)
// let is a block scope variable
// const is a block scope variable that cannot be reassigned
// there if/else, switch, for, while, do-while, for-in, for-of, try-catch, 
// throw, break, continue, return, etc. statements in JS
// how to make fucntions in JS
// function functionName(parameters){
//     // code
// }

// Q- Write a program to greet a person given their first and last name
function greet(){
    let firstName = "John";
    let lastName = "Doe";
    console.log("Hello, " + firstName + " " + lastName + "!");
}
// Output: Hello, John Doe!

// Q- Write a program that greets a person based on their gender(if/else)
function greetGender(){
    let gender = "male";
    if (gender === "male") console.log("Hello, Mr. John Doe!");
    else if (gender === "female") console.log("Hello, Ms. Jane Doe!");
    else console.log("Hello, " + firstName + " " + lastName + "!");
}

// Q- Write a program that counts from 0-1000 and prints(for loop)
function count(){
    let ans = 0;
    for(let i=0; i<=1000; i++){
        ans += i;
    }
    console.log(ans);
}

// Arrays in JS
// let arr = [1, 2, 3, 4, 5];
// let arr = new Array(1, 2, 3, 4, 5);
// let arr = new Array(5); // creates an array of size 5 with undefined values
// let arr = new Array(); // creates an empty array
// let arr = []; // creates an empty array
// let arr = [1, "hello", true, [1, 2, 3], {name: "John"}];
// console.log(arr[0]); // 1

// Objects in JS
// let obj = {name: "John", age: 25};
// console.log(obj.name); // John
// console.log(obj["name"]); // John
// obj.name = "Jane";
// console.log(obj.name); // Jane

function learningObjects(){
    let person = {name: "John", age: 25};
    let arr = [
        {name: "John", age: 25},
        {name: "Jane", age: 30},
        {name : "Jack", age: 35, metadata: { gender: "male", country: "USA"}}
    ];
    console.log(arr[2].metadata.gender);
    console.log(arr[2]["metadata"]["country"]);
}



// Q- Write a program that prints all the even numbers in an array
function printEvenNos(){
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 === 0) console.log(arr[i]);
    }
}

// Q- Write a program to print the biggest number in array
function printMax(){
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let max = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] > max) max = arr[i];
    }
    console.log(max);
}

// Q- Write a program that prints all the male people's frist name in an array of objects
function printMaleNames(){
    // let person = {name: "", male: false}; // object
    // let arr = [person, person, person]; // array of objects
    // Filling the array of objects
    // arr[0].name = "John";
    // arr[0].male = true;
    // arr[1].name = "Jane";
    // arr[1].male = false;
    // arr[2].name = "Jack";
    // arr[2].name = true;
    let arr = [{
        name: "John",
        male: true
    }, {
        name: "Jane",
        male: false
    }, {
        name: "Jack",
        male: true
    }];
    for(let i=0; i<arr.length; i++){
        if(arr[i].male) console.log(arr[i].name);
    }
}

// Q- Write a program that reverse all the elements in an array
function reverseArray(){
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let n = arr.length;
    for(let i=0; i<n; i++){
        console.log(arr[i]);
    }
    for(let i=0; i<n/2; i++){
        let temp = arr[i];
        arr[i] = arr[n-i-1];
        arr[n-i-1] = temp;
    }
    for(let i=0; i<n; i++){
        console.log(arr[i]);
    }
}

// Fuction calling
// Take arguments as an input
// Return a value as output
// You can think of them as ans independent program that 
// is supposed to do something given an input
// Fuctions can take other functoins as input - this wiil confuse you (callbacks)

// Q-Write a function that finds the sum of two numbers
function sum(a, b, fun){  
    fun(a+b); // This is know as callback as here we are going to pass a fucntion as an arguments.
}

// Q- Write another function that displays this reuslt in a pretty format
function displayResult(data){
    console.log("The result of the sum is : " + data);
}

// Q- Write a function that takes this sum and prints it in passive tense
function displayResultPassive(data){
    console.log("The sum's result is : " + data);
}

setTimeout(greet, 1*1000);

function main(){
    // greet();
    // greetGender();
    // count();
    // printEvenNos();
    // learningObjects();
    // printMax();11
    // printMaleNames();
    // reverseArray();
    // sum(1, 2, displayResult); // This are know as call backs
    // sum(1, 2, displayResultPassive);
} main();