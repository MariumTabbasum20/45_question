// 24. More Conditional Tests: 
// You don’t have to limit the number of tests you create to 10. If you want to try more 
// comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal 
// to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in an array
// • Test whether an item is not in an array
//equality and inequality & lower case functions
// let myName = "Marium";
// console.log(myName == "Marium"); //equal to
// console.log(myName !== "marium"); //not equal to
// //numerics
// let myNumber = 10;
// console.log(myNumber == 10); //true
// console.log(myNumber !== 10); //false
// console.log(myNumber > 5 ); //true greater than
// console.log(myNumber < 5 ); // false  less than
// console.log(myNumber <= 5 ); // false  less than equal to 
// console.log(myNumber >= 5 ); // greater than or equal to  
// and && ===== or
var num1 = 10;
var num2 = 5;
// console.log(num1 > 9 && num2 < 5); //false
//             //  true stat    false stat
// console.log(num1 > 9 || num2 <5)   //true
//true stat    //false stat
var myArray = [2, 3, "ali"];
var myString = "Roy";
console.log(Array.isArray(myArray));
console.log(Array.isArray(myString));
